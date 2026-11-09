// Warn when credits are low
export function checkQuota(credits, needed = 0.1) {
  if (credits < needed) {
    return 'Low credits. Contribute more storage to continue.';
  }
  if (credits < 1) return 'Credits running low.';
  return null;
}
