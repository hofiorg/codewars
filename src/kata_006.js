module.exports = function humanReadable(seconds) {
  let hh = Math.floor(seconds / 3600);
  let mm = Math.floor((seconds - (3600 * hh)) / 60);
  let ss = Math.floor((seconds - (3600 * hh) - (60 * mm)));

  return pad(hh) + ":" +
         pad(mm) + ":" +
         pad(ss);
};

function pad(num) {
  if(num < 9)
    return '0' + num;
  return num;
}