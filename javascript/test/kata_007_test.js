// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991

let assert = require('assert');
let revrot = require('../src/kata_007.js');

describe('kata_007', function() {
  describe('Reverse or rotate?', function() {
    it('#01 reverse or rotate',function() {
      assert.equal(revrot('1234', 0), '');
      assert.equal(revrot('', 0), '');
      assert.equal(revrot('1234', 5), '');
      let s = '733049910872815764';
      assert.equal(revrot(s, 5), '330479108928157');

      assert.equal(revrot('123456987654', 6), '234561876549');
      assert.equal(revrot('123456987653', 6), '234561356789');
      assert.equal(revrot('66443875', 4), '44668753');
      assert.equal(revrot('66443875', 8), '64438756');
      assert.equal(revrot('664438769', 8), '67834466');
      assert.equal(revrot('123456779', 8), '23456771');
      assert.equal(revrot('', 8), '');
      assert.equal(revrot('123456779', 0), '');
      assert.equal(revrot('563000655734469485', 4), '0365065073456944');
    });
  });
});
