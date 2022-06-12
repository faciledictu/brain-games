// Returns limits for games based on
// difficulty parameter specified
// in the settings.js file.

import settings from '../settings.js';

export default (param = 'limit') => {
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
