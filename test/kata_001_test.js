let assert = require('assert');
let spinWords = require('../src/kata_001.js');

describe('kata_001', function() {
  describe('Stop gninnipS My sdroW!', function() {
    it('#01 spinWords()', function() {
      assert.equal("Hey wollef sroirraw", spinWords("Hey fellow warriors"));
    });
  });
});
