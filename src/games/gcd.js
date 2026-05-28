import runGameEngine from "../index.js"

const gcdGet = (a, b) => {
if(b === 0){
return a }


let num1 = a;

let num2 = b;

while(num2 > 0) {



let temp = num2;
num2 = num1 % num2;
num1 = temp
};
return num1 
}

const gameDescription = 'Find the greatest common divisor of given numbers.'


const generateRound = () => {

const num1 = Math.floor(Math.random() * 100) + 1;

const num2 = Math.floor(Math.random() * 100) + 1;

const question = `${num1} ${num2}`;

const correctAnswer = String(gcdGet(num1, num2));

return [question, correctAnswer]

};


const startGcdGame = () => {

runGameEngine(gameDescription, generateRound)

};

export default startGcdGame













