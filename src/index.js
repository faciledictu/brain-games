import readlineSync from 'readline-sync';
import cli from './utilities/cli.js';

const playGame = (instruction, generateQuestionAndAnswer) => {
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
      return false;
    }
  }

  // If all rounds are passed, return true
  return true;
};

export default (instruction, generateQuestionAndAnswer) => {
  const playerName = cli();

  const isPlayerWinner = playGame(instruction, generateQuestionAndAnswer);

  const farewellMessage = isPlayerWinner ? 'Congratulations' : 'Let\'s try again';
  console.log(`${farewellMessage}, ${playerName}!`);
};
