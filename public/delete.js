// Delete file from local storage
export async function deleteFile(id) {
  const db = await import('./storage.js').then(m => m.openDB());
  const tx = db.transaction('files', 'readwrite');
  tx.objectStore('files').delete(id);
  return new Promise(r => tx.oncomplete = r);
}
