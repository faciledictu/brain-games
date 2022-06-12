import play from '../index.js';
import getRndInt from '../utilities/getRndInt.js';
import msg from '../messages.js';
import getLimit from '../utilities/getLimit.js';

export default () => {
  const getGameData = () => {
    const num = getRndInt(1, getLimit());
    const answer = num % 2 === 0 ? msg.yes : msg.no;
    return [num, answer];
  };

  play(msg.instruction.even, getGameData);
};
