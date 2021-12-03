'use strict';
let assert = require('assert');
let { countUniqueValues } = require('../src/countUniqueValues.js');

describe('UniqueValuesCount', function() {
  describe('countUniqueValues', function() {
    it('[1,2 ] returns 2', function() {
      let inputSortedArray = [1, 2];
      assert.deepStrictEqual(countUniqueValues(inputSortedArray), 2);
    });
    it('[1,2,2,2,4 ] returns 3', function() {
      let inputSortedArray = [1, 2, 2, 2, 4];
      assert.deepStrictEqual(countUniqueValues(inputSortedArray), 3);
    });
    it('[-1,0,2,2,2,4, 15] returns 5', function() {
      let inputSortedArray = [-1, 0, 2, 2, 2, 4, 15];
      assert.deepStrictEqual(countUniqueValues(inputSortedArray), 5);
    });
    it('[-1, 0, 2, 2, 2, 3, 4, 7, 7, 12, 13, 13, 15] returns 9', function() {
      let inputSortedArray = [-1, 0, 2, 2, 2, 3, 4, 7, 7, 12, 13, 15];
      assert.deepStrictEqual(countUniqueValues(inputSortedArray), 9);
    });
  });
});