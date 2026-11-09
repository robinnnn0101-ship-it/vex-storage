// Calculate and display storage usage
export function renderUsage(usedGB, totalGB) {
  const pct = Math.min(100, (usedGB / totalGB) * 100);
  return `<div style="background:#222;height:8px;border-radius:4px;"><div style="width:${pct}%;background:#00ff9d;height:100%;border-radius:4px;"></div></div><small>${usedGB.toFixed(1)} / ${totalGB} GB</small>`;
}
