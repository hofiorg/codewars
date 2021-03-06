// https://www.codewars.com/kata/52685f7382004e774f0001f7

function humanReadable(seconds) {
  let hh = Math.floor(seconds / 3600);
  let mm = Math.floor((seconds - (3600 * hh)) / 60);
  let ss = Math.floor((seconds - (3600 * hh) - (60 * mm)));

  return pad(hh) + ":" +
         pad(mm) + ":" +
         pad(ss);
}

function pad(num) {
  if(num < 10)
    return '0' + num;
  return num;
}

module.exports = humanReadable;