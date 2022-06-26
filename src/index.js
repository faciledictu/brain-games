import readlineSync from 'readline-sync';
import cli from './cli.js';
import { roundsToWin } from './game_constants.js';

export default (instruction, generateRound) => {
  const playerName = cli();

  console.log(instruction);

  for (let i = 1; i <= roundsToWin; i += 1) {
    const [question, expectedAnswer] = generateRound();
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
