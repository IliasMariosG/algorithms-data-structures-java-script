'use strict ';

let assert = require('assert');
let { MaxSum } = require('../src/maxSum.js')
// The function accepts an array of integers and a number.
// It calculates the the maximum sum of n consecutive elements in the array
// and returns that sum 

describe('MaxSum', () => {
  let maxSumInstance = new MaxSum();
  describe('maxSum function' , () => {
    it('[1] returns 1', () => {
      let numbers = [3];
      let count = 1;
      
      assert.deepStrictEqual(maxSumInstance.findMaxSum(numbers, count), 3)
    });
  })
})