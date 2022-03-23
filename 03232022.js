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

/* ----------------------------------------------------------------------- */

// Kata: Basic Mathematical Operations

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
  }
}

/* ----------------------------------------------------------------------- */

// Kata: Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  let numDigits = String(num).split(""); // 12 => "12" => ['1', '2']
  let expanded = [];
  let remaining = numDigits.length - 1;

  for (let i = 0; i < numDigits.length; i++) {
    if (numDigits[i] !== "0") {
      let addition = numDigits[i] + "0".repeat(remaining);
      expanded.push(addition);
    }
    remaining -= 1;
  }

  return expanded.join(" + ");
}
