// IndexedDB wrapper for encrypted storage
const DB_NAME = 'VexStorage';
const STORE = 'files';

export async function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      req.result.createObjectStore(STORE, { keyPath: 'id' });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function saveFile(id, data) {
  const db = await openDB();
  const tx = db.transaction(STORE, 'readwrite');
  tx.objectStore(STORE).put({ id, ...data });
  return new Promise(r => tx.oncomplete = r);
}

export async function getAllFiles() {
  const db = await openDB();
  const tx = db.transaction(STORE, 'readonly');
  return new Promise(resolve => {
    const req = tx.objectStore(STORE).getAll();
    req.onsuccess = () => resolve(req.result);
  });
}
