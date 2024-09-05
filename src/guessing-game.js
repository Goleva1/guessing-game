class GuessingGame {
    constructor() {
      this.min = 0;
      this.max = 0;
      this.mid = 0;
    }
  
    setRange(min, max) {
      this.min = min;
      this.max = max;
      this.mid = Math.round((min + max) / 2);
    }
  
    guess() {
      this.mid = Math.round((this.min + this.max) / 2);
      return this.mid;
    }
  
    lower() {
      this.max = this.mid;
    }
  
    greater() {
      this.min = this.mid;
    }
  }
  
  module.exports = GuessingGame;
