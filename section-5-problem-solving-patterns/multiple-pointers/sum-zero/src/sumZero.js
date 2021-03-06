/* eslint-disable consistent-return */
'use strict';

const isSumZero = (sortedArray) => {

  let rightIndex = sortedArray.length - 1;
  for (let leftIndex = 0; leftIndex < rightIndex;) {

    if (sortedArray[leftIndex] + sortedArray[rightIndex] === 0) {

      return [
        sortedArray[leftIndex],
        sortedArray[rightIndex]
      ];

    } else if (sortedArray[leftIndex] + sortedArray[rightIndex] > 0) {

      rightIndex--;

    } else {

      leftIndex++;

    }

  }

  // It implicitly returns undefined;

};

exports.isSumZero = isSumZero;
