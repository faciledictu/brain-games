import play from '../index.js';
import { getRandomInt, getGcd } from '../utilities/calculations.js';
import { instructions, limits } from '../properties.js';

export default () => {
  const generateQuestionAndAnswer = () => {
    const firstNumber = getRandomInt(1, limits.maxValue);
    const secondNumber = getRandomInt(1, limits.maxValue);
    const pair = `${firstNumber} ${secondNumber}`;
    const answer = getGcd(firstNumber, secondNumber);

    return [pair, answer];
  };

  play(instructions.gcd, generateQuestionAndAnswer);
};
