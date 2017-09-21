const expect = require('chai').expect;
const WordCounter = require('../src/word-counter');

describe("initial state", () => {
	let counter;

	beforeEach(() =>{
		counter = new WordCounter("Hello");
	});

	it("should have text of Hello", () => {
		expect(counter.text).to.equal("Hello");
	});

	it("should have a wordCount with and empty object", () =>{
		expect(counter.wordCount).to.deep.equal({});
	});

	it("should have an empty primeWords array", () => {
		expect(counter.primeNumbers).to.be.an("array").that.is.empty;
	})
});


describe("makeLowerCase", () => {
	let counter
	beforeEach(() => {
		counter = new WordCounter("Hello THERE")
	});

	it("should make all words lower case", () => {
		counter.makeLowerCase()
		expect(counter.text).to.equal("hello there");
	});
});

describe("purifyText", () => {
	let counter
	beforeEach(() => {
		counter = new WordCounter("!£@$%^&*(){}{[]~`:;  ")
	});

	it("should remove all special characters and whitespace", () => {
		counter.purifyText();
		expect(counter.text).to.equal(" ");
	})
});

describe("splitWords", () => {
	let counter;

	beforeEach(() => {
		counter = new WordCounter("One two three");
	});

	it("should split a string into an array of words", () => {
		counter.splitWords()
		expect(counter.text).to.be.an("array").that.does.include("One" && "two" && "three");
	});	
});

describe("countWords", () => {
	let counter;

	beforeEach(() => {
		counter = new WordCounter(["one", "two", "two", "three", "three", "three"]);
	});

	it("should return an object with counts", () => {
		expect(counter.countWords()).to.deep.equal({"one": 1, "two": 2, "three": 3});
	})
})

describe("getPrimes", () => {
	let counter;
	beforeEach(() => {
		counter = new WordCounter(["one", "two", "two", "three", "three", "three", "four", "four", "four", "four"]);
		counter.wordCount = {"one": 1, "two": 2, "three": 3, "four": 4};
	})

	it("should add primes to primeWords array", () => {
		counter.getPrimes();
		expect(counter.primeNumbers).to.be.an("array").that.does.include(2 && 3).but.does.not.include(4 && 1);
	})
})
