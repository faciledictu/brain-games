import play from '../index.js';
import { getLimit, getRndInt, getRndElem } from '../utilities/calculations.js';
import msg from '../messages.js';

export default () => {
  const getGameData = () => {
    // Preffered arithmetic signs, but tests require only + - *
    // const operators = ['+', '-', '×', '÷'];
    const operators = ['+', '-', '*'];
    const operator = getRndElem(operators);

    // Get limitations
    const limit = getLimit();
    const multiplier = getLimit('multiplier');
    const multipicand = getLimit('multipicand');

    let num1;
    let num2;
    let result;

    switch (operator) {
      case '+':
        num1 = getRndInt(1, limit);
        num2 = getRndInt(1, limit);
        result = num1 + num2;
        break;
      case '-':
        num1 = getRndInt(1, limit);
        num2 = getRndInt(1, limit);
        result = num1 - num2;
        break;
      case '*':
        num1 = getRndInt(1, multiplier);
        num2 = getRndInt(2, multipicand);
        result = num1 * num2;
        break;
      // case '÷':
      //   num2 = getRndInt(2, multipicand);
      //   result = getRndInt(2, limit / 10);
      //   num1 = result * num2;
      //   break;
      default:
        break;
    }
    const expr = `${num1} ${operator} ${num2}`;

    return [expr, result];
  };

  play(msg.instruction.calc, getGameData);
};
