// Returns limits for games based on
// difficulty parameter specified
// in the settings.js file.

import settings from '../settings.js';

export const getLimit = (param = 'limit') => {
  const params = {};

  switch (settings.difficulty) {
    // Easy level
    case 1:
      params.limit = 100;
      params.multiplier = 10;
      params.multipicand = 10;
      break;

    // Insane level
    case 3:
      params.limit = 999;
      params.multiplier = 99;
      params.multipicand = 99;
      break;

    // Medium level
    default:
      params.limit = 100;
      params.multiplier = 99;
      params.multipicand = 10;
      break;
  }

  return params[param];
};

export const getRndInt = (start, end) => {
  const range = (end - start) + 1;
  return Math.floor((Math.random() * range) + start);
};

export const getRndElem = (elems) => elems[getRndInt(0, elems.length - 1)];

export const getGcd = (num1, num2) => {
  const higherNum = Math.max(num1, num2);
  const lowerNum = Math.min(num1, num2);

  for (let i = lowerNum; i > 1; i -= 1) {
    if (higherNum % i === 0 && lowerNum % i === 0) {
      return i;
    }
  }

  return 1;
};

export const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return (num > 1);
};
