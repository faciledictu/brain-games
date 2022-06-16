import cli, { input } from './utilities/cli.js';
import settings from './settings.js';

// This is common logic of Brain Games
const playGame = (instruction, getGameData) => {
  const roundCount = settings.roundCount > 0 ? settings.roundCount : 3;

  console.log(instruction);

  for (let i = 1; i <= roundCount; i += 1) {
    const [question, expectedAnswer] = getGameData();
    console.log(`Question: ${question}`);

    const playerAnswer = input('Your Answer:');
    if (playerAnswer === String(expectedAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}.'`);
      return false;
    }
  }

  // If all rounds are passed, return true
  return true;
};

// Play game and show result
export default (instruction, getGameData) => {
  const playerName = cli();

  const playerIsWinner = playGame(instruction, getGameData);

  const farewellMsg = playerIsWinner ? 'Congratulations' : 'Let\'s try again';
  console.log(`${farewellMsg}, ${playerName}!`);
};
