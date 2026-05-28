import readlineSync from "readline-sync";

const roundsCount = 3;

const runGameEngine = (gameDescription, generateRound) => {



console.log("Welcome to the Brain Games!");



const name = readlineSync.question("May I have your name? ");
console.log(`Hello, ${name}!`);

if(gameDescription === undefined){
return;
}

console.log(gameDescription);



for(let i = 0; i < roundsCount; i += 1) {

const [question, correctAnswer] = generateRound();

console.log(`Question:${question}`);


const userAnswer = readlineSync.question('Your answer: ');



if(userAnswer !== correctAnswer) {



console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);



return console.log(`Let's try again, ${name}!`);

};

console.log("Correct!");

};
return console.log(`Conguralations, ${name}`);

};

export default runGameEngine;




