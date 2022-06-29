import play from '../index.js';
import { isPrime, getRandomNumber } from '../utils.js';
import { limits } from '../gameConstants.js';

export default () => {
  const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getQuestionAndAnswer = () => {
    const number = getRandomNumber(1, limits.maxValue);
    const answer = isPrime(number) ? 'yes' : 'no';
    return [number, answer];
  };

  play(instruction, getQuestionAndAnswer);
};
