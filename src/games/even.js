import play from '../index.js';
import { getRandomInt } from '../utilities/calculations.js';
import { instructions, limits } from '../properties.js';

export default () => {
  const generateQuestionAndAnswer = () => {
    const num = getRandomInt(1, limits.maxValue);
    const answer = num % 2 === 0 ? 'yes' : 'no';
    return [num, answer];
  };

  play(instructions.even, generateQuestionAndAnswer);
};
