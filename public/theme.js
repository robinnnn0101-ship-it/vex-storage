// Theme manager for Vex Storage UI
export function setTheme(theme = 'dark') {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('vex-theme', theme);
}

export function getTheme() {
  return localStorage.getItem('vex-theme') || 'dark';
}
