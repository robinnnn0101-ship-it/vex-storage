// Theme manager for Vex Storage UI
export function setTheme(theme = 'dark') {
  document.documentElement.setAttribute('data-theme', theme);
  document.body.style.background = theme === 'dark' ? '#0a0a0a' : '#f5f5f5';
  document.body.style.color = theme === 'dark' ? '#eee' : '#111';
  localStorage.setItem('vex-theme', theme);
}

export function getTheme() {
  return localStorage.getItem('vex-theme') || 'dark';
}

export function toggleTheme() {
  const current = getTheme();
  setTheme(current === 'dark' ? 'light' : 'dark');
}
