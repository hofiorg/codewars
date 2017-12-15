let assert = require('assert');
let uniqueInOrder = require('../src/kata_003.js');

describe('kata_003', function() {
  describe('Unique In Order', function() {
    it('#01 uniqueInOrder()', function() {
      assert.deepEqual(['A','B','C','D','A','B'], uniqueInOrder('AAAABBBCCDAABBB'));
    });
    it('#02 uniqueInOrder()', function() {
      assert.deepEqual(['A', 'B', 'C', 'c', 'A', 'D'], uniqueInOrder('ABBCcAD'));
    });
    it('#03 uniqueInOrder()', function() {
      assert.deepEqual([1,2,3], uniqueInOrder([1,2,2,3,3]));
    });
  });
});
