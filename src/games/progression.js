import runGameEngine from '../index.js'
const minRange = 5;

const maxRange = 10;

const range = 20;

const progression = () => {

const length = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

const start = Math.floor(Math.random() * range) + 1;

const step = Math.floor(Math.random() * maxRange) + 1;

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

