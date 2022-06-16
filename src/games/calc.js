import play from '../index.js';
import { maxValue, maxFactor, getRandomInt } from '../utilities/calculations.js';
import instructions from '../instructions.js';

export default () => {
  const generateQuestionAndAnswer = () => {
    const getNumbers = (operator) => {
      const firstNumber = getRandomInt(1, maxValue);

      if (operator === '*') {
        const factor = getRandomInt(1, maxFactor);
        return [firstNumber, factor];
      }

      const secondNumber = getRandomInt(1, maxValue);
      return [firstNumber, secondNumber];
    };

    const calculate = (firstNumber, secondNumber, operator) => {
      switch (operator) {
        case '+':
          return firstNumber + secondNumber;
        case '-':
          return firstNumber - secondNumber;
        case '*':
          return firstNumber * secondNumber;
        default:
          throw new Error(`Can't calculate. Unknown operator: '${operator}'!`);
      }
    };

    const operator = ['+', '-', '*'][getRandomInt(0, 2)];
    const [firstNumber, secondNumber] = getNumbers(operator);
    const expression = `${firstNumber} ${operator} ${secondNumber}`;
    const result = calculate(firstNumber, secondNumber, operator);

    return [expression, result];
  };

  play(instructions.calc, generateQuestionAndAnswer);
};
