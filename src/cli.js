import input from './utilities/input.js';
import msg from './messages.js';

export default () => {
  console.log(msg.startupGreeting);

  const playerName = input(msg.playerNamePrompt);
  console.log(`${msg.playerGreeting}, ${playerName}!`);

  return playerName;
};
