const WordCounter = require('./src/word-counter');
const readFile = require('fs-readfile-promise')
readFile('./assets/TheRailWayChildren.txt', 'utf-8')
.then((text) => {
	const counter = new WordCounter(text);
	counter.run();
});

