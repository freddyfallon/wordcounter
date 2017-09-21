class WordCounter {
	constructor(text) {
		this.text = text;
	}

	makeLowerCase() {
		this.text = this.text.toLowerCase();
	}

	splitWords() {
		this.text = this.text.split(" ");
	}
};

module.exports = WordCounter;