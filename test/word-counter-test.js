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

describe("splitWords", () => {
	let counter;

	beforeEach(() => {
		counter = new WordCounter("One two three");
	})

	it("should split a string into an array of words", () => {
		expect(counter.splitWords()).to.be.an("array").that.does.include("One" && "two" && "three");
	})
})
