import play from '../index.js';
import { getLimit, getRndInt, getGcd } from '../utilities/calculations.js';
import msg from '../messages.js';

export default () => {
  const getGameData = () => {
    const limit = getLimit();

    const num1 = getRndInt(1, limit);
    const num2 = getRndInt(1, limit);
    const pair = `${num1} ${num2}`;
    const answer = getGcd(num1, num2);

    return [pair, answer];
  };

  play(msg.instruction.gcd, getGameData);
};
