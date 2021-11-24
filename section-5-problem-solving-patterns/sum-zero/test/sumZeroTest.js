"use strict"
let assert = require('assert');
let { isSumZero } = require('../src/sumZero.js')

describe('SumZero', () => {
  describe('isSumZero function', () => {
    let input;
    it('[-1, 1] returns [-1, 1]', () => {
      input = [-1, 1];

      assert.deepStrictEqual(isSumZero(input), [-1, 1]);
    });
    it('[-2, 2] returns [-2, 2]', () => {
      input = [-2, 2];

      assert.deepStrictEqual(isSumZero(input), [-2, 2]);
    });
    it('[-50, 1, 50] returns [-50, 50]', () => {
      input = [-50, 1, 50];

      assert.deepStrictEqual(isSumZero(input), [-50, 50]);
    });
    it('[-50, 35, 47, 50] returns [-50, 50]', () => {
      input = [-50, 35, 39, 47, 50];

      assert.deepStrictEqual(isSumZero(input), [-50, 50]);
    });
    it('[-3, 1] returns undefined', () => {
      input = [-3, 1];

      assert.deepStrictEqual(isSumZero(input), undefined);
    });
    it('[-3, -1, 1] returns [-1, 1]', () => {
      input = [-3, -1, 1];

      assert.deepStrictEqual(isSumZero(input), [-1, 1]);
    });
    it('[-3, -2, 0, 1, 2, 4] returns [-2, 2]', () => {
      input = [-3, -2, 0, 1, 2, 4];

      assert.deepStrictEqual(isSumZero(input), [-2, 2]);
    });
    it('[0] returns undefined', () => {
      input = [0];

      assert.deepStrictEqual(isSumZero(input), undefined)
    })
    it('[-2, 0, 1, 3] returns undefined', () => {
      input = [-2, 0, 1, 3];

      assert.deepStrictEqual(isSumZero(input), undefined)
    })
  })
})