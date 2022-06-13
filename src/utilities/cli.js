import readlineSync from 'readline-sync';
import msg from '../messages.js';

export const input = (message) => readlineSync.question(`${message} `);

export default () => {
  console.log(msg.startupGreeting);

  const playerName = input(msg.playerNamePrompt);
  console.log(`${msg.playerGreeting}, ${playerName}!`);

  return playerName;
};
