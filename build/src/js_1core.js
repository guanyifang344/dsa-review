const Q = window.QUESTIONS, L = window.LESSONS;
const $ = s => document.querySelector(s);
const KEY = 'dsa-review-v1';
let S = JSON.parse(localStorage.getItem(KEY) || 'null') || {att:{}, mistakes:{}, star:{}, xp:0, streakBest:0, exams:[], seen:{}};
const save = () => localStorage.setItem(KEY, JSON.stringify(S));
const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const byId = {}; Q.forEach(q => byId[q.id] = q);
const srcName = {l09:'L09 示范题', l05:'L05 小测', ai:'AI 生成'};
srcName.exam = '模拟考';
const level = () => Math.floor(Math.sqrt(S.xp / 20)) + 1;
const pct = (a,b) => b ? Math.round(a/b*100) : 0;
const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
function toast(t){ const e=$('#toast'); e.textContent=t; e.classList.add('show'); clearTimeout(toast.t); toast.t=setTimeout(()=>e.classList.remove('show'),1800); }
function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }

// ---- Python syntax highlighting (tokenised on raw text, then escaped) ----
const KW = new Set('def return for in if else elif while and or not import from break continue pass'.split(' '));
const CONST = new Set(['True','False','None']);
const BI = new Set('print range len sorted min max sum list str int abs'.split(' '));
function highlight(code){
  const re = /(#[^\n]*)|("[^"\n]*"|'[^'\n]*')|\b(\d+)\b|\b([A-Za-z_]\w*)\b(\s*\()?/g;
  let out = '', last = 0, m;
  while((m = re.exec(code))){
    out += esc(code.slice(last, m.index)); last = re.lastIndex;
    if(m[1]) out += `<span class="k-cm">${esc(m[1])}</span>`;
    else if(m[2]) out += `<span class="k-str">${esc(m[2])}</span>`;
    else if(m[3]) out += `<span class="k-num">${m[3]}</span>`;
    else { const w = m[4], call = m[5] || '';
      if(KW.has(w)) out += `<span class="k-kw">${w}</span>${call}`;
      else if(CONST.has(w)) out += `<span class="k-num">${w}</span>${call}`;
      else if(BI.has(w)) out += `<span class="k-bi">${w}</span>${call}`;
      else if(call) out += `<span class="k-fn">${w}</span>${call}`;
      else out += w; }
  }
  return out + esc(code.slice(last));
}
// minimal markdown: ```code``` blocks, `inline`, **bold**
function md(s){
  const parts = s.split(/```(?:python)?\n?/);
  return parts.map((p,i) => i%2 ? '<pre><code>'+highlight(p.replace(/\n$/,''))+'</code></pre>'
    : esc(p).replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\*\*([^*]+)\*\*/g,'<b>$1</b>')).join('');
}

// reference code that a question points to (e.g. "the function from the L08 notes")
const refCode = q => q.code ? `<div class="refcode"><div class="rc-h"><span>题目引用的代码</span><small>${q.ref||''}</small></div>${md(q.code)}</div>` : '';
