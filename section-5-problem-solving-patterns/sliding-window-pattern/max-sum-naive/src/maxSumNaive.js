'use strict';

const MaxSum = class {
  findMaxSum(numbers, count) {
    if (numbers.length == 0) {
      return null;
    }
    let maximumSum = -Infinity;
    for (let i = 0; i < numbers.length - count + 1; i++) {
      let temporarySum = 0;
      for (let j = 0; j < count; j++) {
        temporarySum += numbers[i+j]
        if (temporarySum > maximumSum) {
          maximumSum = temporarySum
        }
      }
    }
    return maximumSum
  }
}

exports.MaxSum = MaxSum;