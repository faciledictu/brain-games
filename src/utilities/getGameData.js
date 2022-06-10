import even from '../games/even.js';

// Call specific game logic and return array with question and answer
export default (gameName) => {
  switch (gameName) {
    case 'even':
      return even();
    default:
      return [0, 0];
  }
};
