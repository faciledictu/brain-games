export default (start = 1, end = 100) => {
  const range = (end - start) + 1;
  return Math.floor((Math.random() * range) + start);
};
