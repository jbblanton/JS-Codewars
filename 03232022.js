// Day 6
//*******************************

// Kata: Convert a String to a Number!

// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

var stringToNumber = function (str) {
  return parseInt(str);
};

/* ----------------------------------------------------------------------- */

// Kata: Highest Scoring Word

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");

  //   Split string into a list of separate words
  let wordList = x.split(" ");

  //   hashmap the word / point value
  // points: word
  let wordMap = new Map();

  // Find the point value of each word
  for (let word of wordList) {
    let letterList = word.split("");
    let points = 0;
    for (let char of letterList) {
      points += alpha.indexOf(char) + 1;
    }
    // if already there, don't replace
    if (!wordMap.has(points)) {
      wordMap.set(points, word);
    }
  }

  //   return highest value
  let ptKeys = Array.from(wordMap.keys());
  let maxVal = Math.max(...ptKeys);

  return wordMap.get(maxVal);
}
