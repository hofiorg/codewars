// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

module.exports = function queueTime(customers, n) {
  if(customers.length < 1)
    return 0;
  let lines = new Array(n).fill(0);
  let cnt = 0;

  do {
    lines = lines
      .map(line => line === 0 && customers.length > 0 ? customers.shift() : line)
      .map(line => line > 0 ? line - 1 : 0);
    cnt++;
  }
  while(lines.reduce((a, b) => a + b) > 0 || customers.length > 0);

  return cnt;
};