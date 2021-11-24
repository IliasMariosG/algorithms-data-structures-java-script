"use strict"
let assert = require('assert');
let { isSumZero } = require('../src/sumZero.js')

describe('SumZero', () => {
  describe('isSumZero function', () => {
    it('[-1, 1] returns [-1, 1]', () => {
      let input = [-1, 1];

      assert.deepStrictEqual(isSumZero(input), [-1, 1]);
    });
    it('[-2, 2] returns [-2, 2]', () => {
      let input = [-2, 2];

      assert.deepStrictEqual(isSumZero(input), [-2, 2]);
    });
    it('[-50, 1, 50] returns [-50, 50]', () => {
      let input = [-50, 1, 50];

      assert.deepStrictEqual(isSumZero(input), [-50, 50]);
    });
    it('[-50, 35, 47, 50] returns [-50, 50]', () => {
      let input = [-50, 35, 39, 47, 50];

      assert.deepStrictEqual(isSumZero(input), [-50, 50]);
    });
  })
})