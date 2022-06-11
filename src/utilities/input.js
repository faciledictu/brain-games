import readlineSync from 'readline-sync';

// Get prompt, show input line and return user answer
export default (message) => readlineSync.question(`${message} `);
