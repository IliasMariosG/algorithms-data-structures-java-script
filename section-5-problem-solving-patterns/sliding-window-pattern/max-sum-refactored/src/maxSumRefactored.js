'use strict';

const MaxSum = class {

  findMaxSum (numbers, count) {

    if (this.isLengthZero()) {

      return null;

    }

    let maximumSum = 0;
    // Keep track of the temporary sum of n consecutive elements
    let temporarySum = 0;
    for (let i = 0; i < count; i++) {

      // Set maximum sum to the first 'count' = 2 consecutive elements
      maximumSum += numbers[i];

    }
    temporarySum = maximumSum;
    for (let i = count; i < numbers.length; i++) {

      /*
       * For i == 0:
       * It substracts from maximumSum (temporarySum==maximumSum)
       * It adds the right element on index i
       * It substracts the left element on index i-2
       * For i == 1:
       * ..
       * ..
       */

      temporarySum = temporarySum + numbers[i] - numbers[i - count];
      maximumSum = Math.max(
        maximumSum,
        temporarySum
      );

    }

    return maximumSum;

  }

  inputLength (numbers) {

    return numbers.length;

  }

  isLengthZero () {

    return this.inputLength === 0;

  }

};

exports.MaxSum = MaxSum;
