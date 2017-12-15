let assert = require('assert');
let validParentheses = require('../src/kata_004.js');

describe('kata_004', function() {
  describe('Valid Parentheses', function() {
    it('#01 validParentheses()', function() {
      assert.equal(true, validParentheses("()"));
    });
    it('#02 validParentheses()', function() {
      assert.equal(false, validParentheses("())"));
    });
    it('#03 validParentheses()', function() {
      assert.equal(false, validParentheses(")(()))"));
    });
    it('#04 validParentheses()', function() {
      assert.equal(false, validParentheses("("));
    });
    it('#05 validParentheses()', function() {
      assert.equal(true, validParentheses("(())((()())())"));
    });
    it('#06 validParentheses()', function() {
      assert.equal(false, validParentheses(")("));
    });
  });
});
