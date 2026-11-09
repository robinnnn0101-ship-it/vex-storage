import { generateKey, encryptData, decryptData, exportKey } from './crypto.js';
import { CreditManager } from './credits.js';
import { saveFile, getAllFiles } from './storage.js';

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
    await saveFile(id, { name: file.name, encrypted, keyHint: await exportKey(userKey) });
    addToList(file.name, id);
  }
  fileInput.value = '';
  creditsEl.textContent = `Credits: ${credits.get()} GB`;
}

function addToList(name, id) {
  const li = document.createElement('li');
  li.textContent = name + ' (encrypted)';
  li.onclick = () => download(id);
  fileList.appendChild(li);
}

async function download(id) {
  // mock retrieve
  alert('Download would decrypt and save (demo)');
}

async function loadFiles() {
  const files = await getAllFiles();
  files.forEach(f => addToList(f.name, f.id));
}

startNode.onclick = () => {
  const earned = credits.add(5);
  creditsEl.textContent = `Credits: ${earned} GB`;
  alert('Contributor node started (demo). Earned 5 GB credit!');
};

encryptBtn.onclick = handleUpload;
init();
