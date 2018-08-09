// https://www.codewars.com/kata/55f2b110f61eb01779000053

function GetSum(a, b) {
    return sum(a <= b?a:b, a <= b?b:a);
}

function sum(from, till) {
  let result = 0;
  for (let i = from; i <= till; i++) {
    result += i;
  }
  return result;
}

module.exports = GetSum;

