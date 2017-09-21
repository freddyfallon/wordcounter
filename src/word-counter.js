const _ = require('lodash');

class WordCounter {
	constructor(text) {
		this.text = text;
		this.wordCount = {};
		this.primeNumbers = [];
	}

	makeLowerCase() {
		this.text = this.text.toLowerCase();
	}

	purifyText() {
		this.text = this.text.replace(/[^0-9a-z\ ]/gi, '').replace(/\s+/g, " ")
	}

	splitWords() {
		this.text = this.text.split(" ");
	}

	countWords() {
		this.text.forEach((word) => {
			this.wordCount.hasOwnProperty(word) ? this.wordCount[word] ++ : this.wordCount[word] = 1;
		})

		return this.wordCount;
	}

	getPrimes() {
		_.forIn(this.wordCount, (value, key) => {
			let prime = true;
			for(let i = 2; i < value; i++) {
				if (value % i === 0) {
					prime = false;
				}
			}
			if (value === 1) {prime = false};
			if (prime === true) {
				this.primeNumbers.push(this.wordCount[key]);
			}
		})
	}

	showWords() {
		_.forIn(this.wordCount, (value, key) => {
			if (this.primeNumbers.includes(value)) {
				console.log(key + ": " + value + " - prime number");
			} else console.log(key + ": " + value);
		})
	}

	run() {
		this.makeLowerCase();
		this.purifyText();
		this.splitWords();
		this.countWords();
		this.getPrimes();
		this.showWords();
	}

};

module.exports = WordCounter;