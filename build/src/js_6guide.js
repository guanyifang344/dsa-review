VIEWS.guide = function(){
  S.seen.guide = true; save();
  const flow = [
    ['先读快速复习','在"快速复习"里按课读详解，带代码和推演表，有的课还能单步看算法演示。读完点"标记为已复习"。','review'],
    ['按课练习','在"练习"里选一课，默认只出没做过的题。每题选完立刻看到对错和解析，不用等做完整套。','practice'],
    ['清空错题本','MCQ1 范围内答错的练习题自动进"错题本"。点"重做"，答对的题会被移出，直到清空。','mistakes'],
    ['看看板找薄弱课','"看板"里的雷达图和正确率条会标出薄弱的课，回头对这些课多练一轮。','stats'],
    ['考前两天模拟考','在"模拟考"里选一套固定试卷，完成 33 题 45 分钟。交卷后在结果页查看错题解析。','exam']
  ];
  const pages = [
    ['道场','首页。演示台可以单步看冒泡排序、选择排序、二分查找和双指针求和；下面的关卡地图点一课就开始练习。'],
    ['练习','按课程、题目来源和范围筛选，每轮最多 15 题。"已标记"可以只做你标过的题。'],
    ['模拟考','交卷前不显示对错。右上角倒计时少于 5 分钟会变粉色，时间到自动交卷。'],
    ['错题本','可以按课筛选、展开看解析、单题移出，或整批重做。'],
    ['看板','总正确率、每课正确率、模拟考记录和成就徽章。'],
    ['快速复习','每课一份详解：讲解、代码、推演、成本表、易错点，末尾有 4 道自测。右上角可切换"一分钟速览"，考前最后一遍用。']
  ];
  const keys = [['1 2 3 4','选择 A / B / C / D（练习和模拟考）'],['Enter','答完后进入下一题（练习）'],['← →','上一题 / 下一题（模拟考）']];
  const src = [['L09 示范题','L09-quiz.md 里的 30 道题，原题原解析，另加中文讲解。'],['L05 小测','L05-quiz.md 里覆盖 L01 到 L04 的 12 道题。'],['AI 生成','参照 L09 题型编写的补充练习，配有中文解析。']];
  $('#app').innerHTML = `<h2 class="sec">使用教程<small>约 1 分钟</small></h2>
  <div class="card"><h3 style="font-size:26px">推荐的复习顺序</h3><div class="flow">${flow.map(([t,d,k],i)=>`<div class="step"><span class="no">${i+1}</span><div><b>${t}</b><p>${d}</p></div><button class="btn ghost" data-go="${k}">打开</button></div>`).join('')}</div></div>
  <h2 class="sec">每个页面做什么</h2><div class="grid g2">${pages.map(([t,d])=>`<div class="card"><h3 style="font-size:22px">${t}</h3><p class="gp">${d}</p></div>`).join('')}</div>
  <h2 class="sec">快捷键</h2><div class="card">${keys.map(([k,d])=>`<div class="keyrow"><span>${k.split(' ').map(x=>`<kbd>${x}</kbd>`).join(' ')}</span><span>${d}</span></div>`).join('')}</div>
  <h2 class="sec">题目来源</h2><div class="card">${src.map(([n,d])=>`<div class="keyrow"><span class="pill ${n.startsWith('L09')?'l09':n.startsWith('L05')?'l05':'ai'}">${n}</span><span>${d}</span></div>`).join('')}<p class="mini" style="margin-bottom:0">MCQ1 范围为 L01 到 L08，插入排序除外。</p></div>
  <h2 class="sec">关于记录</h2><div class="card"><p class="gp" style="margin-top:0">昵称和总经验值会同步至公开排行榜。答题明细、错题本和模拟考成绩保存在当前浏览器。换浏览器或清除网站数据会丢失。想重新开始，可以在"看板"底部点"清空所有记录"。</p><p class="gp" style="margin-bottom:0">经验值只是做题的反馈：答对得 10 分，连击有加成，模拟考按答对数加分。它不代表考试水平，看正确率更准。</p></div>
  <p class="mini">本站使用 Google Analytics 统计访问人数、访问来源和设备等使用情况。具体答题记录、错题与成绩仅保存在当前浏览器中。</p>
  <div class="row"><button class="btn gold" id="gs">开始练习</button><button class="btn ghost" id="gh">回道场</button></div>`;
  document.querySelectorAll('[data-go]').forEach(b => b.onclick = () => go(b.dataset.go));
  $('#gs').onclick = () => go('practice'); $('#gh').onclick = () => go('home');
};
startPlayer();
if(window.__TEST) eval(window.__TEST);
