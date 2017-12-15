let assert = require('assert');
let GetSum = require('../src/kata_002.js');

describe('kata_002', function() {
  describe('Beginner Series #3 Sum of Numbers', function() {
    it('#01 GetSum()', function() {
      assert.equal(-1, GetSum(0,-1));
    });
    it('#02 GetSum()', function() {
      assert.equal(1, GetSum(0,1));
    });
  });
});
