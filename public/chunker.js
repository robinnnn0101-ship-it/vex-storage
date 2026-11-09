// Split files into chunks for distributed storage
export function chunkFile(data, chunkSize = 1024 * 1024) { // 1MB
  const chunks = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    chunks.push(data.slice(i, i + chunkSize));
  }
  return chunks;
}

export function reassembleChunks(chunks) {
  return chunks.join('');
}
