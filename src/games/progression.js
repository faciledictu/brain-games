import play from '../index.js';
import getRndInt from '../utilities/getRndInt.js';
import msg from '../messages.js';
import getLimit from '../utilities/getLimit.js';

export default () => {
  const getGameData = () => {
    const progrLength = getRndInt(5, 10);
    const progrDiff = getRndInt(1, getLimit('multipicand'));
    const progrStart = getRndInt(1, getLimit() - progrDiff * (progrLength - 1));

    const progrNumbers = [];
    for (let i = 0; i < progrLength; i += 1) {
      progrNumbers.push(progrStart + progrDiff * i);
    }

    const posOfHiddenNum = getRndInt(0, progrLength - 1);
    const answer = progrNumbers[posOfHiddenNum];
    progrNumbers[posOfHiddenNum] = '..';

    return [progrNumbers.join(' '), answer];
  };

  play(msg.instruction.progression, getGameData);
};
