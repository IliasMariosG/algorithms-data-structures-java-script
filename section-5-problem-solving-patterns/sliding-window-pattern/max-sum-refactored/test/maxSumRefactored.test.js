'use strict';
const assert = require('assert');
let { MaxSum } = require('../src/maxSumRefactored.js')

describe('Max Sum Refactored Class', () => {
  let maxSumInstance;
  let window;
  beforeEach('class initialisation', function() {
    maxSumInstance = new MaxSum();
  });
  describe('#findMaxSum', () => {
    it('[1,2,3] with window 2 returns 5', () => {
      window = 2;

      assert.deepStrictEqual(maxSumInstance.findMaxSum([1, 2, 3], window), 5)
    });
    it('[2,6,9,2,1,8,5,6,3] with window 3 returns 19', () => {
      window = 3;

      assert.deepStrictEqual(maxSumInstance.findMaxSum([2,6,9,2,1,8,5,6,3], window), 19)
    });
  })
})