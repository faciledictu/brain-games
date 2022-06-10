import getRndInt from './getRndInt.js';
import msg from './msg.js';

export default () => {
  const num = getRndInt();
  const answer = num % 2 === 0 ? msg.yes : msg.no;
  return [num, answer];
};
