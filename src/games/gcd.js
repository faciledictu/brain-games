import play from '../index.js';
import { getRandomNumber, getGcd } from '../utils.js';
import { limits } from '../game_constants.js';

export default () => {
  const instruction = 'Find the greatest common divisor of given numbers.';

  const generateRound = () => {
    const number1 = getRandomNumber(1, limits.maxValue);
    const number2 = getRandomNumber(1, limits.maxValue);
    const pair = `${number1} ${number2}`;
    const answer = getGcd(number1, number2);

    return [pair, answer];
  };

  play(instruction, generateRound);
};
