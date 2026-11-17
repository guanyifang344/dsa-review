VIEWS.mistakes = function(){
  const f = ctx.lesson || 'all';
  const ids = Object.keys(S.mistakes).filter(id => byId[id] && (f==='all'||byId[id].lesson===f)).sort((a,b) => S.mistakes[b].t - S.mistakes[a].t);
  const chips = [['all','全部']].concat(L.map(l=>[l.id,l.id])).map(([v,n]) => `<button class="chip ${f===v?'on':''}" data-v="${v}">${n}</button>`).join('');
  if(!Object.keys(S.mistakes).length){
    $('#app').innerHTML = `<h2 class="sec">错题本</h2><div class="card empty"><svg viewBox="0 0 24 24">${IC.mistakes}</svg><p>错题本是空的。练习答错的题会自动收进这里。</p><button class="btn" id="g">去练习</button></div>`;
    $('#g').onclick = () => go('practice'); return; }
  $('#app').innerHTML = `<h2 class="sec">错题本<small>${Object.keys(S.mistakes).length} 题</small></h2><div class="chips">${chips}</div>
  <div class="row" style="margin:0 0 16px"><button class="btn pink" id="rd" ${ids.length?'':'disabled'}>重做这 ${ids.length} 题</button><span class="mini">重做时答对的题会移出错题本</span></div>
  <div class="grid">${ids.map(id => { const q=byId[id], a=S.att[id]||{r:0,w:0};
    return `<div><div class="card mistake"><div class="main"><div class="mini">${pill(q)} ${q.topic} · 错 ${a.w} 次，对 ${a.r} 次</div><div class="t">${esc(q.prompt.replace(/\`\`\`(python)?/g,''))}</div></div>
    <div class="row"><button class="btn ghost" data-v="${id}">看解析</button><button class="btn ghost" data-d="${id}">移出</button></div></div><div id="det-${id}"></div></div>`; }).join('')}</div>`;
  document.querySelectorAll('.chip').forEach(c => c.onclick = () => go('mistakes',{lesson:c.dataset.v}));
  $('#rd').onclick = () => runQuiz(shuffle(ids.map(i=>byId[i])), {title:'错题重做', redo:true});
  document.querySelectorAll('[data-v].btn').forEach(b => b.onclick = () => { const q=byId[b.dataset.v], d=$('#det-'+q.id);
    d.innerHTML = d.innerHTML ? '' : `<div class="card" style="margin-top:8px"><div class="prompt">${md(q.prompt)}</div><div class="opts">${q.options.map((o,k)=>`<div class="opt ${k===q.answer?'right':''}"><span class="k">${'ABCD'[k]}</span><span>${md(o)}</span></div>`).join('')}</div><div class="exp">${md(expText(q))}</div></div>`; });
  document.querySelectorAll('[data-d]').forEach(b => b.onclick = () => { delete S.mistakes[b.dataset.d]; save(); go('mistakes',ctx); });
};
function radar(vals){
  const n = vals.length, cx = 150, cy = 150, R = 110, pt = (i,r) => { const a = -Math.PI/2 + i*2*Math.PI/n; return [cx+Math.cos(a)*R*r, cy+Math.sin(a)*R*r]; };
  const ring = r => vals.map((_,i)=>pt(i,r).join(',')).join(' ');
  const shape = vals.map((v,i)=>pt(i,Math.max(.04,v.v/100)).join(',')).join(' ');
  return `<svg class="radar" viewBox="0 0 300 300" role="img" aria-label="各课正确率雷达图">
  <defs><linearGradient id="rg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2ef2d6" stop-opacity=".55"/><stop offset="1" stop-color="#8f7bff" stop-opacity=".55"/></linearGradient></defs>
  ${[.25,.5,.75,1].map(r=>`<polygon points="${ring(r)}" fill="none" stroke="rgba(143,150,255,.2)"/>`).join('')}
  ${vals.map((_,i)=>`<line x1="${cx}" y1="${cy}" x2="${pt(i,1)[0]}" y2="${pt(i,1)[1]}" stroke="rgba(143,150,255,.14)"/>`).join('')}
  <polygon points="${shape}" fill="url(#rg)" stroke="#2ef2d6" stroke-width="2" stroke-linejoin="round"/>
  ${vals.map((v,i)=>{const p=pt(i,Math.max(.04,v.v/100)),t=pt(i,1.2);return `<circle cx="${p[0]}" cy="${p[1]}" r="3.5" fill="${LCOL[v.id]}"/><text x="${t[0]}" y="${t[1]}" fill="#8a90bd" font-size="12" font-family="ui-monospace,Menlo,monospace" text-anchor="middle" dominant-baseline="middle">${v.id}</text>`}).join('')}</svg>`;
}
VIEWS.stats = function(){
  const total = Q.length, done = Object.keys(S.att).length;
  let r=0,w=0; Object.values(S.att).forEach(a => {r+=a.r; w+=a.w;});
  const st = L.map(l => ({l, s:lessonStat(l.id), wr:Q.filter(q=>q.lesson===l.id && S.mistakes[q.id]).length}));
  const rows = st.map(({l,s,wr}) => `<div class="rowstat"><span class="id" style="color:${LCOL[l.id]}">${l.id}</span><div><div style="font-weight:600">${l.title}</div><div class="bar" style="margin-top:6px"><i style="width:${s.tried?s.acc:0}%;background:${LCOL[l.id]}"></i></div><div class="mini" style="margin-top:5px">已做 ${s.done}/${s.total} · 错题本 ${wr}${s.tried&&s.acc<70?' <span class="weak">薄弱，优先复习</span>':''}</div></div><b style="font:800 24px var(--disp)">${s.tried?s.acc+'%':'—'}</b></div>`).join('');
  const bd = [['初学者',()=>done>=1,'✿'],['十题斩',()=>done>=10,'⚔'],['半程',()=>done>=Q.length/2,'☄'],['全题库',()=>done>=Q.length,'♛'],['连击 5',()=>S.streakBest>=5,'✦'],['完成模拟考',()=>S.exams.length>=1,'✎'],['S 级',()=>S.exams.some(e=>e.score>=90),'★'],['错题清零',()=>done>=20&&!Object.keys(S.mistakes).length,'✚']];
  $('#app').innerHTML = `<h2 class="sec">学习看板</h2><div class="kpis"><div class="card kpi"><b>${pct(r,r+w)}<i>%</i></b><span>总正确率</span></div><div class="card kpi"><b>${done}<i> / ${total}</i></b><span>覆盖题目</span></div><div class="card kpi"><b>Lv.${level()}</b><span>${S.xp} XP</span></div><div class="card kpi"><b>${S.exams.length?Math.max(...S.exams.map(e=>e.score)):'—'}</b><span>模拟考最高分</span></div></div>
  <h2 class="sec">分课掌握</h2><div class="card radarbox">${radar(st.map(({l,s})=>({id:l.id,v:s.tried?s.acc:0})))}<div>${rows}</div></div>
  <h2 class="sec">模拟考记录</h2><div class="card">${S.exams.length?S.exams.slice().reverse().map(e=>`<div class="rowstat" style="grid-template-columns:90px 1fr"><b style="font:800 26px var(--disp)">${e.score} 分</b><span class="mini">答对 ${e.ok} / 33 · ${new Date(e.t).toLocaleString()}</span></div>`).join(''):'<span class="mini">还没有记录。完成一次模拟考后会显示在这里。</span>'}</div>
  <h2 class="sec">成就</h2><div class="badges">${bd.map(([n,f,i])=>`<div class="badge ${f()?'on':''}"><i>${i}</i>${n}</div>`).join('')}</div>
  <div class="row"><button class="btn ghost" id="rs">清空所有记录</button></div>`;
  $('#rs').onclick = () => { if(confirm('确定清空全部答题记录、错题本和经验值吗？')){ localStorage.removeItem(KEY); location.reload(); } };
};
