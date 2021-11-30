'use strict';

const MaxSum = class {
  findMaxSum(numbers, count) {
    let maximumSum = -Infinity;
    for (let i=0; i <= numbers.length - count; i++) {
      if (numbers[i] > maximumSum) {
        maximumSum = numbers[i]
      } 
    }
    return maximumSum
  }
}

exports.MaxSum = MaxSum;