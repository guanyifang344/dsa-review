// ---- icons (stroke, 24px grid) ----
const IC = {
 ranking:'<path d="M7 3h10v6a5 5 0 01-10 0zM7 5H3v2a4 4 0 004 4m10-6h4v2a4 4 0 01-4 4M12 14v5m-5 2h10"/>',
 home:'<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>',
 practice:'<path d="M4 17l6-6-6-6M12 19h8"/>',
 exam:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',
 mistakes:'<path d="M5 3h11l3 3v15H5zM9 11l6 6M15 11l-6 6"/>',
 stats:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
 review:'<path d="M4 4h11a3 3 0 013 3v13H7a3 3 0 01-3-3zM8 9h6M8 13h6"/>',
 guide:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 115 0c0 1.8-2.5 2-2.5 4M12 17h.01"/>'
};
const ico = k => `<svg viewBox="0 0 24 24">${IC[k]}</svg>`;
// ---- one small line illustration per lesson ----
const ART = {
 L01:'<path d="M12 70h26l8-30 10 44 10-34 8 20h26"/><circle cx="124" cy="62" r="6"/>',
 L02:'<path d="M10 82C40 82 60 78 80 62S120 18 150 10"/><path d="M10 82C50 82 100 80 150 76" opacity=".5"/><path d="M10 82C60 70 110 40 150 36" opacity=".5"/>',
 L03:'<rect x="12" y="46" width="26" height="26"/><rect x="38" y="46" width="26" height="26"/><rect x="64" y="46" width="26" height="26"/><rect x="90" y="46" width="26" height="26" stroke-dasharray="4 4"/><path d="M25 36v10M51 36v10"/>',
 L04:'<path d="M14 40h18M14 56h30M14 72h22"/><path d="M62 38c10-6 20-6 26 0M62 54c14-8 30-8 40 0M62 70c10-6 24-6 32 0"/><path d="M118 36v44"/>',
 L05:'<path d="M18 80V56M42 80V36M66 80V66M90 80V26M114 80V46"/><path d="M42 22l24 0M60 16l6 6-6 6" />',
 L06:'<circle cx="40" cy="48" r="16"/><circle cx="40" cy="48" r="5"/><path d="M70 48h50M108 38l12 10-12 10"/>',
 L07:'<circle cx="52" cy="46" r="20"/><path d="M67 62l22 22"/><path d="M110 28v56M110 56h30"/>',
 L08:'<path d="M12 62h136"/><circle cx="34" cy="62" r="8"/><circle cx="126" cy="62" r="8"/><path d="M48 44l14 0M112 44l-14 0M56 38l6 6-6 6M104 38l-6 6 6 6"/>'
};
const LCOL = {L01:'#ff5ea8',L02:'#ffa23a',L03:'#ffd54a',L04:'#9be84a',L05:'#2ef2d6',L06:'#4fb7ff',L07:'#8f7bff',L08:'#e27bff',[l10Lesson.id]:l10Lesson.color};

// ---- algorithm stage: four step-able visual demos ----
const DEMOS = {
 bubble:{name:'冒泡排序', data:[5,1,4,2,8,3,7,6], *run(a, ev){
   const n=a.length; let c=0,s=0;
   for(let i=0;i<n-1;i++){ let sw=false;
     for(let j=0;j<n-1-i;j++){ c++; yield ev({cmp:[j,j+1],ptr:{j:j},c,s,say:`比较 a[${j}]=${a[j]} 与 a[${j+1}]=${a[j+1]}`});
       if(a[j]>a[j+1]){ [a[j],a[j+1]]=[a[j+1],a[j]]; s++; sw=true; yield ev({swp:[j,j+1],ptr:{j:j},c,s,say:'左边更大，交换'}); } }
     yield ev({done:range(n-1-i,n),c,s,say:`第 ${i+1} 轮结束，最大值沉到末尾`}); if(!sw){ yield ev({done:range(0,n),c,s,say:'这一轮没有交换，说明已经有序，提前退出'}); return; } }
   yield ev({done:range(0,n),c,s,say:'排序完成'}); }},
 select:{name:'选择排序', data:[6,3,8,2,7,4,5,1], *run(a, ev){
   const n=a.length; let c=0,s=0;
   for(let i=0;i<n-1;i++){ let m=i;
     for(let j=i+1;j<n;j++){ c++; yield ev({cmp:[m,j],ptr:{i:i,m:m,j:j},done:range(0,i),c,s,say:`扫描 a[${j}]=${a[j]}，目前最小值 a[${m}]=${a[m]}`}); if(a[j]<a[m]) m=j; }
     if(m!==i){ [a[i],a[m]]=[a[m],a[i]]; s++; yield ev({swp:[i,m],ptr:{i:i},done:range(0,i),c,s,say:`把最小值换到位置 ${i}`}); }
     else yield ev({ptr:{i:i},done:range(0,i+1),c,s,say:`位置 ${i} 已经是最小值，不用交换`}); }
   yield ev({done:range(0,n),c,s,say:'排序完成。交换最多 n-1 次'}); }},
 binary:{name:'二分查找', data:[2,5,8,12,16,23,38,45,56,67], target:56, *run(a, ev, t){
   let lo=0,hi=a.length-1,c=0;
   while(lo<=hi){ const mid=(lo+hi)>>1; c++;
     yield ev({cmp:[mid],ptr:{low:lo,mid:mid,high:hi},fade:[0,lo,hi+1,a.length],c,s:0,say:`mid=${mid}，a[mid]=${a[mid]}，目标 ${t}`});
     if(a[mid]===t){ yield ev({hit:[mid],c,s:0,say:`找到了，位置 ${mid}，共比较 ${c} 次`}); return; }
     if(a[mid]<t){ lo=mid+1; } else { hi=mid-1; } }
   yield ev({c,s:0,say:'返回 -1'}); }},
 pair:{name:'双指针求和', data:[1,2,3,5,6,8,9,11], target:15, *run(a, ev, t){
   let l=0,r=a.length-1,c=0;
   while(l<r){ const sum=a[l]+a[r]; c++;
     yield ev({cmp:[l,r],ptr:{left:l,right:r},fade:[0,l,r+1,a.length],c,s:0,say:`${a[l]} + ${a[r]} = ${sum}，目标 ${t}`});
     if(sum===t){ yield ev({hit:[l,r],c,s:0,say:`找到 (${a[l]}, ${a[r]})，共 ${c} 步`}); return; }
     if(sum<t){ l++; } else { r--; } }
   yield ev({c,s:0,say:'没有这样的数对，返回 None'}); }}
};
function range(a,b){ const o=[]; for(let i=a;i<b;i++) o.push(i); return o; }
let stage = null;
function stageLoad(key){
  const d = DEMOS[key]; const arr = d.data.slice();
  const frames = []; const snap = o => { frames.push(Object.assign({arr:arr.slice()}, o)); return 0; };
  const it = d.run(arr, snap, d.target); while(!it.next().done){}
  stage = {key, frames, i:0, playing:true, timer:null, base:d.data.slice(), target:d.target};
  stageDraw(); stagePlay();
}
function stageDraw(){
  const box = $('#plot'); if(!box || !stage) return; const f = stage.frames[stage.i] || {arr:stage.base};
  const mx = Math.max(...stage.base);
  const has = (k,i) => f[k] && f[k].includes(i);
  const ptr = {}; Object.entries(f.ptr||{}).forEach(([k,v]) => { (ptr[v] = ptr[v] || []).push(k); });
  box.innerHTML = f.arr.map((v,i) => {
    const cls = [has('swp',i)?'swp':'', has('cmp',i)&&!has('swp',i)?'cmp':'', has('hit',i)?'hit':'', has('done',i)?'ok':'',
      f.fade && (i<f.fade[1]||i>=f.fade[2]) ? 'dim':''].join(' ');
    return `<i class="${cls}" style="height:${v/mx*100}%"><b>${v}</b>${ptr[i]?`<u>${ptr[i].join(' · ')}</u>`:''}</i>`; }).join('');
  $('#readout').innerHTML = `<span>步骤 <b>${stage.i+1}</b>/${stage.frames.length}</span><span>比较 <b>${f.c||0}</b></span>${stage.key==='bubble'||stage.key==='select'?`<span>交换 <b>${f.s||0}</b></span>`:''}${stage.target!==undefined?`<span>目标 <b>${stage.target}</b></span>`:''}<span class="say">${f.say||''}</span>`;
  const p = $('#pp'); if(p) p.innerHTML = stage.playing ? '<svg viewBox="0 0 16 16"><path d="M4 2h3v12H4zM9 2h3v12H9z"/></svg>' : '<svg viewBox="0 0 16 16"><path d="M4 2l10 6-10 6z"/></svg>';
}
function stagePlay(){
  clearInterval(stage.timer); if(!stage.playing || reduceMotion()) { stage.playing = stage.playing && !reduceMotion(); stageDraw(); return; }
  stage.timer = setInterval(() => { if(!$('#plot')){ clearInterval(stage.timer); return; }
    if(stage.i < stage.frames.length-1){ stage.i++; stageDraw(); }
    else { stage.playing = false; clearInterval(stage.timer); stageDraw(); } }, 620);
}
function stageStep(d){ if(!stage) return; stage.playing = false; clearInterval(stage.timer); stage.i = Math.max(0, Math.min(stage.frames.length-1, stage.i+d)); stageDraw(); }
function stageToggle(){ if(!stage) return; if(!stage.playing){ if(stage.i>=stage.frames.length-1) stage.i=0; stage.playing = true; stagePlay(); } else { stage.playing = false; clearInterval(stage.timer); } stageDraw(); }
