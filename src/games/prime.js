import play from '../index.js';
import { getRandomNumber, isPrime } from '../utils.js';
import { limits } from '../game_constants.js';

export default () => {
  const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateQuestionAndAnswer = () => {
    const number = getRandomNumber(1, limits.maxValue);
    const answer = isPrime(number) ? 'yes' : 'no';
    return [number, answer];
  };

  play(instruction, generateQuestionAndAnswer);
};
