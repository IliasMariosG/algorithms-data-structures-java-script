"use strict"

let isSumZero = (sortedArray) => {
  if (sortedArray[0] + sortedArray[sortedArray.length-1] === 0) {
    return [sortedArray[0], sortedArray[sortedArray.length-1]];
  }
  return undefined
}

exports.isSumZero = isSumZero;