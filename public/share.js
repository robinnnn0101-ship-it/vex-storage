// Generate shareable encrypted links (future)
export function generateShareLink(fileId, key) {
  return `vex://share/${fileId}?key=${btoa(JSON.stringify(key))}`;
}
