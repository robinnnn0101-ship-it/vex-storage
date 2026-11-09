// Simple client-side file search
export function filterFiles(files, query) {
  if (!query) return files;
  const q = query.toLowerCase();
  return files.filter(f => f.name.toLowerCase().includes(q));
}
