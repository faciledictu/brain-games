export default {
  // Show startup message
  startupGreeting: 'Welcome to the Brain Games!',

  // Ask player Name
  playerNamePrompt: 'May I have your name?',

  // Greet player
  playerGreeting: 'Hello',

  instruction: {
    // Show game rules. Key names in this section must be
    // similar to values used in getGameData.js
    even: 'Answer "yes" if the number is even, otherwise answer "no".',
    calc: 'What is the result of the expression?',
  },

  // Common phrases
  answerPrompt: 'Your Answer:',
  question: 'Question',
  correct: 'Correct!',
  wrongAnswer: 'is wrong answer ;(', // This text adds AFTER showing user's answer
  correctAnswerWas: 'Correct answer was', // This text adds BEFORE showing correct answer
  yes: 'yes',
  no: 'no',

  // Show if player lost
  tryAgain: 'Let\'s try again',

  // Show if player wins
  congrats: 'Congratulations',
};
