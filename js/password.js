// js/password.js
// パスワード画面処理（元のまま）
const correctPassword = "manabinotobira"; // 任意に変更
const input = document.getElementById('passwordInput');
const btn = document.getElementById('passwordBtn');
const msg = document.getElementById('passwordMsg');
const screen = document.getElementById('passwordScreen');
const content = document.getElementById('mainContent');

btn.addEventListener('click', () => {
  if(input.value === correctPassword){
    screen.style.display = 'none';
    content.style.display = 'block';
  } else {
    msg.textContent = '利用コードが違います';
    input.value = '';
    input.focus();
  }
});

input.addEventListener('keydown', e => {
  if(e.key === 'Enter') btn.click();
});
