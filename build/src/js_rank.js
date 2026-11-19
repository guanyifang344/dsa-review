const rankApi = 'https://dsa-dojo-rank.awake-lily-0010.chatgpt.site';
let rankTimer, rankRequest = 0;
async function rankFetch(path, body) {
  const controller = typeof AbortController === 'function' ? new AbortController() : null;
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => {
      reject(new Error('排行榜服务响应超时。'));
      controller?.abort();
    },12000);
  });
  async function send() {
    let response;
    try {
      response = await fetch(rankApi+path, {
        method:body ? 'POST' : 'GET', body:body ? JSON.stringify(body) : undefined,
        credentials:'omit', cache:'no-store', signal:controller?.signal
      });
    } catch { throw new Error('当前浏览器未能连接到排行榜服务。'); }
    if (!response.ok) throw new Error('排行榜服务返回 HTTP '+response.status+'。');
    try { return await response.json(); }
    catch { throw new Error('排行榜服务返回了无法读取的数据。'); }
  }
  try { return await Promise.race([send(),timeout]); }
  finally { clearTimeout(timer); }
}
async function syncRank(force = false) {
  return rankLock(async () => {
    const p = readPlayer();
    if (!p) return;
    const xp = Math.max(S.xp, JSON.parse(localStorage.getItem(KEY) || '{}').xp || 0);
    if (!force && p.id && p.synced >= xp) return;
    const row = await rankFetch('/sync',{key:p.key,nickname:p.nickname,xp});
    if (!Number.isInteger(row.id) || !Number.isSafeInteger(row.xp)) throw new Error('同步失败');
    if (readPlayer()?.key === p.key) storePlayer({...p,id:row.id,synced:row.xp});
    return true;
  });
}
function scheduleRankSync() {
  clearTimeout(rankTimer);
  rankTimer = setTimeout(() => syncRank().catch(() => {}),600);
}
async function resetPlayer() {
  clearTimeout(rankTimer);
  try {
    await rankLock(async () => {
      const p = readPlayer();
      if (p) await rankFetch('/remove',{key:p.key});
      localStorage.removeItem(playerKey);
      localStorage.removeItem(KEY);
    });
    location.reload();
  } catch {toast('未能移除排名，请联网后重试。');}
}
function startPlayer() {
  const p = readPlayer();
  if (p && validName(p.nickname)) {
    document.body.classList.remove('enrolling');
    hud(); go('home'); scheduleRankSync();
    return;
  }
  location.replace('./?next=study');
}
function recoverRanking() {
  if (document.hidden || !readPlayer()) return;
  if (tab==='ranking' && ($('#retry-rank') || $('#rank-pending'))) VIEWS.ranking();
  else scheduleRankSync();
}
window.addEventListener('online',recoverRanking);
document.addEventListener('visibilitychange',recoverRanking);
function refreshLocalProgress() {
  const latest = JSON.parse(localStorage.getItem(KEY) || 'null');
  if (!latest) return;
  if (S.rv && latest.rv) Object.assign(S.rv,latest.rv);
  S = {...latest,rv:S.rv || latest.rv};
  if (readPlayer()) hud();
}
window.addEventListener('pageshow', e => { if (e.persisted) { refreshLocalProgress(); recoverRanking(); } });
window.addEventListener('storage', e => {
  if (e.key === KEY && e.newValue) refreshLocalProgress();
  if (e.key === playerKey && (!e.newValue || !e.oldValue)) location.reload();
});
setInterval(recoverRanking,30000);
VIEWS.ranking = async function(){
  const request = ++rankRequest, page = ctx.page || 1, p = readPlayer();
  const title = '<header class="rank-cover"><div><div class="register-label">DSA · 经验名册</div><h1>排行榜</h1><p>按累计经验排列，同分并列。</p></div></header>';
  $('#app').innerHTML = title+'<section class="rank-paper" id="rankbody" aria-live="polite">正在读取全站排名…</section>';
  const active = () => tab==='ranking' && request===rankRequest;
  const board = () => rankFetch('/board?page='+page+'&player='+(readPlayer()?.id || 0));
  const sync = syncRank().then(changed => ({changed}), () => ({pending:true}));
  function render(data, pending) {
    if (!active()) return;
    const me = data.mine;
    const fmt = n=>Number(n).toLocaleString('zh-CN');
    const rows = data.rows.map(row => `<tr class="${row.id===me?.id?'rank-me':''}"><td>${fmt(row.place)}</td><th scope="row">${esc(row.nickname)}${row.id===me?.id?' <small>我</small>':''}</th><td>Lv. ${Math.floor(Math.sqrt(row.xp/20))+1}</td><td>${fmt(row.xp)}</td></tr>`).join('');
    $('#rankbody').innerHTML = `<div class="my-standing"><div><small>我的名次</small><strong>${me?'第 '+fmt(me.place)+' 名':'等待同步'}</strong></div><div><small>玩家</small><b>${esc(p.nickname)}</b></div><div><small>累计经验</small><b>${fmt(me?.xp ?? S.xp)} XP</b></div></div>
    ${pending ? '<p id="rank-pending" role="status">排名更新中，以下为最近读取的结果。</p>' : ''}
    <div class="rank-toolbar"><h2>全站名册 <small>${fmt(data.total)} 位玩家</small></h2><button id="rank-refresh">刷新</button></div>
    <table class="rank-table"><thead><tr><th>名次</th><th>昵称</th><th>等级</th><th>经验值</th></tr></thead><tbody>${rows}</tbody></table>
    ${data.total>50 || page>1 ? '<div class="rank-pager"><button id="prev-rank" '+(page===1?'disabled':'')+'>上一页</button><span>第 '+page+' 页</span><button id="next-rank" '+(page*50>=data.total?'disabled':'')+'>下一页</button></div>':''}`;
    $('#rank-refresh').onclick = () => go('ranking',{page});
    if ($('#prev-rank')) $('#prev-rank').onclick = () => go('ranking',{page:page-1});
    if ($('#next-rank')) $('#next-rank').onclick = () => go('ranking',{page:page+1});
  }
  try {
    const data = await board();
    if (!active()) return;
    const dirty = !p.id || p.synced < S.xp;
    render(data, dirty);
    const result = await sync;
    if (!active()) return;
    let changed = result.changed;
    if (!changed && !result.pending && !data.mine && readPlayer()?.id) {
      try { changed = await syncRank(true); }
      catch { render(data,true); return; }
    }
    if (changed) {
      try { render(await board(),false); }
      catch { render(data,true); }
    } else render(data,result.pending);
  } catch (error) {
    if (active()) {
      $('#rankbody').innerHTML='<p id="rank-error"></p><p>提示：请使用特殊的网络连接</p><p>学习记录保存在本机。此页会自动重试；若持续失败，可在当前浏览器切换 Wi-Fi 或移动数据后重试。</p><button id="retry-rank">重试</button>';
      $('#rank-error').textContent = error.message || '暂时无法读取全站排名。';
      $('#retry-rank').onclick = () => go('ranking',{page});
    }
  }
};
