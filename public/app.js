import { generateKey, encryptData, decryptData, exportKey } from './crypto.js';
import { CreditManager } from './credits.js';
import { saveFile, getAllFiles } from './storage.js';
import { formatBytes } from './utils/format.js';

const fileInput = document.getElementById('fileInput');
const encryptBtn = document.getElementById('encryptUpload');
const fileList = document.getElementById('fileList');
const startNode = document.getElementById('startNode');
const creditsEl = document.getElementById('credits');

let userKey;
const credits = new CreditManager();

async function init() {
  userKey = await generateKey();
  creditsEl.textContent = `Credits: ${credits.get()} GB`;
  await loadFiles();
}

async function handleUpload() {
  if (!credits.spend(0.1)) {
    alert('Not enough credits. Contribute storage first!');
    return;
  }
  const files = fileInput.files;
  for (const file of files) {
    const text = await file.text();
    const encrypted = await encryptData(userKey, text);
    const id = Date.now() + '-' + file.name;
    await saveFile(id, { name: file.name, size: file.size, encrypted, keyHint: await exportKey(userKey), date: Date.now() });
    addToList(file.name, id, file.size);
  }
  fileInput.value = '';
  creditsEl.textContent = `Credits: ${credits.get()} GB`;
}

function addToList(name, id, size) {
  const li = document.createElement('li');
  li.innerHTML = `<strong>${name}</strong> <span style="color:#888">(${formatBytes(size||0)})</span>`;
  li.onclick = () => download(id);
  fileList.appendChild(li);
}

async function download(id) {
  alert('Download would decrypt and save (demo)');
}

async function loadFiles() {
  const files = await getAllFiles();
  files.forEach(f => addToList(f.name, f.id, f.size));
}

startNode.onclick = () => {
  const earned = credits.add(5);
  creditsEl.textContent = `Credits: ${earned} GB`;
  alert('Contributor node started (demo). Earned 5 GB credit!');
};

encryptBtn.onclick = handleUpload;
init();
