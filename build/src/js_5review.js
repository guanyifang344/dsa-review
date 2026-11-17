// ---- 快速复习: per-lesson walkthrough ----
function rvBlock(b, uid){
  switch(b.t){
    case 'p': return `<p class="rp">${md(b.text)}</p>`;
    case 'h': return `<h4 class="rh">${md(b.text)}</h4>`;
    case 'list': return `<ul class="rl">${b.items.map(x=>`<li>${md(x)}</li>`).join('')}</ul>`;
    case 'code': return `<figure class="rf"><pre><code>${highlight(b.code)}</code></pre>${b.cap?`<figcaption>${md(b.cap)}</figcaption>`:''}</figure>`;
    case 'table': return `<figure class="rf"><div class="tw"><table class="rt"><thead><tr>${b.head.map(h=>`<th>${md(h)}</th>`).join('')}</tr></thead><tbody>${b.rows.map(r=>`<tr>${r.map(c=>`<td>${md(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>${b.cap?`<figcaption>${md(b.cap)}</figcaption>`:''}</figure>`;
    case 'wrong': return `<div class="wr"><div class="no"><span>不要这样</span>${md(b.bad)}</div><div class="yes"><span>应该这样</span>${md(b.good)}</div><p>${md(b.why)}</p></div>`;
    case 'exam': return `<div class="callout exam"><b>考试怎么考</b>${md(b.text)}</div>`;
    case 'key': return `<div class="callout key">${md(b.text)}</div>`;
    case 'demo': return `<div class="demo" data-demo="${b.key}"><div class="scope"><div class="bar"><span class="dname">${DEMOS[b.key].name}</span><span class="sp"></span><div class="ctl"><button data-a="pv" aria-label="上一步"><svg viewBox="0 0 16 16"><path d="M12 2v12L4 8zM3 2h2v12H3z"/></svg></button><button data-a="pp" aria-label="播放或暂停"></button><button data-a="nx" aria-label="下一步"><svg viewBox="0 0 16 16"><path d="M4 2v12l8-6zM11 2h2v12h-2z"/></svg></button><button data-a="rs" aria-label="重播"><svg viewBox="0 0 16 16"><path d="M8 2a6 6 0 11-6 6h2a4 4 0 104-4v3L4 3.5 8 0z"/></svg></button></div></div><div class="plot"></div><div class="readout"></div></div>${b.cap?`<figcaption class="dcap">${md(b.cap)}</figcaption>`:''}</div>`;
  }
  return '';
}
function rvPrep(){ if(!S.rv) S.rv = {}; return S.rv; }
// each embedded demo gets its own tiny player (paused at step 1 until pressed)
function rvMountDemos(){
  document.querySelectorAll('.demo').forEach(root => {
    const key = root.dataset.demo, d = DEMOS[key], arr = d.data.slice(), frames = [];
    const it = d.run(arr, o => { frames.push(Object.assign({arr:arr.slice()}, o)); return 0; }, d.target); while(!it.next().done){}
    const st = {i:0, playing:false, timer:null}, mx = Math.max(...d.data);
    const plot = root.querySelector('.plot'), ro = root.querySelector('.readout'), pp = root.querySelector('[data-a=pp]');
    const draw = () => {
      const f = frames[st.i], has = (k,i) => f[k] && f[k].includes(i), ptr = {};
      Object.entries(f.ptr||{}).forEach(([k,v]) => { (ptr[v] = ptr[v] || []).push(k); });
      plot.innerHTML = f.arr.map((v,i) => { const cls = [has('swp',i)?'swp':'', has('cmp',i)&&!has('swp',i)?'cmp':'', has('hit',i)?'hit':'', has('done',i)?'ok':'', f.fade&&(i<f.fade[1]||i>=f.fade[2])?'dim':''].join(' ');
        return `<i class="${cls}" style="height:${v/mx*100}%"><b>${v}</b>${ptr[i]?`<u>${ptr[i].join(' · ')}</u>`:''}</i>`; }).join('');
      ro.innerHTML = `<span>步骤 <b>${st.i+1}</b>/${frames.length}</span><span>比较 <b>${f.c||0}</b></span>${key==='bubble'||key==='select'?`<span>交换 <b>${f.s||0}</b></span>`:''}${d.target!==undefined?`<span>目标 <b>${d.target}</b></span>`:''}<span class="say">${f.say||''}</span>`;
      pp.innerHTML = st.playing ? '<svg viewBox="0 0 16 16"><path d="M4 2h3v12H4zM9 2h3v12H9z"/></svg>' : '<svg viewBox="0 0 16 16"><path d="M4 2l10 6-10 6z"/></svg>';
    };
    const stop = () => { st.playing = false; clearInterval(st.timer); };
    const play = () => { if(st.i>=frames.length-1) st.i = 0; st.playing = true; clearInterval(st.timer);
      if(reduceMotion()){ st.playing = false; return; }
      st.timer = setInterval(() => { if(!document.body.contains(root)){ clearInterval(st.timer); return; } if(st.i<frames.length-1){ st.i++; draw(); } else { stop(); draw(); } }, 620); };
    root.querySelector('[data-a=pv]').onclick = () => { stop(); st.i = Math.max(0, st.i-1); draw(); };
    root.querySelector('[data-a=nx]').onclick = () => { stop(); st.i = Math.min(frames.length-1, st.i+1); draw(); };
    root.querySelector('[data-a=rs]').onclick = () => { stop(); st.i = 0; draw(); play(); draw(); };
    pp.onclick = () => { if(st.playing) stop(); else play(); draw(); };
    draw();
  });
}
