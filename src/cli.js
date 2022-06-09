import readlineSync from 'readline-sync';

export default (message) => {
  return readlineSync.question(message + ' ');
}