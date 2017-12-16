// https://www.codewars.com/kata/54e6533c92449cc251001667

let uniqueInOrder=function(iterable) {
  return Array.from(iterable).filter(function(val, index, array) {
    return val !== array[index-1];
  });
};

module.exports = uniqueInOrder;
