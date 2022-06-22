import play from '../index.js';
import { getRandomNumber, isEven } from '../utils.js';
import { limits } from '../game_constants.js';

export default () => {
  const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateQuestionAndAnswer = () => {
    const number = getRandomNumber(1, limits.maxValue);
    const answer = isEven(number) ? 'yes' : 'no';
    return [number, answer];
  };

  play(instruction, generateQuestionAndAnswer);
};
