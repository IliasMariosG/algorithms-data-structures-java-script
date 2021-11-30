'use strict';

const MaxSum = class {
  findMaxSum(numbers, num) {
    let maxSum = 0;
  let tempSum = 0;
  if (numbers.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += numbers[i];
  }
  tempSum = maxSum;
  for (let i = num; i < numbers.length; i++) {
    tempSum = tempSum - numbers[i - num] + numbers[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
    // if (numbers.length == 0) {
    //   return null;
    // }
    // let maximumSum = 0;
    // // Keep track of the temporary sum of n consecutive elements
    // let temporarySum = 0;
    // for (let i=0; i < count; i++) {
    //   // set maximum sum to the first 'count'=2 consecutive elements
    //   maximumSum += numbers[i];
    // }
    // temporarySum = maximumSum;
    // for (let i=count; i < numbers.length; i++) {
    //   // for i == 0:
    //   // it substracts from maximumSum (temporarySum==maximumSum)
    //   // it adds the right element on index i
    //   // it substracts the left element on index i-2
    //   // for i == 1:
    //   // ..
    //   // ..
    //   // 
      
    //   temporarySum = temporarySum + numbers[i] - numbers[i-count]
    //   maximumSum = Math.max(temporarySum,maximumSum)
    // }
    // return maximumSum
  }
}
// const inst = new MaxSum();
// inst.findMaxSum([1,2,3], 2)
exports.MaxSum