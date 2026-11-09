// Simple toast notifications
export function showToast(msg, type = 'info') {
  const toast = document.createElement('div');
  toast.textContent = msg;
  toast.style.cssText = `position:fixed;bottom:20px;right:20px;background:${type==='error'?'#ff4444':'#00ff9d'};color:#000;padding:10px 16px;border-radius:6px;z-index:999;`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
