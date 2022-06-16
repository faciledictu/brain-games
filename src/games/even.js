import play from '../index.js';
import { getLimit, getRndInt } from '../utilities/calculations.js';
import instructions from '../instructions.js';

export default () => {
  const getGameData = () => {
    const num = getRndInt(1, getLimit());
    const answer = num % 2 === 0 ? 'yes' : 'no';
    return [num, answer];
  };

  play(instructions.even, getGameData);
};
