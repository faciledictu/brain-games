import play from '../index.js';
import { getLimit, getRndInt, isPrime } from '../utilities/calculations.js';
import instructions from '../instructions.js';

export default () => {
  const getGameData = () => {
    const num = getRndInt(1, getLimit());
    const answer = isPrime(num) ? 'yes' : 'no';
    return [num, answer];
  };

  play(instructions.prime, getGameData);
};
