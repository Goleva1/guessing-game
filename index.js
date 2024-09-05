class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.currentGuess = null;
    }


    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        if (this.min === null || this.max === null) {
            throw new Error('Range not set.');
        }
        this.currentGuess = Math.floor((this.min + this.max) / 2);
        return this.currentGuess;
    }

    lower() {
        if (this.currentGuess === null) {
            throw new Error('No guess to adjust.');
        }
        this.max = this.currentGuess - 1;
    }

    greater() {
        if (this.currentGuess === null) {
            throw new Error('No guess to adjust.');
        }
        this.min = this.currentGuess + 1;
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = GuessingGame;
}
