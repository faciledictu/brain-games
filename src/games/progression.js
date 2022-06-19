import play from '../index.js';
import { getRandomInt } from '../utilities/calculations.js';
import { instructions, limits } from '../properties.js';

export default () => {
  const generateQuestionAndAnswer = () => {
    const progressionLength = getRandomInt(5, 10);
    const progressionDifference = getRandomInt(1, limits.maxFactor);
    const progressionEnd = limits.maxValue - progressionDifference * (progressionLength - 1);
    const progressionStart = getRandomInt(1, progressionEnd);

    const progressionNumbers = [];
    for (let i = 0; i < progressionLength; i += 1) {
      progressionNumbers.push(progressionStart + progressionDifference * i);
    }

    const indexToHide = getRandomInt(0, progressionLength - 1);
    const answer = progressionNumbers[indexToHide];
    progressionNumbers[indexToHide] = '..';

    return [progressionNumbers.join(' '), answer];
  };

  play(instructions.progression, generateQuestionAndAnswer);
};
