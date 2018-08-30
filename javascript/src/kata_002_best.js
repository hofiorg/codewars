// https://www.codewars.com/kata/55f2b110f61eb01779000053

const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
};

module.exports = GetSum;