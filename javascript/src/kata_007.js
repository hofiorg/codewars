// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991

function revrot(str, sz) {
  if(sz <= 0 || sz > str.length)
    return '';

  return chunkString(str, sz)
    .filter(chunk => chunk.length === sz)
    .map(chunk => (sumDigits(chunk) % 2 === 0)?reverseChunk(chunk):rotateChunk(chunk))
    .join('');
}

function chunkString(str, length) {
  return str.match(new RegExp('.{1,' + length + '}', 'g'));
}

function reverseChunk(s) {
  return s.split('').reverse().join('');
}

function rotateChunk(s) {
  return s.substring(1) + s[0];
}

function sumDigits(s) {
  return s.split('').reduce((a, b) => parseInt(a) + parseInt(b));
}

module.exports = revrot;
