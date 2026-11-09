// Simulated contributor node
class ContributorNode {
  constructor(capacityGB = 10) {
    this.capacity = capacityGB;
    this.used = 0;
    this.creditsEarned = 0;
  }
  contribute(spaceGB) {
    if (this.used + spaceGB <= this.capacity) {
      this.used += spaceGB;
      this.creditsEarned += spaceGB;
      return { success: true, credits: this.creditsEarned };
    }
    return { success: false, reason: 'capacity full' };
  }
  status() {
    return { capacity: this.capacity, used: this.used, free: this.capacity - this.used, credits: this.creditsEarned };
  }
}

module.exports = { ContributorNode };
