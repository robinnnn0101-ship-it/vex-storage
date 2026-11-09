// Credit system for contribution-based free storage
export class CreditManager {
  constructor() {
    this.credits = parseFloat(localStorage.getItem('vex-credits') || '0');
  }
  add(amount) {
    this.credits += amount;
    localStorage.setItem('vex-credits', this.credits);
    return this.credits;
  }
  spend(amount) {
    if (this.credits >= amount) {
      this.credits -= amount;
      localStorage.setItem('vex-credits', this.credits);
      return true;
    }
    return false;
  }
  get() { return this.credits; }
}
