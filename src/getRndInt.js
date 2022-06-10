export default (start = 15, end = 100) => {
  const range = (end - start) + 1;
  return Math.floor((Math.random() * range) + start);
};
