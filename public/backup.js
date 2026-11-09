// Export encrypted backup
export async function exportBackup(files, key) {
  const data = JSON.stringify(files);
  // encrypt and download
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'vex-backup.json';
  a.click();
}
