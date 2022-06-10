import even from './even.js';

export default (gameName) => {
  switch (gameName) {
    case 'even':
      return even();
    default:
      return [0, 0];
  }
};
