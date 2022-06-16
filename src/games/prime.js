import play from '../index.js';
import { maxValue, getRandomInt, isPrime } from '../utilities/calculations.js';
import instructions from '../instructions.js';

export default () => {
  const generateQuestionAndAnswer = () => {
    const num = getRandomInt(1, maxValue);
    const answer = isPrime(num) ? 'yes' : 'no';
    return [num, answer];
  };

  play(instructions.prime, generateQuestionAndAnswer);
};
