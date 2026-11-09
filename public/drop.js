// Drag and drop handler
export function enableDrop(zone, callback) {
  zone.addEventListener('dragover', e => { e.preventDefault(); zone.style.border = '2px dashed #00ff9d'; });
  zone.addEventListener('dragleave', () => zone.style.border = '');
  zone.addEventListener('drop', e => {
    e.preventDefault();
    zone.style.border = '';
    callback(e.dataTransfer.files);
  });
}
