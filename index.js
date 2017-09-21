import WordCounter from './src/word-counter';
import readFile from 'fs-readfile-promise';
readFile('./assets/TheRailWayChildren.txt', 'utf-8')
.then((text) => {
	const counter = new WordCounter(text);
	counter.run();
});

