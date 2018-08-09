// https://www.codewars.com/kata/537e18b6147aa838f600001b

function justify(str, len) {

  const replaceAt = (string, index, replace) => string.substring(0, index) + replace + string.substring(index + 1);

  const addSpaces =(line, len) => {
    let split = line.split(' ');
    let index = split.length - 1;
    let topf = Array(index).fill(' ');
    let cnt = 0;
    for(let i = 0; i < len - line.length; ++i) {
      topf[cnt++] += ' ';
      if(cnt === index)
        cnt = 0;
    }
    cnt = 0;
    return split.reduce((a, b) => a + topf[cnt++] + b);
  };

  let result = str;
  for(let i = len - 1; i < str.length - 1; i = i + len) {
    let pos = result.lastIndexOf(' ', i + 1);
    result = replaceAt(result, pos, '\n');
    i = pos;
  }
  result = result.split('\n').map((line, idx, arr) => {
    if(idx + 1 < arr.length)
      return addSpaces(line, len);
    else
      return line;
  }).reduce((a, b) => a + '\n' + b);

  return result;
}

module.exports = justify;