import play from '../index.js';
import { isEven, generateRoundByPredicate } from '../utils.js';

export default () => {
  const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateRound = () => generateRoundByPredicate(isEven);

  play(instruction, generateRound);
};
