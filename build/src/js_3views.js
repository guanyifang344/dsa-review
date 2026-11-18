function addXp(n){ const before=level(); S.xp+=n; save(); if(level()>before) toast('升级！Lv.'+level()); hud(); }
function record(q, ok, redo){
  const mcq1 = Boolean(byId[q.id]);
  const attempts = mcq1 ? S.att : (S.practiceAtt ||= {});
  const a = attempts[q.id] || (attempts[q.id] = {r:0,w:0});
  ok ? a.r++ : a.w++; a.last = ok; a.t = Date.now();
  const filedMistake = mcq1 && !ok;
  if(filedMistake){ S.mistakes[q.id] = {t:Date.now()}; }
  else if(ok && redo && S.mistakes[q.id]){ delete S.mistakes[q.id]; }
  save();
  return filedMistake;
}
function hud(){
  const lv = level(), cur = 20*(lv-1)*(lv-1), nxt = 20*lv*lv;
  $('#hud').innerHTML = `<span class="lv">Lv.${lv}</span><div class="xpbar"><i style="width:${Math.min(100,(S.xp-cur)/(nxt-cur)*100)}%"></i></div><span class="xp">${S.xp} / ${nxt} XP</span>`;
}
const TABS = [['home','道场'],['practice','练习'],['exam','模拟考'],['mistakes','错题本'],['stats','看板'],['review','快速复习'],['guide','使用教程']];
let tab = 'home', ctx = {};
function nav(){
  const nm = Object.keys(S.mistakes).length;
  $('#nav').innerHTML = TABS.map(([k,n]) => `<button class="${tab===k?'on':''}" data-t="${k}">${ico(k)}<span>${n}</span>${k==='mistakes'&&nm?`<b class="n">${nm}</b>`:''}</button>`).join('');
  $('#nav').querySelectorAll('button').forEach(b => b.onclick = () => go(b.dataset.t));
}
function go(t, c){ if(ctx.timer){clearInterval(ctx.timer);} if(stage){clearInterval(stage.timer);} document.onkeydown=null; tab=t; ctx=c||{}; nav(); window.scrollTo(0,0); VIEWS[t](); }
function lessonStat(id){
  const qs = Q.filter(q => q.lesson===id); let done=0, right=0, tried=0;
  qs.forEach(q => { const a=S.att[q.id]; if(a){ done++; tried+=a.r+a.w; right+=a.r; } });
  const okNow = qs.filter(q => S.att[q.id] && S.att[q.id].last).length;
  return {total:qs.length, done, okNow, acc:pct(right,tried), tried};
}
const VIEWS = {};
VIEWS.home = function(){
  const total = Q.length, done = Object.keys(S.att).length, wrong = Object.keys(S.mistakes).length;
  $('#app').innerHTML = `${S.seen.guide?'':`<div class="tip"><span><b>第一次使用？</b>1 分钟看懂每个页面怎么用。</span><span class="sp"></span><button class="btn gold" id="tg">看教程</button><button class="btn ghost" id="tx">不再提示</button></div>`}
  <section class="card stage"><div class="top"><h1>先在纸上推演，<em>再选答案</em></h1>
    <p>${total} 道练习题覆盖 L01 到 L08。练习错题自动进错题本；模拟考有三套独立试卷，按真实卷面计时。下面的演示台可以单步看四种算法怎么跑。</p></div>
    <div class="scope"><div class="bar"><div class="tabs2" id="dtabs">${Object.entries(DEMOS).map(([k,d])=>`<button data-k="${k}">${d.name}</button>`).join('')}</div>
      <div class="ctl"><button id="pv" aria-label="上一步"><svg viewBox="0 0 16 16"><path d="M12 2v12L4 8zM3 2h2v12H3z"/></svg></button><button id="pp" aria-label="播放或暂停"></button><button id="nx" aria-label="下一步"><svg viewBox="0 0 16 16"><path d="M4 2v12l8-6zM11 2h2v12h-2z"/></svg></button><button id="rs" aria-label="重播"><svg viewBox="0 0 16 16"><path d="M8 2a6 6 0 11-6 6h2a4 4 0 104-4v3L4 3.5 8 0z"/></svg></button></div></div>
      <div class="plot" id="plot"></div><div class="readout" id="readout"></div></div>
    <div class="row"><button class="btn gold" id="b1">开始练习</button><button class="btn ghost" id="b2">45 分钟模拟考</button>${wrong?`<button class="btn pink" id="b3">重做错题（${wrong}）</button>`:''}</div></section>
  <div class="kpis"><div class="card kpi"><b>${done}<i> / ${total}</i></b><span>已做题目</span></div><div class="card kpi"><b>${pct(Object.values(S.att).reduce((a,x)=>a+x.r,0),Object.values(S.att).reduce((a,x)=>a+x.r+x.w,0))}<i>%</i></b><span>总正确率</span></div><div class="card kpi"><b>${wrong}</b><span>错题本</span></div><div class="card kpi"><b>${S.exams.length?Math.max(...S.exams.map(e=>e.score)):'—'}</b><span>模拟考最高分</span></div></div>
  <h2 class="sec">关卡地图<small>点一课开始练习</small></h2><div class="map" id="ls"></div>
  <h2 class="sec">考前三句话</h2>${COMMON.map(t=>{const[e,z]=t.split('  ');return `<div class="mantra">${esc(e)}<span class="zh">${esc(z||'')}</span></div>`}).join('')}`;
  if($('#tg')){ $('#tg').onclick = () => go('guide'); $('#tx').onclick = () => { S.seen.guide = true; save(); go('home'); }; }
  $('#b1').onclick = () => go('practice'); $('#b2').onclick = () => go('exam'); if($('#b3')) $('#b3').onclick = () => go('mistakes');
  document.querySelectorAll('#dtabs button').forEach(b => b.onclick = () => { stageLoad(b.dataset.k); markTab(); });
  const markTab = () => document.querySelectorAll('#dtabs button').forEach(b => b.classList.toggle('on', b.dataset.k===stage.key));
  $('#pv').onclick = () => stageStep(-1); $('#nx').onclick = () => stageStep(1); $('#pp').onclick = stageToggle; $('#rs').onclick = () => { stageLoad(stage.key); };
  stageLoad('bubble'); markTab();
  $('#ls').innerHTML = L.map(l => { const s = lessonStat(l.id), c = LCOL[l.id];
    const segs = Array.from({length:10},(_,i)=>`<i class="${i < Math.round(s.okNow/s.total*10)?'on':''}"></i>`).join('');
    return `<button class="card lesson" data-l="${l.id}" style="--c:${c}"><div class="art"><svg viewBox="0 0 160 96" preserveAspectRatio="xMinYMid meet">${ART[l.id]}</svg><span class="id">${l.id}</span></div>
    <div class="body"><h3>${l.title}</h3><small>${s.done}/${s.total} 题 · ${s.tried?'正确率 '+s.acc+'%':'未开始'}</small><div class="meter">${segs}</div></div></button>`; }).join('');
  document.querySelectorAll('.lesson').forEach(e => e.onclick = () => go('practice', {lesson:e.dataset.l}));
};
