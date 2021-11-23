"use strict";
const Anagram = class {
  isAnagram (str1, str2) {
    if ((str1 || str2) === '') {
      throw new Error('Must not be empty words')
    }
    let frequencyOne = {}
    let frequencyTwo = {}
    str1.split('').forEach(element => {
      if (frequencyOne[element]) {
        frequencyOne[element] += 1
      }else {
        frequencyOne[element] = 1
      }
    });
    str2.split('').forEach(element => {
      if (frequencyTwo[element]) {
        frequencyTwo[element] += 1
      }else {
        frequencyTwo[element] = 1
      }
    });
    for (let char in frequencyOne) {
      // console.log(char)
      // console.log(frequencyTwo[char])
      // console.log(!char in frequencyTwo)

      if ((!char in frequencyTwo) || (frequencyTwo[char] !== frequencyOne[char])){
          return false
      }
    }
    return true
  };
};

exports.Anagram = Anagram;
