class WordCounter {
	constructor(text) {
		this.text = text;
	}

	splitWords() {
		return this.text.split(" ");
	}
};

module.exports = WordCounter;