import { generateKey, encryptData, decryptData, exportKey } from './crypto.js';

const fileInput = document.getElementById('fileInput');
const encryptBtn = document.getElementById('encryptUpload');
const fileList = document.getElementById('fileList');
const startNode = document.getElementById('startNode');
const creditsEl = document.getElementById('credits');

let userKey;
let credits = 0;

async function init() {
  userKey = await generateKey();
  console.log('Key generated for session');
  loadFiles();
}

async function handleUpload() {
  const files = fileInput.files;
  for (const file of files) {
    const text = await file.text();
    const encrypted = await encryptData(userKey, text);
    // Store in IndexedDB mock
    const id = Date.now() + '-' + file.name;
    localStorage.setItem('vex-' + id, JSON.stringify({ name: file.name, encrypted, keyHint: await exportKey(userKey) }));
    addToList(file.name, id);
  }
  fileInput.value = '';
}

function addToList(name, id) {
  const li = document.createElement('li');
  li.textContent = name + ' (encrypted)';
  li.onclick = () => download(id);
  fileList.appendChild(li);
}

async function download(id) {
  const stored = JSON.parse(localStorage.getItem('vex-' + id));
  const decrypted = await decryptData(userKey, stored.encrypted);
  const blob = new Blob([decrypted], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = stored.name;
  a.click();
}

function loadFiles() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('vex-')) {
      const stored = JSON.parse(localStorage.getItem(key));
      addToList(stored.name, key.slice(4));
    }
  }
}

startNode.onclick = () => {
  credits += 5;
  creditsEl.textContent = `Credits: ${credits} GB`;
  alert('Contributor node started (demo). Earned 5 GB credit!');
};

encryptBtn.onclick = handleUpload;
init();
