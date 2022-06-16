import play from '../index.js';
import { maxValue, getRandomInt, getGcd } from '../utilities/calculations.js';
import instructions from '../instructions.js';

export default () => {
  const generateQuestionAndAnswer = () => {
    const firstNumber = getRandomInt(1, maxValue);
    const secondNumber = getRandomInt(1, maxValue);
    const pair = `${firstNumber} ${secondNumber}`;
    const answer = getGcd(firstNumber, secondNumber);

    return [pair, answer];
  };

  play(instructions.gcd, generateQuestionAndAnswer);
};
