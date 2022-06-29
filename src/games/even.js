import play from '../index.js';
import { isEven, getRandomNumber } from '../utils.js';
import { limits } from '../gameConstants.js';

export default () => {
  const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getQuestionAndAnswer = () => {
    const number = getRandomNumber(1, limits.maxValue);
    const answer = isEven(number) ? 'yes' : 'no';
    return [number, answer];
  };

  play(instruction, getQuestionAndAnswer);
};
