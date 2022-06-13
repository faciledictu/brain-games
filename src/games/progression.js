import play from '../index.js';
import { getLimit, getRndInt } from '../utilities/calculations.js';
import msg from '../messages.js';

export default () => {
  const getGameData = () => {
    const progressionLength = getRndInt(5, 10);
    const progressionDifference = getRndInt(1, getLimit('multipicand'));
    const progressionEnd = getLimit() - progressionDifference * (progressionLength - 1);
    const progressionStart = getRndInt(1, progressionEnd);

    const progressionNumbers = [];
    for (let i = 0; i < progressionLength; i += 1) {
      progressionNumbers.push(progressionStart + progressionDifference * i);
    }

    const posOfHiddenNum = getRndInt(0, progressionLength - 1);
    const answer = progressionNumbers[posOfHiddenNum];
    progressionNumbers[posOfHiddenNum] = '..';

    return [progressionNumbers.join(' '), answer];
  };

  play(msg.instruction.progression, getGameData);
};
