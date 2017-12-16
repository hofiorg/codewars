// https://www.codewars.com/kata/556deca17c58da83c00002db

module.exports = function tribonacci(signature, n){
  let result = [];
  for(let i = 0 ; i < n; i++) {
    let next;
    if(i > 2) {
      next = result[i - 1] + result[i - 2] + result[i - 3];
      result.push(next);
    }
    else
      result.push(signature[i]);
  }
  return result;
};