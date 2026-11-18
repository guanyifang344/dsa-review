const rankApi = 'https://dsa-dojo-rank.awake-lily-0010.chatgpt.site';
const playerKey = 'dsa-dojo-player-v1';
const readPlayer = () => JSON.parse(localStorage.getItem(playerKey) || 'null');
const storePlayer = p => localStorage.setItem(playerKey,JSON.stringify(p));
const validName = value => value.length > 0 && [...value].length <= 20 && !/[\p{Cc}\p{Cf}]/u.test(value);
const rankLock = action => navigator.locks ? navigator.locks.request(playerKey, action) : action();
let rankTimer, rankRequest = 0;
async function rankFetch(path, body) {
  const response = await fetch(rankApi+path, {
    method:body ? 'POST' : 'GET', body:body ? JSON.stringify(body) : undefined,
    credentials:'omit', cache:'no-store', signal:AbortSignal.timeout(12000)
  });
  if (!response.ok) throw new Error('排行榜暂时无法连接');
  return response.json();
}
async function syncRank() {
  return rankLock(async () => {
    const p = readPlayer();
    if (!p) return;
    const xp = Math.max(S.xp, JSON.parse(localStorage.getItem(KEY) || '{}').xp || 0);
    if (p.id && p.synced >= xp) return;
    const row = await rankFetch('/sync',{key:p.key,nickname:p.nickname,xp});
    if (!Number.isInteger(row.id) || !Number.isSafeInteger(row.xp)) throw new Error('同步失败');
    if (readPlayer()?.key === p.key) storePlayer({...p,id:row.id,synced:row.xp});
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
  document.body.classList.add('enrolling');
  $('#app').innerHTML = `<article class="entry-card">
    <div class="entry-art" aria-hidden="true"></div>
    <section class="entry-form"><div class="register-label">DSA · 玩家名册</div>
    <h1>签下你的昵称</h1><p>这个名字将与你的等级和经验值一起出现在全站排行榜。</p>
    <form id="enroll"><label for="nickname">玩家昵称</label>
    <input id="nickname" name="nickname" autocomplete="nickname" required placeholder="输入 1 至 20 个字符" aria-describedby="name-note">
    <div id="name-note" class="register-note" role="status">${S.xp ? '已读到本机的 '+S.xp+' XP，登记后计入排名。':'学习进度保存在当前浏览器。'}</div>
    <button class="register-button">登记并进入道场 <span aria-hidden="true">→</span></button></form></section></article>`;
  $('#enroll').onsubmit = async e => {
    e.preventDefault();
    const nickname = $('#nickname').value.trim();
    if (!validName(nickname)) { $('#name-note').textContent='请输入 1 至 20 个可见字符。'; $('#nickname').focus(); return; }
    try {
      await rankLock(() => {
        if (readPlayer()) return;
        const key = Array.from(crypto.getRandomValues(new Uint8Array(32)), b=>b.toString(16).padStart(2,'0')).join('');
        storePlayer({key,nickname,id:null,synced:null});
      });
      startPlayer();
    } catch { $('#name-note').textContent='无法保存昵称，请允许浏览器存储后重试。'; }
  };
}
window.addEventListener('online',scheduleRankSync);
window.addEventListener('storage', e => {
  if (e.key === playerKey && (!e.newValue || !e.oldValue)) location.reload();
});
setInterval(() => { if (!document.hidden && readPlayer()) scheduleRankSync(); },30000);
VIEWS.ranking = async function(){
  const request = ++rankRequest, page = ctx.page || 1, p = readPlayer();
  const title = '<header class="rank-cover"><div><div class="register-label">DSA · 经验名册</div><h1>排行榜</h1><p>按累计经验排列，同分并列。</p></div></header>';
  $('#app').innerHTML = title+'<section class="rank-paper" id="rankbody" aria-live="polite">正在读取全站排名…</section>';
  const active = () => tab==='ranking' && request===rankRequest;
  try {
    await syncRank();
    const data = await rankFetch('/board?page='+page+'&player='+readPlayer().id);
    if (!active()) return;
    const me = data.mine;
    const fmt = n=>Number(n).toLocaleString('zh-CN');
    const rows = data.rows.map(row => `<tr class="${row.id===me?.id?'rank-me':''}"><td>${fmt(row.place)}</td><th scope="row">${esc(row.nickname)}${row.id===me?.id?' <small>我</small>':''}</th><td>Lv. ${Math.floor(Math.sqrt(row.xp/20))+1}</td><td>${fmt(row.xp)}</td></tr>`).join('');
    $('#rankbody').innerHTML = `<div class="my-standing"><div><small>我的名次</small><strong>${me?'第 '+fmt(me.place)+' 名':'等待同步'}</strong></div><div><small>玩家</small><b>${esc(p.nickname)}</b></div><div><small>累计经验</small><b>${fmt(me?.xp ?? S.xp)} XP</b></div></div>
    <div class="rank-toolbar"><h2>全站名册 <small>${fmt(data.total)} 位玩家</small></h2><button id="rank-refresh">刷新</button></div>
    <table class="rank-table"><thead><tr><th>名次</th><th>昵称</th><th>等级</th><th>经验值</th></tr></thead><tbody>${rows}</tbody></table>
    ${data.total>50 || page>1 ? '<div class="rank-pager"><button id="prev-rank" '+(page===1?'disabled':'')+'>上一页</button><span>第 '+page+' 页</span><button id="next-rank" '+(page*50>=data.total?'disabled':'')+'>下一页</button></div>':''}`;
    $('#rank-refresh').onclick = () => go('ranking',{page});
    if ($('#prev-rank')) $('#prev-rank').onclick = () => go('ranking',{page:page-1});
    if ($('#next-rank')) $('#next-rank').onclick = () => go('ranking',{page:page+1});
  } catch {
    if (active()) {
      $('#rankbody').innerHTML='<p>暂时无法读取全站排名。本机经验已保留，联网后会再次同步。</p><button id="retry-rank">重试</button>';
      $('#retry-rank').onclick = () => go('ranking',{page});
    }
  }
};
