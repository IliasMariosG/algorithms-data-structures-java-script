'use strict'

let countUniqueValues = (sortedArray) => {
  let uniqueValuesCounter = {};
  for (let index in sortedArray) {
    let number = sortedArray[index]
    if (uniqueValuesCounter[number]) {
      continue;
    } else {
      uniqueValuesCounter[number] = 1
    }
  }
  return Object.values(uniqueValuesCounter).length
}

exports.countUniqueValues = countUniqueValues;