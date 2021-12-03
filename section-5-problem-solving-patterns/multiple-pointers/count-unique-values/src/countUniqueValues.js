'use strict';

const countUniqueValues = (sortedArray) => {

  const uniqueValuesCounter = {};
  for (let index in sortedArray) {

    let number = sortedArray[index];
    if (!uniqueValuesCounter[number]) {

      uniqueValuesCounter[number] = 1;

    }

  }
  return Object.values(uniqueValuesCounter).length;

};

exports.countUniqueValues = countUniqueValues;
