import cli from './cli.js';
import getGameData from './getGameData.js';
import msg from './msg.js';

const playGame = (gameName, roundCount = 3) => {
  const instruction = msg.instruction[gameName];
  console.log(instruction);

  for (let i = 1; i <= roundCount; i += 1) {
    const [question, expectedAnswer] = getGameData(gameName);

    console.log(`${msg.question}: ${question}`);
    const playerAnswer = cli(msg.answerPrompt);
    if (playerAnswer === expectedAnswer) {
      console.log(`${msg.correct}`);
    } else {
      console.log(`'${playerAnswer}' ${msg.wrongAnswer}. ${msg.correctAnswerWas} '${expectedAnswer}'`);
      return false;
    }
  }

  return true;
};

const play = (gameName) => {
  console.log(msg.startupGreeting);

  const playerName = cli(msg.playerNamePrompt);
  console.log(`${msg.playerGreeting}, ${playerName}!`);

  if (gameName) {
    const playerIsWinner = playGame(gameName);

    const farewellMsg = playerIsWinner ? msg.congrats : msg.tryAgain;
    console.log(`${farewellMsg}, ${playerName}!`);
  }
};

export default play;
