// https://www.codewars.com/kata/55f2b110f61eb01779000053

const assert = require('assert');
const GetSum = require('../src/kata_002.js');

describe('kata_002', function() {
  describe('Beginner Series #3 Sum of Numbers', function() {
    it('#01 GetSum()', function() {
      assert.equal(GetSum(0,-1), -1);
    });
    it('#02 GetSum()', function() {
      assert.equal(GetSum(0,1), 1);
    });
  });
});
