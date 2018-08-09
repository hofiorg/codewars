// https://www.codewars.com/kata/52774a314c2333f0a7000688

const assert = require('assert');
const validParentheses = require('../src/kata_004.js');

describe('kata_004', function() {
  describe('Valid Parentheses', function() {
    it('#01 validParentheses()', function() {
      assert.equal(validParentheses("()"), true);
    });
    it('#02 validParentheses()', function() {
      assert.equal(validParentheses("())"), false);
    });
    it('#03 validParentheses()', function() {
      assert.equal(validParentheses(")(()))"), false);
    });
    it('#04 validParentheses()', function() {
      assert.equal(validParentheses("("), false);
    });
    it('#05 validParentheses()', function() {
      assert.equal(validParentheses("(())((()())())"), true);
    });
    it('#06 validParentheses()', function() {
      assert.equal(validParentheses(")("), false);
    });
  });
});
