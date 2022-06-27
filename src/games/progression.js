import play from '../index.js';
import { getRandomNumber } from '../utils.js';
import { limits } from '../gameConstants.js';

export default () => {
  const instruction = 'What number is missing in the progression?';

  const generateRound = () => {
    const progressionLength = getRandomNumber(5, 10);
    const progressionDifference = getRandomNumber(1, limits.maxFactor);
    const progressionEnd = limits.maxValue - progressionDifference * (progressionLength - 1);
    const progressionStart = getRandomNumber(1, progressionEnd);

    const progressionNumbers = [];
    for (let i = 0; i < progressionLength; i += 1) {
      progressionNumbers.push(progressionStart + progressionDifference * i);
    }

    const indexToHide = getRandomNumber(0, progressionLength - 1);
    const answer = progressionNumbers[indexToHide];
    progressionNumbers[indexToHide] = '..';

    return [progressionNumbers.join(' '), answer];
  };

  play(instruction, generateRound);
};
