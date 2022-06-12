import cli from './cli.js';
import msg from './messages.js';
import input from './utilities/input.js';

// This is common logic of Brain Games
const playGame = (instruction, getGameData) => {
  const roundCount = 3;
  console.log(instruction);

  for (let i = 1; i <= roundCount; i += 1) {
    // Get question and correct answer for each round
    const [question, expectedAnswer] = getGameData();
    console.log(`${msg.question}: ${question}`);

    // Get a player response
    const playerAnswer = input(msg.answerPrompt);
    if (playerAnswer === String(expectedAnswer)) {
      console.log(`${msg.correct}`);
    } else {
      console.log(`'${playerAnswer}' ${msg.wrongAnswer}. ${msg.correctAnswerWas} '${expectedAnswer}'`);
      // If player answer is wrong abort game and return false
      return false;
    }
  }

  // If all rounds are passed, return true
  return true;
};

// Play game and show result
export default (instruction, getGameData) => {
  // Greet the player and recieve the name
  const playerName = cli();

  const playerIsWinner = playGame(instruction, getGameData);

  const farewellMsg = playerIsWinner ? msg.congrats : msg.tryAgain;
  console.log(`${farewellMsg}, ${playerName}!`);
};
