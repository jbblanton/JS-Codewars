// Day 4
//*******************************

// Kata: Even or Odd

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

/* ----------------------------------------------------------------------- */

// Kata: Opposite number

// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  return number * -1;
}

/* ----------------------------------------------------------------------- */

// Kata: Return Negative

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
  if (num <= 0) {
    return num;
  }

  return num * -1;
}

/* ----------------------------------------------------------------------- */

// Kata: String repeat

// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  i = 1;
  str = s;
  while (i < n) {
    str += s;
    i++;
  }

  return str;
}

// ** Note to future self:  String has a method '.repeat()'!
//      'abc'.repeat(5) => 'abcabcabcabcabc'
//      'abc'.repeat(0) => ''
//      'abc'.repeat(-1) => RangeError

/* ----------------------------------------------------------------------- */

// Kata: Grasshopper- Summation

// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
  let i = 1;
  let grasshopper = 0;

  while (i <= num) {
    grasshopper += i;
    i++;
  }
  return grasshopper;
};

/* ----------------------------------------------------------------------- */

// Kata: RemoveStringSpaces

// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
  xList = x.split(" ");
  newStr = "";

  for (let seg of xList) {
    if (seg) {
      newStr += seg;
    }
  }

  return newStr;
}

/* ----------------------------------------------------------------------- */

// Kata: Counting Sheep

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
  let countSheep = 0;

  arrayOfSheep.forEach((sheep) =>
    sheep === true ? (countSheep += 1) : (countSheep += 0)
  );

  return countSheep;
}
