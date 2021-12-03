'use strict';
const assert = require('assert');
let { averagePair } = require('../src/averagePair.js');

describe('#averagePair', () => {
  context('true', () => {
    it('[1,3], 2 returns true', () => {
      let targetValue = 2;
      assert.equal(averagePair([1, 3], targetValue), true);
    });
    it('[1,2], 1.5 returns true', () => {
      assert.equal(averagePair([1, 2], 1.5), true);
    });
    it('[1,2,3], 2.5 returns true', () => {
      assert.equal(averagePair([1, 2, 3], 2.5), true);
    });
    it('[1,3,3,5,6,7,10,12,19], 8 returns true', () => {
      assert.equal(averagePair([1, 3, 3, 5, 6, 7, 12, 10, 19], 8), true);
    });
  });
  context('false', () => {
    it('[1, 2, 3], 3 returns false', () => {
      assert.equal(averagePair([1, 2, 3], 3), false);
    });
    it('[], 3 returns false', () => {
      assert.equal(averagePair([], 3), false);
    });
    it('[1, 2, 6], 3 returns false', () => {
      assert.equal(averagePair([1, 2, 6], 3), false);
    });
    it('[\'1\', \'5\'], 3 returns false', () => {
      assert.equal(averagePair(['1', '5'], 3), false);
    });
  });
});
