'use strict';

const averagePair = (integers, targetAverage) => {

  let leftInd = 0;
  let rightInd = integers.length - 1;
  while (leftInd < rightInd) {

    const sumLeftRightIntegers = integers[leftInd] + integers[rightInd];
    const averageLefRightIntegers = sumLeftRightIntegers / 2;
    if (averageLefRightIntegers === targetAverage) {

      return true;

    } else if (averageLefRightIntegers > targetAverage) {

      rightInd--;

    } else if (averageLefRightIntegers < targetAverage) {

      leftInd++;

    }

  }

  return false;

};

exports.averagePair = averagePair;
