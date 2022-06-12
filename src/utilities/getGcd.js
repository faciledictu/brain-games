export default (num1, num2) => {
  const higherNum = Math.max(num1, num2);
  const lowerNum = Math.min(num1, num2);

  for (let i = lowerNum; i > 1; i -= 1) {
    if (higherNum % i === 0 && lowerNum % i === 0) {
      return i;
    }
  }

  return 1;
};
