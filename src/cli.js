import readlineSync from 'readline-sync';

export default (message) => readlineSync.question(`${message} `);
