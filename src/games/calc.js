import play from '../index.js';
import getRndElem from '../utilities/getRndElem.js';
import getRndInt from '../utilities/getRndInt.js';
import msg from '../messages.js';

export default () => {
  const instruction = msg.instruction.calc;

  const getGameData = () => {
    const operators = ['+', '-', '×', '÷'];
    const operator = getRndElem(operators);

    const limit = 100;

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
      case '×':
        num2 = getRndInt(2, 9);
        num1 = getRndInt(1, (limit * 2) / num2);
        result = num1 * num2;
        break;
      case '÷':
        num2 = getRndInt(2, 9);
        num1 = getRndInt(1, limit / num2) * num2;
        result = num1 / num2;
        break;
      default:
        break;
    }
    const expr = `${num1} ${operator} ${num2}`;
    return [expr, String(result)];
  };

  play(instruction, getGameData);
};
