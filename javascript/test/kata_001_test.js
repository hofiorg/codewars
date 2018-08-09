// https://www.codewars.com/kata/5264d2b162488dc400000001

const assert = require('assert');
const spinWords = require('../src/kata_001.js');

describe('kata_001', function() {
  describe('Stop gninnipS My sdroW!', function() {
    it('#01 spinWords()', function() {
      assert.equal(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
    });
  });
});
