'use strict ';

let assert = require('assert');
let { MaxSum } = require('../src/maxSumNaive.js')
// The function accepts an array of integers and a number.
// It calculates the the maximum sum of n consecutive elements in the array
// and returns that sum 

describe('MaxSum', () => {
  let maxSumInstance = new MaxSum();
  describe('maxSum function' , () => {
    it('[1] returns 1', () => {
      let numbers = [1];
      let count = 1;
      
      assert.deepStrictEqual(maxSumInstance.findMaxSum(numbers, count), 1)
    });
    it('[1, 2, -1, 10, -53] returns 10', () => {
      let numbers = [1, 2, -1, 10, -53];
      let count = 1;
      
      assert.deepStrictEqual(maxSumInstance.findMaxSum(numbers, count), 10)
    });
    it('[1, 2] returns 3', () => {
      let numbers = [1, 2];
      let count = 2;
      
      assert.deepStrictEqual(maxSumInstance.findMaxSum(numbers, count), 3)
    });
    it('[1, 2, 3] returns 6', () => {
      let numbers = [1, 2, 3];
      let count = 3;
      
      assert.deepStrictEqual(maxSumInstance.findMaxSum(numbers, count), 6)
    });
    it('[1, 2, 3, 4, 5, 1, 1, -3, -4, 0, 1] returns 12', () => {
      let numbers = [1, 2, 3, 4, 5, 1, 1, -3, -4, 0, 1];
      let count = 3;
      
      assert.deepStrictEqual(maxSumInstance.findMaxSum(numbers, count), 12)
    });
    it('[] returns undefined', () => {
      let numbers = [];
      let count = 100;
      
      assert.deepStrictEqual(maxSumInstance.findMaxSum(numbers, count), null)
    });
  })
})