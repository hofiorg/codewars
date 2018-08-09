// https://www.codewars.com/kata/52685f7382004e774f0001f7

const assert = require('assert');
const humanReadable = require('../src/kata_006.js');

describe('kata_006', function() {
  describe('Human Readable Time', function() {
    it('#01 humanReadable()', function() {
      assert.equal(humanReadable(0), '00:00:00');
    });
    it('#02 humanReadable()', function() {
      assert.equal(humanReadable(5), '00:00:05');
    });
    it('#03 humanReadable()', function() {
      assert.equal(humanReadable(60), '00:01:00');
    });
    it('#04 humanReadable()', function() {
      assert.equal(humanReadable(86399), '23:59:59');
    });
    it('#05 humanReadable()', function() {
      assert.equal(humanReadable(359999), '99:59:59');
    });
  });
});
