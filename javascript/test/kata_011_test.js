// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

const assert = require('assert');
const solution = require('../src/kata_011.js');

describe('kata_011', function(){
  describe('#001', function() {


    assert.equal(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20");
  });
});