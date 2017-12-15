module.exports = function validParentheses(parens) {
  let n = 0;
  parens.split('').every((ch) => {
    if (ch === '(')
      n++;
    else
      n--;
    if(n >= 0)
      return ch;
  });
  return n === 0;
};