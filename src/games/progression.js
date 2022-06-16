import play from '../index.js';
import { maxValue, maxFactor, getRandomInt } from '../utilities/calculations.js';
import instructions from '../instructions.js';

export default () => {
  const generateQuestionAndAnswer = () => {
    const progressionLength = getRandomInt(5, 10);
    const progressionDifference = getRandomInt(1, maxFactor);
    const progressionEnd = maxValue - progressionDifference * (progressionLength - 1);
    const progressionStart = getRandomInt(1, progressionEnd);

    const progressionNumbers = [];
    for (let i = 0; i < progressionLength; i += 1) {
      progressionNumbers.push(progressionStart + progressionDifference * i);
    }

    const posOfHiddenNum = getRandomInt(0, progressionLength - 1);
    const answer = progressionNumbers[posOfHiddenNum];
    progressionNumbers[posOfHiddenNum] = '..';

    return [progressionNumbers.join(' '), answer];
  };

  play(instructions.progression, generateQuestionAndAnswer);
};
