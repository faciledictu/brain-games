import getRndInt from './getRndInt.js';

export default (elems) => elems[getRndInt(0, elems.length - 1)];
