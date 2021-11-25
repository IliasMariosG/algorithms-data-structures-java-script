"use strict"

let isSumZero = (sortedArray) => {
  let i = 0;
  let j = sortedArray.length-1;
  for (i; i < j;) {
    if ((sortedArray[i] === 0) || (sortedArray[j] === 0)) {
      continue;
    };
    if (sortedArray[i] + sortedArray[j] === 0) {
      return [sortedArray[i], sortedArray[j]];
    } else if (sortedArray[i] + sortedArray[j] > 0) {
      j--
    } else {
      i++
    };
  }
  return undefined
}

exports.isSumZero = isSumZero;
