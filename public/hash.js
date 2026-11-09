// SHA-256 content addressing
export async function sha256(data) {
  const buffer = new TextEncoder().encode(data);
  const hash = await crypto.subtle.digest('SHA-256', buffer);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}
