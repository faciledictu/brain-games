import play from '../index.js';
import { getLimit, getRndInt, getRndElem } from '../utilities/calculations.js';
import instructions from '../instructions.js';

export default () => {
  const getGameData = () => {
    const getExpressionParams = (operator) => {
      const term1 = getRndInt(1, getLimit());
      const term2 = getRndInt(1, getLimit());
      const multiplier = getRndInt(1, getLimit('multiplier'));
      const multipicand = getRndInt(2, getLimit('multipicand'));

      switch (operator) {
        case '+':
          return [term1, term2, term1 + term2];

        case '-':
          return [term1, term2, term1 - term2];

        case '*':
          return [multiplier, multipicand, multiplier * multipicand];

        default:
          throw new Error(`Unknown operator: '${operator}'!`);
      }
    };

    const operators = ['+', '-', '*'];
    const operator = getRndElem(operators);
    const [num1, num2, result] = getExpressionParams(operator);
    const expression = `${num1} ${operator} ${num2}`;

    return [expression, result];
  };

  play(instructions.calc, getGameData);
};
