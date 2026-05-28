import runGameEngine from './index.js'

const progression = () => {

const length = Math.floor(Math.random() * (10 - 5 + 1)) + 5;

const start = Math.floor(Math.random() * 20) + 1;

const step = Math.floor(Math.random() * 10) + 1;

const elements = [];

for(let i = 0; i < length; i += 1){

elements.push(start + step * i);

}

return elements;
};

const gameDescription = 'What number is missing in the progression?';

const generateRound = () => {

const elements = progression();

const hiddenIndex = (Math.floor(Math.random() * elements.length));

const correctAnswer = String(elements[hiddenIndex]);

elements[hiddenIndex] = '..';

const question = elements.join(' ');

return [question, correctAnswer];

};

const startProgressionGame = () => {

runGameEngine(gameDescription, generateRound);


};

export default startProgressionGame

