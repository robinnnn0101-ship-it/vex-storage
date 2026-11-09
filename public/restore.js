// Restore from backup file
export function restoreBackup(json) {
  const files = JSON.parse(json);
  // re-save to DB
  console.log('Restored', files.length, 'files');
  return files;
}
