import play from '../index.js';
import { getRandomInt, isEven } from '../utilities/calculations.js';
import { instructions, limits } from '../properties.js';

export default () => {
  const generateQuestionAndAnswer = () => {
    const number = getRandomInt(1, limits.maxValue);
    const answer = isEven(number) ? 'yes' : 'no';
    return [number, answer];
  };

  play(instructions.even, generateQuestionAndAnswer);
};
