import readlineSync from 'readline-sync';

export const input = (message) => readlineSync.question(`${message} `);

export default () => {
  console.log('Welcome to the Brain Games!');

  const playerName = input('May I have your name?');
  console.log(`Hello, ${playerName}!`);

  return playerName;
};
