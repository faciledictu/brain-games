import readlineSync from 'readline-sync';
import cli from './utilities/cli.js';

export default (instruction, generateQuestionAndAnswer) => {
  const playerName = cli();
  const numberOfRounds = 3;

  console.log(instruction);

  for (let i = 1; i <= numberOfRounds; i += 1) {
    const [question, expectedAnswer] = generateQuestionAndAnswer();
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
