const form = document.querySelector('#enroll');
const input = form.elements.nickname;
const note = document.querySelector('#note');
let continueStudy = new URLSearchParams(location.search).get('next') === 'study';
function refresh() {
  const player = readPlayer();
  const known = validName(player?.nickname);
  form.hidden = known;
  const identity = document.querySelector('#identity');
  identity.hidden = !known;
  identity.textContent = known ? player.nickname : '';
  return known;
}
function enterStudy() {
  if (refresh() && continueStudy) location.replace('study.html');
}
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
    enterStudy();
  } catch { note.textContent = '无法保存昵称，请允许浏览器存储后重试。'; }
});
document.querySelector('.course').addEventListener('click', event => {
  if (refresh()) return;
  event.preventDefault();
  continueStudy = true;
  note.textContent = '输入昵称即可开始学习。';
  input.focus();
});
window.addEventListener('pageshow', enterStudy);
window.addEventListener('storage', event => { if (event.key === playerKey) enterStudy(); });
enterStudy();
