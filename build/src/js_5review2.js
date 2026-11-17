VIEWS.review = function(){
  const rv = rvPrep(), id = ctx.l || 'L01', mode = ctx.mode || 'full';
  const l = L.find(x => x.id===id), R = REVIEW[id], c = LCOL[id], idx = L.findIndex(x => x.id===id);
  const done = rv[id] && rv[id].done;
  const chips = L.map(x => `<button class="chip ${x.id===id?'on':''} ${rv[x.id]&&rv[x.id].done?'fin':''}" data-v="${x.id}" style="--c:${LCOL[x.id]}">${x.id} ${x.title}</button>`).join('');
  const reviewed = L.filter(x => rv[x.id] && rv[x.id].done).length;
  const full = () => `<p class="lead">${md(R.lead)}</p>
    <div class="rvgrid"><aside class="toc" aria-label="本课目录"><b>本课目录</b>${R.sections.map(s=>`<a href="#rv-${s.id}" data-sec="${s.id}">${s.title}</a>`).join('')}</aside>
    <div class="rvbody">${R.sections.map(s=>`<section id="rv-${s.id}" class="rsec"><h3 style="--c:${c}">${s.title}</h3>${s.blocks.map(b=>rvBlock(b)).join('')}</section>`).join('')}
    <section class="rsec" id="rv-quiz"><h3 style="--c:${c}">本课自测</h3><p class="rp">4 道题，答完立刻看解析，答错的会进错题本。</p><div class="row" style="margin-top:8px"><button class="btn" id="qz">开始自测</button><span class="mini">${Q.filter(q=>q.lesson===id).length} 道本课题目</span></div></section></div></div>`;
  const quick = () => `<div class="grid g2"><div class="card" style="box-shadow:inset 0 0 0 1px var(--line),inset 0 3px 0 ${c}"><h3 style="font-size:26px;color:${c}">必须掌握</h3><ul class="rl">${l.points.map(p=>`<li>${esc(p)}</li>`).join('')}</ul></div>
    <div class="card trap"><h3 style="font-size:26px;color:var(--pink)">易错点</h3><ul class="rl">${l.traps.map(p=>`<li>${esc(p)}</li>`).join('')}</ul></div></div>`;
  $('#app').innerHTML = `<h2 class="sec">快速复习<small>已复习 ${reviewed} / 8 课</small></h2>
  <div class="chips lessonbar">${chips}</div>
  <div class="rvhead card" style="--c:${c}"><div><div class="mini">${l.en}</div><h2>${l.id}　${l.title}</h2></div><span class="sp"></span>
    <div class="seg"><button class="${mode==='full'?'on':''}" data-m="full">完整详解</button><button class="${mode==='quick'?'on':''}" data-m="quick">一分钟速览</button></div></div>
  <div id="rvc">${mode==='full'?full():quick()}</div>
  <div class="rvfoot"><button class="btn ghost" id="pv" ${idx?'':'disabled'}>上一课</button><span class="sp"></span><button class="btn ${done?'ghost':'gold'}" id="dn">${done?'✓ 已复习（点击取消）':'标记为已复习'}</button><span class="sp"></span><button class="btn ghost" id="nx" ${idx<L.length-1?'':'disabled'}>下一课</button></div>
  ${mode==='full'?'':`<div class="row"><button class="btn" id="pr">练习 ${l.id}</button></div>`}
  <h2 class="sec">考前三句话</h2>${COMMON.map(t=>{const[e,z]=t.split('  ');return `<div class="mantra">${esc(e)}<span class="zh">${esc(z||'')}</span></div>`}).join('')}
  <p class="mini">依据 L09 复习笔记和各课笔记整理。插入排序不在 MCQ1 范围内。</p>`;
  document.querySelectorAll('.lessonbar .chip').forEach(b => b.onclick = () => go('review',{l:b.dataset.v,mode}));
  document.querySelectorAll('.seg button').forEach(b => b.onclick = () => go('review',{l:id,mode:b.dataset.m}));
  $('#pv').onclick = () => go('review',{l:L[idx-1].id,mode}); $('#nx').onclick = () => go('review',{l:L[idx+1].id,mode});
  $('#dn').onclick = () => { rv[id] = {done:!done, t:Date.now()}; save(); if(!done) toast(id+' 已标记为已复习'); go('review',ctx); };
  if($('#pr')) $('#pr').onclick = () => go('practice',{lesson:id,mode:'all'});
  if(mode==='full'){
    rvMountDemos();
    $('#qz').onclick = () => { const pool = Q.filter(q=>q.lesson===id); runQuiz(shuffle(pool).slice(0,4), {title:id+' 自测', back:{l:id}}); };
    const links = [...document.querySelectorAll('.toc a')];
    links.forEach(a => a.onclick = e => { e.preventDefault(); document.getElementById('rv-'+a.dataset.sec).scrollIntoView({behavior:reduceMotion()?'auto':'smooth',block:'start'}); });
    if('IntersectionObserver' in window){
      const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ links.forEach(a => a.classList.toggle('on', 'rv-'+a.dataset.sec===e.target.id)); } }), {rootMargin:'-20% 0px -70% 0px'});
      document.querySelectorAll('.rsec').forEach(s => io.observe(s));
    }
  }
};
