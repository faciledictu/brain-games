import play from '../index.js';
import { maxValue, getRandomInt } from '../utilities/calculations.js';
import instructions from '../instructions.js';

export default () => {
  const generateQuestionAndAnswer = () => {
    const num = getRandomInt(1, maxValue);
    const answer = num % 2 === 0 ? 'yes' : 'no';
    return [num, answer];
  };

  play(instructions.even, generateQuestionAndAnswer);
};
