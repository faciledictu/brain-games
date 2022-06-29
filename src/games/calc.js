import play from '../index.js';
import { getRandomNumber, calculate } from '../utils.js';
import { limits } from '../gameConstants.js';

const getNumbers = (operator) => {
  const number1 = getRandomNumber(1, limits.maxValue);

  if (operator === '*') {
    const factor = getRandomNumber(1, limits.maxFactor);
    return [number1, factor];
  }

  const number2 = getRandomNumber(1, limits.maxValue);
  return [number1, number2];
};

export default () => {
  const instruction = 'What is the result of the expression?';
  const getQuestionAndAnswer = () => {
    const operator = ['+', '-', '*'][getRandomNumber(0, 2)];
    const [number1, number2] = getNumbers(operator);
    const question = `${number1} ${operator} ${number2}`;
    const answer = calculate(number1, number2, operator);

    return [question, answer];
  };

  play(instruction, getQuestionAndAnswer);
};
