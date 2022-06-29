import readlineSync from 'readline-sync';
import { roundsToWin } from './gameConstants.js';

export default (instruction, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(instruction);

  for (let i = 1; i <= roundsToWin; i += 1) {
    const [question, expectedAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);

    const playerAnswer = readlineSync.question('Your Answer: ');
    if (playerAnswer === String(expectedAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};
