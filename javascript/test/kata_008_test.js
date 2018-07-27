// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

let assert = require('assert');
let queueTime = require('../src/kata_008.js');

describe('kata_008', function() {
  describe('The Supermarket Queue', function() {
    it('#01 the supermarket queue', function() {
      assert.equal(queueTime([], 1), 0);
      assert.equal(queueTime([1,2,3,4], 1), 10);
      assert.equal(queueTime([2,2,3,3,4,4], 2), 9);
      assert.equal(queueTime([1,2,3,4,5], 100), 5);
    });

    it('#02 the supermarket queue', function() {
      assert.equal(queueTime([38,5,15,32,33,3,45,45,6,26,26,4,10,18,7,50,38,26,7,44,38], 4), 141);
    });
  });
});