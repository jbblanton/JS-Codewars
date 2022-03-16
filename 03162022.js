// Day 1
//*******************************

// Kata: Love vs friendship

// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.

// Psuedocode:

// Make array of letters; value is index+1
// Receive string as input;
//   Split string to array of chars
//   Loop through array, get value, add to counter
// Return counter

function wordsToMarks(string) {
  // Added the 0 at index zero to save adding 1 to everything
  const letterValues = [
    0,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let wordArray = string.split("");
  let wordValue = 0;

  for (let char of wordArray) {
    wordValue += letterValues.indexOf(char);
  }

  return wordValue;
}
