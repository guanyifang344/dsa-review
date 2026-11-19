const page = document.documentElement.dataset.page;
const next = new URLSearchParams(location.search).get('next');
const destination = next === 'study' ? 'study.html' : next === 'gpa' ? 'gpa.html' : './';
function route() {
  let player;
  try { player = readPlayer(); } catch { player = null; }
  if (validName(player?.nickname)) {
    if (page === 'welcome' || (page === 'home' && next === 'study')) {
      location.replace(destination);
      return;
    }
    const identity = document.querySelector('#identity');
    if (identity) {
      identity.textContent = player.nickname;
      identity.hidden = false;
    }
  } else if (page !== 'welcome') {
    const suffix = page === 'gpa' ? '?next=gpa' : next === 'study' ? '?next=study' : '';
    location.replace('welcome.html' + suffix);
    return;
  }
  document.documentElement.hidden = false;
}
window.addEventListener('pageshow', route);
window.addEventListener('storage', event => { if (!event.key || event.key === playerKey) route(); });
route();
const form = document.querySelector('#enroll');
if (form) {
  const input = form.elements.nickname;
  const note = document.querySelector('#note');
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const nickname = input.value.trim();
    if (!validName(nickname)) {
      note.textContent = '请输入 1 至 20 个可见字符。';
      input.focus();
      return;
    }
    try {
      await rankLock(() => {
        if (validName(readPlayer()?.nickname)) return;
        const key = Array.from(crypto.getRandomValues(new Uint8Array(32)), b => b.toString(16).padStart(2,'0')).join('');
        storePlayer({key,nickname,id:null,synced:null});
      });
      route();
    } catch { note.textContent = '无法保存昵称，请允许浏览器存储后重试。'; }
  });
}
