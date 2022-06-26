import play from '../index.js';
import { isPrime, generateRoundByPredicate } from '../utils.js';

export default () => {
  const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  play(instruction, () => generateRoundByPredicate(isPrime));
};
