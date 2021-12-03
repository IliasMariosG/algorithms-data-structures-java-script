'use strict';
var assert = require('assert');
var { Anagram } = require('../src/anagram.js');

describe('Anagram', function() {
  let anagramTest;
  let wordOne;
  let wordTwo;
  this.beforeEach('class initialisation', function() {
    anagramTest = new Anagram();
  });
  describe('isAnagram', () => {
    it('one A and one A return true', function() {
      wordOne = 'a';
      wordTwo = 'a';
      assert.equal(anagramTest.isAnagram(wordOne, wordTwo), true);
    });
    it('one A and one B return false', function() {
      wordOne = 'a';
      wordTwo = 'b';
      assert.equal(anagramTest.isAnagram(wordOne, wordTwo), false);
    });
    it('two As and two As return true', function() {
      wordOne = 'aa';
      wordTwo = 'aa';
      assert.equal(anagramTest.isAnagram(wordOne, wordTwo), true);
    });
    it('one A one B and one A one B return true', function() {
      wordOne = 'ab';
      wordTwo = 'ab';
      assert.equal(anagramTest.isAnagram(wordOne, wordTwo), true);
    });
    it('one A one B and one B one A return true', function() {
      wordOne = 'ab';
      wordTwo = 'ba';
      assert.equal(anagramTest.isAnagram(wordOne, wordTwo), true);
    });
    it('one A, one B, one C and one B, one A, one C return true', function() {
      wordOne = 'abc';
      wordTwo = 'bac';
      assert.equal(anagramTest.isAnagram(wordOne, wordTwo), true);
    });
    it('char and hrca return true', function() {
      wordOne = 'char';
      wordTwo = 'hrca';
      assert.equal(anagramTest.isAnagram(wordOne, wordTwo), true);
    });
    it('char and rrca return false', function() {
      wordOne = 'chr';
      wordTwo = 'rrc';
      assert.equal(anagramTest.isAnagram(wordOne, wordTwo), false);
    });
    it('empty string and empty string raises exception', function() {
      wordOne = '';
      wordTwo = '';
      const errorTest = new Error('Must not be empty words');
      assert.throws(() => {anagramTest.isAnagram(wordOne, wordTwo);}, errorTest);
    });
  });
});
