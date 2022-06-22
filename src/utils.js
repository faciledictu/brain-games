export const getRandomNumber = (begin, end) => {
  const range = (end - begin) + 1;
  return Math.floor((Math.random() * range) + begin);
};

export const getGcd = (number1, number2) => {
  const higherNumber = Math.max(number1, number2);
  const lowerNumber = Math.min(number1, number2);

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

export const isEven = (number) => number % 2 === 0;
