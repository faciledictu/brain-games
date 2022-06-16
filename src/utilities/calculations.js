export const maxValue = 100;
export const maxFactor = 10;

export const getRandomInt = (begin, end) => {
  const range = (end - begin) + 1;
  return Math.floor((Math.random() * range) + begin);
};

export const getGcd = (firstNumber, secondNumber) => {
  const higherNumber = Math.max(firstNumber, secondNumber);
  const lowerNumber = Math.min(firstNumber, secondNumber);

  for (let i = lowerNumber; i > 1; i -= 1) {
    if (higherNumber % i === 0 && lowerNumber % i === 0) {
      return i;
    }
  }

  return 1;
};

export const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return number > 1;
};
