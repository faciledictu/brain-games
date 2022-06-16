import play from '../index.js';
import { maxValue, maxFactor, getRandomInt } from '../utilities/calculations.js';
import instructions from '../instructions.js';

export default () => {
  const generateQuestionAndAnswer = () => {
    const getNumbers = (operator) => {
      const number1 = getRandomInt(1, maxValue);

      if (operator === '*') {
        const factor = getRandomInt(1, maxFactor);
        return [number1, factor];
      }

      const number2 = getRandomInt(1, maxValue);
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

    const operator = ['+', '-', '*'][getRandomInt(0, 2)];
    const [number1, number2] = getNumbers(operator);
    const expression = `${number1} ${operator} ${number2}`;
    const result = calculate(number1, number2, operator);

    return [expression, result];
  };

  play(instructions.calc, generateQuestionAndAnswer);
};
