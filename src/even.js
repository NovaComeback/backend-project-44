import runGameEngine from './index.js'

const isEven = (number) => number % 2 === 0;

const generateRound = () => {

const question = Math.floor(Math.random() * 100) + 1;
const correctAnswer = isEven(question) ? 'yes' : 'no';
 
return [String(question), correctAnswer];
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const startEvenGame = () => {

runGameEngine(gameDescription, generateRound);

};

export default startEvenGame;
















