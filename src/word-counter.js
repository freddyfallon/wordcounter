class WordCounter {
	constructor(text) {
		this.text = text;
		this.wordCount = {};
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


};

module.exports = WordCounter;