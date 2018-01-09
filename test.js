let assert = require('assert');
let add = require('./add')

describe('Calculator', () => {
  describe('Adding nothing', () => {
    it('should return 0', function() {
      assert.equal(add(""), 0);
    })
  })
  describe('Adding single number', () => {
    it('should return the single number', function() {
      assert.equal(add("2"), 2);
    })
  })
  describe('Adding two numbers', () => {
    it('should return the sum', function() {
      assert.equal(add("2,5"), 7);
    })
  })
  describe('Adding multiple numbers', () => {
    it('should return the sum', function() {
      assert.equal(add("2,5,-7,6,9,19"), 34);
    })
  })
  describe('Adding multiple numbers with different separators', () => {
    it('should return the sum', function() {
      assert.equal(add("2\n1,3"), 6);
    })
  })
  describe('Adding multiple numbers with different separators concatenated', () => {
    it('should return an error', function() {
      assert.equal(add("2\n,1,3"), "error");
    })
  })
  describe('Adding multiple numbers with a new separators', () => {
    it('should return the sum', function() {
      assert.equal(add("//;\n1;2"), 3);
    })
  })
  describe('Adding multiple numbers with a different new separator', () => {
    it('should return an error', function() {
      assert.notEqual(add("//a\n1;2"), 3);
    })
  })
  // describe(<Put a short description of the test here>, () => {
  //   it(<describe the expected behavior>, function() {
  //     Put your assertions here
  //   })
  // })
});
