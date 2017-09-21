const expect = require('chai').expect;
const WordCounter = require('../src/word-counter');

describe("text", () => {
	let counter;

	beforeEach(() =>{
		counter = new WordCounter("Hello");
	});

	it("should have text of Hello", () => {
		expect(counter.text).to.equal("Hello");
	});
})
