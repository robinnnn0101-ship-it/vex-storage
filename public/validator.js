// Validate file before upload
export function validateFile(file) {
  if (file.size > 100 * 1024 * 1024) return 'File too large (max 100MB demo)';
  if (!file.name) return 'Invalid name';
  return null;
}
