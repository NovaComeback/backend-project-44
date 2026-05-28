import runEngineGame from '../index.js'

const isPrime = (num) => {

if(num < 2) return false;

if(num === 2) return true;

if(num % 2 === 0) return false;

for(let i = 3; i < Math.sqrt(num); i += 2) {

if(num % i === 0){
return false;
}


}

return true;

};


const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const generateRound = () => {

const question = Math.floor(Math.random() * 100) + 1;

const correctAnswer = isPrime(question) ? 'yes' : 'no';

return [String(question), correctAnswer];

};


const startPrimeGame = () => {

runEngineGame(gameDescription, generateRound);


};

export default startPrimeGame	






