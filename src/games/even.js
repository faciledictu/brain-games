import getRndInt from '../utilities/getRndInt.js';
import msg from '../messages.js';

export default () => {
  const num = getRndInt();
  const answer = num % 2 === 0 ? msg.yes : msg.no;
  return [num, answer];
};
