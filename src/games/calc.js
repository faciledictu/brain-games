import play from '../index.js';
import { getRandomNumber } from '../utils.js';
import { limits } from '../game_constants.js';

const getNumbers = (operator) => {
  const number1 = getRandomNumber(1, limits.maxValue);

  if (operator === '*') {
    const factor = getRandomNumber(1, limits.maxFactor);
    return [number1, factor];
  }

  const number2 = getRandomNumber(1, limits.maxValue);
  return [number1, number2];
};

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Can't calculate. Unknown operator: '${operator}'!`);
  }
};

export default () => {
  const instruction = 'What is the result of the expression?';
  const generateQuestionAndAnswer = () => {
    const operator = ['+', '-', '*'][getRandomNumber(0, 2)];
    const [number1, number2] = getNumbers(operator);
    const expression = `${number1} ${operator} ${number2}`;
    const result = calculate(number1, number2, operator);

    return [expression, result];
  };

  play(instruction, generateQuestionAndAnswer);
};
