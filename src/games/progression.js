import play from '../index.js';
import { getRandomNumber, makeProgression } from '../utils.js';
import { limits } from '../gameConstants.js';

export default () => {
  const instruction = 'What number is missing in the progression?';

  const getQuestionAndAnswer = () => {
    const length = getRandomNumber(5, 10);
    const difference = getRandomNumber(1, limits.maxFactor);
    const end = limits.maxValue - difference * (length - 1);
    const begin = getRandomNumber(1, end);

    const progressionNumbers = makeProgression(begin, difference, length);

    const indexToHide = getRandomNumber(0, length - 1);
    const answer = progressionNumbers[indexToHide];
    progressionNumbers[indexToHide] = '..';

    return [progressionNumbers.join(' '), answer];
  };

  play(instruction, getQuestionAndAnswer);
};
