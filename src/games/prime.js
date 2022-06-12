import play from '../index.js';
import getRndInt from '../utilities/getRndInt.js';
import isPrime from '../utilities/isPrime.js';
import msg from '../messages.js';

export default () => {
  const getGameData = () => {
    const num = getRndInt();
    const answer = isPrime(num) ? msg.yes : msg.no;
    return [num, answer];
  };

  play(msg.instruction.prime, getGameData);
};
