// https://www.codewars.com/kata/52685f7382004e774f0001f7

let assert = require('assert');
let humanReadable = require('../src/kata_006.js');

describe('kata_006', function() {
  describe('Human Readable Time', function() {
    it('#01 humanReadable()', function() {
      assert.equal('00:00:00', humanReadable(0));
    });
    it('#02 humanReadable()', function() {
      assert.equal('00:00:05', humanReadable(5));
    });
    it('#03 humanReadable()', function() {
      assert.equal('00:01:00', humanReadable(60));
    });
    it('#04 humanReadable()', function() {
      assert.equal('23:59:59', humanReadable(86399));
    });
    it('#05 humanReadable()', function() {
      assert.equal('99:59:59', humanReadable(359999));
    });
  });
});
