const pill = q => `<span class="pill ${q.src}">${srcName[q.src]}</span><span class="pill lz" style="--lc:${LCOL[q.lesson]}">${q.lesson}</span>`;
const expText = q => ((q.zh?'【中文】'+q.zh+'\n':'')+(q.exp||'')).trim();
const pad = n => String(n).padStart(2,'0');
const STAR = '<svg viewBox="0 0 24 24"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>';
// donut: frac 0..1, centre label + sub label
const ring = (frac, col, big, sub) => `<svg class="ring" viewBox="0 0 120 120" role="img" aria-label="${big} ${sub}"><circle cx="60" cy="60" r="52" class="rtrack"/><circle cx="60" cy="60" r="52" class="rval" transform="rotate(-90 60 60)" style="stroke:${col};stroke-dasharray:${(326.7*Math.max(0,Math.min(1,frac))).toFixed(1)} 326.7"/><text x="60" y="64" text-anchor="middle" class="rbig">${big}</text><text x="60" y="84" text-anchor="middle" class="rsub">${sub}</text></svg>`;
function runQuiz(list, opt){
  let i = 0, combo = 0, best = 0, right = 0, gained = 0, filedMistakes = 0;
  const marks = list.map(()=>'');
  const exit = () => opt.back ? go('review',{l:opt.back.l}) : opt.redo ? go('mistakes') : go('practice',ctx);
  function show(){
    if(i >= list.length) return finish();
    const q = list[i], col = LCOL[q.lesson]; let picked = null;
    $('#app').innerHTML = `<div class="qwrap" style="--lc:${col}">
    <div class="qtop"><button class="xbtn" id="qx">退出</button><span class="qtitle">${opt.title}</span><span class="sp"></span><span class="combo ${combo>=2?'hot':''}">连击 <b>×${combo}</b></span></div>
    <div class="segs">${list.map((_,k)=>`<i class="${k===i?'cur':marks[k]}"></i>`).join('')}</div>
    <article class="qcard"><div class="qh"><span class="qno">${pad(i+1)}<small> / ${pad(list.length)}</small></span><span class="qtags">${pill(q)}</span><button class="star ${S.star[q.id]?'on':''}" id="st" aria-label="标记这道题" aria-pressed="${!!S.star[q.id]}">${STAR}</button></div>
    <div class="qtopic">${q.topic}</div><div class="prompt">${md(q.prompt)}</div>${refCode(q)}
    <div class="opts">${q.options.map((o,k)=>`<button class="opt" data-k="${k}"><span class="k">${'ABCD'[k]}</span><span class="ot">${md(o)}</span><span class="mk"></span></button>`).join('')}</div>
    <div id="fb"></div>
    <div class="qf"><span class="kbd"><kbd>1</kbd>–<kbd>4</kbd> 选择 <kbd>Enter</kbd> 下一题</span><span class="sp"></span><button class="btn" id="nx" disabled>${i+1===list.length?'完成':'下一题'}</button></div></article></div>`;
    $('#qx').onclick = exit;
    $('#st').onclick = () => { S.star[q.id] ? delete S.star[q.id] : S.star[q.id]=true; save(); $('#st').classList.toggle('on', !!S.star[q.id]); $('#st').setAttribute('aria-pressed', !!S.star[q.id]); };
    const choose = k => {
      if(picked!==null || k>=q.options.length) return; picked = k; const ok = k===q.answer; let gain = 0;
      document.querySelectorAll('.opt').forEach((x,n) => { x.disabled = true; if(n===q.answer) x.classList.add('right'); else if(n===k) x.classList.add('wrong'); });
      const filedMistake = record(q, ok, opt.redo);
      marks[i] = ok ? 'r' : 'w';
      if(ok){ right++; combo++; best = Math.max(best, combo); if(combo>S.streakBest){S.streakBest=combo;save();} gain = 10 + Math.min(combo,5)*2; gained += gain; addXp(gain); if(combo>=3) toast(combo+' 连击'); }
      else { combo = 0; if(filedMistake) filedMistakes++; }
      $('#fb').innerHTML = `<div class="exp ${ok?'ok':'no'}"><div class="eh"><b>${ok?'答对了':'正确答案是 '+'ABCD'[q.answer]}</b>${ok?`<span class="xp">+${gain} XP</span>`:filedMistake?'<span class="xp miss">已加入错题本</span>':''}</div>${md(expText(q))}</div>`;
      document.querySelector('.combo').innerHTML = `连击 <b>×${combo}</b>`; document.querySelector('.combo').classList.toggle('hot', combo>=2);
      $('#nx').disabled = false; $('#nx').focus(); nav();
    };
    document.querySelectorAll('.opt').forEach(b => b.onclick = () => choose(+b.dataset.k));
    $('#nx').onclick = () => { i++; show(); };
    document.onkeydown = e => { if(e.target.tagName==='INPUT') return; if('1234'.includes(e.key)) choose(+e.key-1); else if(e.key==='Enter' && picked!==null && document.activeElement.id!=='nx'){ i++; show(); } };
  }
  function finish(){
    document.onkeydown = null; const acc = pct(right,list.length);
    const wrong = list.length - right;
    const summary = [
      filedMistakes && `${filedMistakes} 道错题已进入错题本。`,
      wrong > filedMistakes && `L10 答错 ${wrong - filedMistakes} 道题。`
    ].filter(Boolean).join(' ') || '这一轮没有错题。';
    const col = acc>=80?'var(--cyan)':acc>=60?'var(--amber)':'var(--pink)';
    const msg = acc===100?'全部答对':acc>=80?'掌握得不错':acc>=60?'还差一点':'这一块要重点复习';
    $('#app').innerHTML = `<div class="qwrap"><div class="card done"><div class="mini">${opt.title}完成</div><h2 class="dmsg">${msg}</h2>
    <div class="dstat">${ring(right/list.length,col,right+' / '+list.length,'答对')}<div class="dlist"><div><b>${acc}<i>%</i></b><span>正确率</span></div><div><b>×${best}</b><span>本轮最高连击</span></div><div><b>+${gained}</b><span>获得经验值</span></div></div></div>
    <div class="segs big">${marks.map(m=>`<i class="${m}"></i>`).join('')}</div>
    <p class="dnote">${summary}</p>
    <div class="row" style="justify-content:center"><button class="btn" id="a1">${opt.back?'换一组题':opt.redo?'再做一遍':'再来一轮'}</button>${filedMistakes&&!opt.redo?'<button class="btn pink" id="a2">去错题本</button>':''}${opt.back?'<button class="btn gold" id="a4">回到本课</button>':''}<button class="btn ghost" id="a3">回道场</button></div></div></div>`;
    $('#a1').onclick = () => {
      if(opt.back){
        const pool = practiceQuestions.filter(q => q.lesson===opt.back.l);
        runQuiz(shuffle(pool).slice(0,4), opt);
      } else if(opt.redo){
        runQuiz(shuffle(list), opt);
      } else go(tab, ctx);
    };
    if($('#a2')) $('#a2').onclick = () => go('mistakes'); $('#a3').onclick = () => go('home'); if($('#a4')) $('#a4').onclick = () => go('review',{l:opt.back.l});
  }
  show();
}
VIEWS.practice = function(){
  const f = ctx.lesson || 'all', src = ctx.src || 'all', mode = ctx.mode || 'new';
  const matching = practiceQuestions.filter(q => (src==='all'||q.src===src)
    && (mode!=='new' || !(S.att[q.id] || S.practiceAtt?.[q.id]))
    && (mode!=='star' || S.star[q.id]));
  const pool = f==='all' ? matching : matching.filter(q => q.lesson===f);
  const cnt = id => matching.filter(q => q.lesson===id).length;
  const seg = (arr, cur, key) => `<div class="seg">${arr.map(([v,n])=>`<button class="${cur===v?'on':''}" data-k="${key}" data-v="${v}">${n}</button>`).join('')}</div>`;
  const n = Math.min(pool.length, 15);
  $('#app').innerHTML = `<h2 class="sec">自由练习<small>${f===l10Lesson.id?'L10 · MCQ1 范围外':'选一课，或者全部混着做'}</small></h2>
  <div class="pick"><button class="pk ${f==='all'?'on':''}" data-v="all" style="--c:#8f7bff"><span class="pi">全</span><b>全部课程</b><small>${matching.length} 题</small></button>
  ${studyLessons.map(l=>`<button class="pk ${f===l.id?'on':''}" data-v="${l.id}" style="--c:${LCOL[l.id]}" ${cnt(l.id)?'':'disabled'}><span class="pi">${l.id.slice(1)}</span><b>${l.title}</b><small>${cnt(l.id)} 题</small></button>`).join('')}</div>
  <div class="card opts2"><div><div class="mini">题目来源</div>${seg([['all','全部'],['l09','L09 示范题'],['l05','L05 小测'],['ai','AI 生成']],src,'src')}</div>
  <div><div class="mini">范围</div>${seg([['new','没做过的'],['all','全部题目'],['star','已标记']],mode,'mode')}</div></div>
  <div class="startbar card"><div class="sn">${pool.length?`<b>${n}</b><span>题 · 本轮从 ${pool.length} 道符合条件的题里随机抽取</span>`:'<span>没有符合条件的题。换一个范围，或者选"全部题目"。</span>'}</div><span class="sp"></span><button class="btn gold big" id="go" ${pool.length?'':'disabled'}>开始练习</button></div>`;
  document.querySelectorAll('.pk').forEach(c => c.onclick = () => go('practice',{lesson:c.dataset.v,src,mode}));
  document.querySelectorAll('.seg button').forEach(c => c.onclick = () => { const o = {lesson:f,src,mode}; o[c.dataset.k]=c.dataset.v; go('practice',o); });
  $('#go').onclick = () => runQuiz(shuffle(pool).slice(0,15), {title:f==='all'?'综合练习':f+' 练习'});
};
const EXAM_MS = 45*60*1000;
const grade = s => s>=90?['S','出色','var(--amber)']:s>=80?['A','很好','var(--cyan)']:s>=70?['B','良好','var(--sky,#4fb7ff)']:s>=60?['C','及格','var(--violet)']:['D','需要加强','var(--pink)'];
VIEWS.exam = function(){
  if(ctx.paper) return examRun();
  const last = S.exams[S.exams.length-1], best = S.exams.length ? Math.max(...S.exams.map(e=>e.score)) : null;
  $('#app').innerHTML = `<h2 class="sec">MCQ1 模拟考<small>按真实卷面</small></h2>
  <div class="examhero card"><div class="eh1"><h1>45 分钟<br>33 道选择题</h1><p>四选一，每题 3 分，另送 1 分，满分 100。答错和空白都是 0 分，所以每题都要写一个答案。交卷前不显示对错。</p>
  <div class="row">${last?`<span class="mini">上次 ${last.score} 分 · 最高 ${best} 分</span>`:''}</div></div>
  <div class="eh2">${ring(1,'var(--cyan)','45:00','倒计时')}</div></div>
  <h2 class="sec">选择模拟试卷<small>固定试卷 · 不与练习题混合</small></h2><div class="grid g2">${window.EXAM_PAPERS.map((p,i)=>`<div class="card"><h3>${p.title}</h3><p class="mini">33 题 · 45 分钟 · 覆盖 L01–L08</p><button class="btn gold" data-paper="${i}">选择并开始</button></div>`).join('')}</div>
  <div class="rules"><div class="card"><b>33</b><span>题，每套试卷题目和顺序固定</span></div><div class="card"><b>3 + 1</b><span>每题 3 分，另送 1 分</span></div><div class="card"><b>80 秒</b><span>平均每题的时间。卡住超过 90 秒就标记，先往下做</span></div><div class="card"><b>可回头</b><span>用答题卡跳题，标记过的题有黄点</span></div></div>
  <h2 class="sec">历史成绩</h2><div class="card hist">${S.exams.length?S.exams.slice(-8).map(e=>{const g=grade(e.score);return `<div class="hb" title="${e.score} 分"><i style="height:${e.score}%;background:${g[2]}"></i><b>${e.score}</b></div>`}).join(''):'<span class="mini">还没有成绩。完成一次模拟考后，这里会显示最近 8 次的分数。</span>'}</div>`;
  document.querySelectorAll('[data-paper]').forEach(b => b.onclick = () => { const p=window.EXAM_PAPERS[+b.dataset.paper]; go('exam', {paper:p.questions, paperTitle:p.title, ans:{}, mark:{}, cur:0, end:Date.now()+EXAM_MS}); });
};
function examRun(){
  const c = ctx, P = c.paper;
  let sheetOpen = false;
  const clock = () => { const left = Math.max(0, c.end-Date.now()); return {left, txt:Math.floor(left/60000)+':'+pad(Math.floor(left/1000)%60), frac:left/EXAM_MS}; };
  const clockMarkup = tk => `<span class="clock-inline"><span>剩余时间</span><strong>${tk.txt}</strong></span>${ring(tk.frac,tk.left<5*60000?'var(--pink)':'var(--cyan)',tk.txt,'剩余时间')}`;
  function moveTo(index){
    c.cur = index;
    sheetOpen = false;
    draw();
    window.scrollTo(0,0);
  }
  function draw(){
    const q = P[c.cur], tk = clock(), answered = Object.keys(c.ans).length, mk = Object.keys(c.mark).filter(k=>c.mark[k]).length;
    $('#app').innerHTML = `<div class="exwrap"><div class="exmain">
      <div class="qtop"><span class="qtitle">${c.paperTitle} · 第 <b>${c.cur+1}</b> 题 / 33</span><span class="sp"></span><span class="mini">已答 ${answered} · 标记 ${mk} · 未答 ${33-answered}</span></div>
      <article class="qcard"><div class="qh"><span class="qno">${pad(c.cur+1)}<small> / 33</small></span><span class="qtags"><span class="pill lz" style="--lc:${LCOL[q.lesson]}">${q.lesson}</span></span><button class="flag ${c.mark[c.cur]?'on':''}" id="mk" aria-pressed="${!!c.mark[c.cur]}">${c.mark[c.cur]?'已标记':'标记，稍后检查'}</button></div>
      <div class="prompt">${md(q.prompt)}</div>${refCode(q)}<div class="opts">${q.options.map((o,k)=>`<button class="opt ${c.ans[c.cur]===k?'sel':''}" data-k="${k}"><span class="k">${'ABCD'[k]}</span><span class="ot">${md(o)}</span></button>`).join('')}</div>
      <div class="qf"><button class="btn ghost" id="pv" ${c.cur?'':'disabled'}>上一题</button><span class="kbd"><kbd>1</kbd>–<kbd>4</kbd> 作答 <kbd>←</kbd><kbd>→</kbd> 切题</span><span class="sp"></span><button class="btn" id="nx" ${c.cur<32?'':'disabled'}>下一题</button></div></article></div>
      <aside class="sheetp card ${sheetOpen?'sheet-open':''}">
      <div class="sheet-bar"><div class="clock ${tk.left<5*60000?'low':''}" id="clock">${clockMarkup(tk)}</div>
      <button class="btn ghost sheet-toggle" id="sheet-toggle" aria-controls="sheet-controls" aria-expanded="${sheetOpen}">${sheetOpen?'收起答题卡':'答题卡'}</button></div>
      <div id="sheet-controls" class="sheet-controls">
      <div class="legend"><span><i class="d answered"></i>已答</span><span><i class="d"></i>未答</span><span><i class="d mk"></i>标记</span></div>
      <div class="grid33">${P.map((p,k)=>`<button class="dot ${c.ans[k]!==undefined?'done':''} ${k===c.cur?'cur':''} ${c.mark[k]?'mk':''}" data-k="${k}" aria-label="第 ${k+1} 题${c.ans[k]!==undefined?'，已答':'，未答'}${c.mark[k]?'，已标记':''}"${k===c.cur?' aria-current="true"':''}>${k+1}</button>`).join('')}</div>
      <button class="btn pink" id="sub" style="width:100%">交卷</button></div></aside></div>`;
    document.querySelectorAll('.opt').forEach(b => b.onclick = () => { c.ans[c.cur] = +b.dataset.k; draw(); });
    document.querySelectorAll('.dot').forEach(b => b.onclick = () => moveTo(+b.dataset.k));
    $('#pv').onclick = () => moveTo(c.cur-1); $('#nx').onclick = () => moveTo(c.cur+1);
    const toggle = $('#sheet-toggle');
    toggle.onclick = () => {
      sheetOpen = !sheetOpen;
      toggle.closest('.sheetp').classList.toggle('sheet-open',sheetOpen);
      toggle.setAttribute('aria-expanded',sheetOpen);
      toggle.textContent = sheetOpen?'收起答题卡':'答题卡';
    };
    $('#mk').onclick = () => { c.mark[c.cur] = !c.mark[c.cur]; draw(); };
    $('#sub').onclick = () => { const blank = 33-Object.keys(c.ans).length; if(!blank || confirm('还有 '+blank+' 题没有作答，空白按答错算。确定交卷吗？')) submit(); };
    document.onkeydown = e => { if('1234'.includes(e.key)){ c.ans[c.cur] = +e.key-1; draw(); } else if(e.key==='ArrowRight' && c.cur<32){ moveTo(c.cur+1); } else if(e.key==='ArrowLeft' && c.cur>0){ moveTo(c.cur-1); } };
  }
  function submit(){
    clearInterval(c.timer); document.onkeydown = null; let ok = 0; const wrong = [], per = {};
    P.forEach((q,k) => { const hit = c.ans[k]===q.answer; const p = per[q.lesson] || (per[q.lesson] = {n:0,r:0}); p.n++; if(hit){ ok++; p.r++; } else wrong.push(k); });
    const score = ok*3+1, used = Math.min(EXAM_MS, EXAM_MS-Math.max(0,c.end-Date.now())), g = grade(score), blank = 33-Object.keys(c.ans).length;
    S.exams.push({t:Date.now(), score, ok, paper:c.paperTitle}); addXp(ok*5+20); save();
    const rows = L.filter(l=>per[l.id]).map(l=>{const p=per[l.id],a=pct(p.r,p.n);return `<div class="lrow"><span class="id" style="color:${LCOL[l.id]}">${l.id}</span><div class="bar"><i style="width:${a}%;background:${LCOL[l.id]}"></i></div><span class="lv2">${p.r} / ${p.n}</span></div>`}).join('');
    $('#app').innerHTML = `<div class="qwrap"><div class="card report"><div class="rk" style="--g:${g[2]}"><div class="rank"><span>${g[0]}</span></div><div><div class="mini">总分</div><div class="score" style="color:${g[2]}">${score}</div><div class="gl">${g[1]}</div></div></div>
    <div class="dlist wide"><div><b>${ok}<i> / 33</i></b><span>答对</span></div><div><b>${33-ok-blank}</b><span>答错</span></div><div><b>${blank}</b><span>空白</span></div><div><b>${Math.floor(used/60000)}<i> 分</i></b><span>用时</span></div></div>
    <h3 class="rh2">各课表现</h3><div class="lrows">${rows}</div>
    <p class="dnote">${wrong.length?`答错和空白共 ${wrong.length} 题，可在此查看解析。`:'全部答对。'}</p>
    <div class="row" style="justify-content:center"><button class="btn pink" id="r1" ${wrong.length?'':'disabled'}>看错题解析</button><button class="btn" id="r3">再考一次</button><button class="btn ghost" id="r2">回道场</button></div></div><div id="rev"></div></div>`;
    $('#r2').onclick = () => go('home'); $('#r3').onclick = () => go('exam');
    $('#r1').onclick = () => { $('#rev').innerHTML = wrong.map(k => { const q=P[k], a=c.ans[k];
      return `<article class="qcard rv"><div class="qh"><span class="qno">${pad(k+1)}</span><span class="qtags">${pill(q)}</span></div><div class="mini" style="margin:4px 0 10px">你的答案 <b style="color:var(--pink)">${a===undefined?'未答':'ABCD'[a]}</b> · 正确答案 <b style="color:var(--cyan)">${'ABCD'[q.answer]}</b></div><div class="prompt">${md(q.prompt)}</div>${refCode(q)}<div class="opts">${q.options.map((o,n)=>`<div class="opt ${n===q.answer?'right':n===a?'wrong':''}"><span class="k">${'ABCD'[n]}</span><span class="ot">${md(o)}</span></div>`).join('')}</div><div class="exp no">${md(expText(q))}</div></article>`; }).join(''); $('#rev').scrollIntoView({behavior:'smooth'}); };
    nav();
    window.scrollTo(0,0);
  }
  c.timer = setInterval(() => { const tk = clock(); if(tk.left<=0){ clearInterval(c.timer); toast('时间到，自动交卷'); submit(); return; }
    const el = $('#clock'); if(el){ el.innerHTML = clockMarkup(tk); el.classList.toggle('low', tk.left<5*60000); } }, 1000);
  draw();
}
