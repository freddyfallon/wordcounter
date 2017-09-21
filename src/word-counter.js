class WordCounter {
	constructor(text) {
		this.text = text;
		this.wordCount = {};
	}

	makeLowerCase() {
		this.text = this.text.toLowerCase();
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