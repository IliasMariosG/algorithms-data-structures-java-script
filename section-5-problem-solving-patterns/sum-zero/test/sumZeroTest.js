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
  })
})