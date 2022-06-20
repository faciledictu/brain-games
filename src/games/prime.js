import play from '../index.js';
import { getRandomInt, isPrime } from '../utils.js';
import { instructions, limits } from '../properties.js';

export default () => {
  const generateQuestionAndAnswer = () => {
    const num = getRandomInt(1, limits.maxValue);
    const answer = isPrime(num) ? 'yes' : 'no';
    return [num, answer];
  };

  play(instructions.prime, generateQuestionAndAnswer);
};
