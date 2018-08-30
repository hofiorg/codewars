// https://www.codewars.com/kata/52685f7382004e774f0001f7

function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
    pad(parseInt(seconds / 60 % 60)) + ":" +
    pad(seconds % 60)
}

module.exports = humanReadable;