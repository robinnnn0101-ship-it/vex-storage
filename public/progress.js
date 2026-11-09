// Simple progress UI helper
export function updateProgress(percent) {
  const el = document.getElementById('progress');
  if (el) el.style.width = percent + '%';
  console.log('Progress:', percent + '%');
}
