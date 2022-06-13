import play from '../index.js';
import { getLimit, getRndInt, isPrime } from '../utilities/calculations.js';
import msg from '../messages.js';

export default () => {
  const getGameData = () => {
    const num = getRndInt(1, getLimit());
    const answer = isPrime(num) ? msg.yes : msg.no;
    return [num, answer];
  };

  play(msg.instruction.prime, getGameData);
};
