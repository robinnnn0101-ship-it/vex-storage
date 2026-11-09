// Storage usage stats
export function calculateUsage(files) {
  return files.reduce((sum, f) => sum + (f.encrypted?.data?.length || 0), 0);
}
