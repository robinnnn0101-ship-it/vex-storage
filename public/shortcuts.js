// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault();
    document.getElementById('fileInput')?.click();
  }
  if (e.key === 'Escape') {
    // clear search etc
  }
});
