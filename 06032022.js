// Day 29
//*******************************

// Kata: Anagram Detection

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
var isAnagram = function (test, original) {
  //  put them both to lowerCase
  //  length match?
  //  loop a.includes(b[1])
  //    -could err on duplicate letters
  //    -remove the letter when found?
  //  sort both and compare!

  if (test.length === original.length) {
    let sortT = test
      .toLowerCase()
      .split("")
      .sort((a, b) => a.localeCompare(b));
    console.log(sortT);
    let sortO = original
      .toLowerCase()
      .split("")
      .sort((a, b) => a.localeCompare(b));
    console.log(sortO);
    return sortT.join() === sortO.join();
  }

  return false;
};

/* ----------------------------------------------------------------------- */

// Kata: Is it even?

// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

function testEven(n) {
  return n % 2 === 0;
}

/* ----------------------------------------------------------------------- */

// Kata: Small enough? - Beginner

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit) {
  // forEach?
  // sort arr and compare arr[-1]

  let sorted = a.sort((a, b) => a - b);

  return limit >= sorted[sorted.length - 1];
}

/* ----------------------------------------------------------------------- */

// Kata: Find the capitals

// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
  // arr for index
  // loop word,
  //    if word[i] === word[i].toUpperCase(), add
  // return arr

  let idx = [];

  for (let char of word) {
    if (char === char.toUpperCase()) {
      idx.push(word.indexOf(char));
    }
  }

  return idx;
};
