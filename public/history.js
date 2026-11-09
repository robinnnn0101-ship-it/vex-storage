// Credits transaction history
export function logCredit(action, amount) {
  const hist = JSON.parse(localStorage.getItem('vex-history') || '[]');
  hist.push({ action, amount, time: Date.now() });
  localStorage.setItem('vex-history', JSON.stringify(hist.slice(-50)));
}

export function getHistory() {
  return JSON.parse(localStorage.getItem('vex-history') || '[]');
}
