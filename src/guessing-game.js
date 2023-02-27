class GuessingGame {
    constructor() {
        this.minRange = null;
        this.maxRange = null;
        this.result = null;
    }

    setRange(min, max) {
        this.minRange = min;
        this.maxRange = max;
    }

    guess() {
        this.result = Math.ceil((this.minRange + this.maxRange) / 2);
        return this.result;
    }

    lower() {
        this.maxRange = this.result;
    }

    greater() {
        this.minRange = this.result;
    }
}

module.exports = GuessingGame;