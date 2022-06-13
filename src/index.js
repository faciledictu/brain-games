import cli, { input } from './utilities/cli.js';
import msg from './messages.js';
import settings from './settings.js';

// This is common logic of Brain Games
const playGame = (instruction, getGameData) => {
  const roundCount = settings.roundCount > 0 ? settings.roundCount : 3;

  console.log(instruction);

  for (let i = 1; i <= roundCount; i += 1) {
    const [question, expectedAnswer] = getGameData();
    console.log(`${msg.question}: ${question}`);

    const playerAnswer = input(msg.answerPrompt);
    if (playerAnswer === String(expectedAnswer)) {
      console.log(`${msg.correct}`);
    } else {
      console.log(`'${playerAnswer}' ${msg.wrongAnswer}. ${msg.correctAnswerWas} '${expectedAnswer}'`);
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

  const farewellMsg = playerIsWinner ? msg.congrats : msg.tryAgain;
  console.log(`${farewellMsg}, ${playerName}!`);
};
