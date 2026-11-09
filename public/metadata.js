// Store and retrieve file metadata
export async function saveMeta(id, meta) {
  localStorage.setItem('meta-' + id, JSON.stringify(meta));
}

export function getMeta(id) {
  return JSON.parse(localStorage.getItem('meta-' + id) || '{}');
}
