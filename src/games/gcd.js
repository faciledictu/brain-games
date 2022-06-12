import play from '../index.js';
import getRndInt from '../utilities/getRndInt.js';
import msg from '../messages.js';
import getGcd from '../utilities/getGcd.js';
import getLimit from '../utilities/getLimit.js';

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
