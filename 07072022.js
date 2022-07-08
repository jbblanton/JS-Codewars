// Day 48
//*******************************

// Kata: repeatIt

// Create a function that takes a string and an integer (n).

// The function should return a string that repeats the input string n number of times.

// If anything other than a string is passed in you should return "Not a string"

// Example
// "Hi", 2 --> "HiHi"
// 1234, 5 --> "Not a string"

var repeatIt = function (str, n) {
  // check if str is really a string
  //    return 'Not a string'
  // str.repeat(n) to build return val

  return typeof str === "string" ? str.repeat(n) : "Not a string";
};

/* ----------------------------------------------------------------------- */

// Kata:  Sort the Gift Code

// Happy Holidays fellow Code Warriors!
// Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

// Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

// Sort the Gift Code
// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

// Examples (Input -- => Output):
// "abcdef"                      -- => "abcdef"
// "pqksuvy"                     -- => "kpqsuvy"
// "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"

function sortGiftCode(code) {
  // use localeCompare to sort alpha

  return code
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
}

/* ----------------------------------------------------------------------- */

// Kata:  Double Char

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
  // use repeat()
  // Loop the str, double, add into a new str to return

  let dupe = "";

  for (let char of str) {
    dupe += char.repeat(2);
  }

  return dupe;
}

/* ----------------------------------------------------------------------- */

// Kata:  Is it a number?

// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

function isDigit(s) {
  if (s.trim().length() > 0) {
    let num = Number(s.trim());
    return !Number.isNaN(num) && typeof num === "number";
  } else {
    return false;
  }
}

/* ----------------------------------------------------------------------- */

// Kata: Build Tower

// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]

function towerBuilder(nFloors) {
  // each floor is '*'.repeat() increasing
  //    1 +2 +2 +2 etc
  //    add ' ' on each side to center
  // while loop, building str into arr
  //    start at base (to get the right amount of ' ')
  //    spaces are n-1 => 0
  //    max base == 1 + 2*starting spaces

  let spaces = nFloors - 1; //start here
  let stars = 1;
  let tower = [];

  while (spaces > -1) {
    let level = " ".repeat(spaces) + "*".repeat(stars) + " ".repeat(spaces);
    tower.push(level);
    spaces -= 1;
    stars += 2;
  }

  return tower;
}
