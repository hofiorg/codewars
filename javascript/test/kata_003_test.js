// https://www.codewars.com/kata/54e6533c92449cc251001667

const assert = require('assert');
const uniqueInOrder = require('../src/kata_003.js');

describe('kata_003', function() {
  describe('Unique In Order', function() {
    it('#01 uniqueInOrder()', function() {
      assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B']);
    });
    it('#02 uniqueInOrder()', function() {
      assert.deepEqual(uniqueInOrder('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D']);
    });
    it('#03 uniqueInOrder()', function() {
      assert.deepEqual(uniqueInOrder([1,2,2,3,3]), [1,2,3]);
    });
  });
});
