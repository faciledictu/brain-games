import cli from './utilities/cli.js';
import getGameData from './utilities/getGameData.js';
import msg from './messages.js';

// This is common logic of Brain Games
const playGame = (gameName, roundCount = 3) => {
  const instruction = msg.instruction[gameName];
  console.log(instruction);

  for (let i = 1; i <= roundCount; i += 1) {
    // Get question and correct answer for each round
    const [question, expectedAnswer] = getGameData(gameName);
    console.log(`${msg.question}: ${question}`);

    // Get a player response
    const playerAnswer = cli(msg.answerPrompt);
    if (playerAnswer === expectedAnswer) {
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

// This is the entry point. It has common logic of greetings,
// calling game and showing result
const play = (gameName) => {
  console.log(msg.startupGreeting);

  const playerName = cli(msg.playerNamePrompt);
  console.log(`${msg.playerGreeting}, ${playerName}!`);

  // If fucntion call has game indentifier, it starts game
  if (gameName) {
    const playerIsWinner = playGame(gameName);

    const farewellMsg = playerIsWinner ? msg.congrats : msg.tryAgain;
    console.log(`${farewellMsg}, ${playerName}!`);
  }
};

export default play;
