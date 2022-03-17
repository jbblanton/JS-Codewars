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

/* ----------------------------------------------------------------------- */

// Kata: RowWeights

// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

// Pseudocode:

// Set a counter for team1 and team2
// Loop through array, add each item to the team values
// return those values

function rowWeights(array) {
  let team1 = array[0]; // evens
  let team2 = 0; // odds

  for (let i = 1; i < array.length; i++) {
    if (i % 2 === 0) {
      team1 += array[i];
    } else if (i % 2 !== 0) {
      team2 += array[i];
    }
  }
  return [team1, team2];
}

/* ----------------------------------------------------------------------- */
