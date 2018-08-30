// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

function solution(list){

  let result = [];

  for(let i = 0; i < list.length; ++i) {
    let inner = [];
    for(let a = i; a < list.length; ++a) {
      let cur = list[a];
      let nxt = list[a + 1];
      if(cur === nxt - 1) {
        inner.push(list[a]);
      }
      else if(cur === nxt + 1) {
        inner.push(list[a]);
      }
      else {
        inner.push(list[a]);
        break;
      }
    }

    let len = inner.length;
    if(len > 2) {
      result.push(inner[0] + '-' + inner[len - 1]);
      i = i + len - 1;
      continue;
    }
    result.push(list[i]);
  }
  return result.join(',');
}

module.exports = solution;