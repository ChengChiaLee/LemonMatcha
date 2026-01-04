const root = document.documentElement;
const btn = document.getElementById('themeBtn');

function getSystemTheme(){
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

function setBtnLabel(t){
  const label = (t === 'light') ? 'Light' : 'Dark';
  const txt = btn ? btn.querySelector('.theme-txt') : null;

  if (txt) txt.textContent = label;
  else if (btn) btn.textContent = label; // fallback: updates button directly
}

function applyTheme(t){
  root.setAttribute('data-theme', t);
  setBtnLabel(t);
}

if (btn) {
  const saved = localStorage.getItem('theme');
  applyTheme(saved || getSystemTheme());

  btn.addEventListener('click', () => {
    const cur = root.getAttribute('data-theme') || getSystemTheme();
    const next = (cur === 'dark') ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });
}
