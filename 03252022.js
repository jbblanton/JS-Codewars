// Day 8
//*******************************

// Kata: Convert number to reversed array of digits

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

//  ** Had to peek at the solutions for this one.  I was using a forEach to convert string to number, and was failing.

function digitize(n) {
  let numList = n.toString().split("");
  let revList = numList.map((ele) => Number(ele));
  return revList.reverse();
}

/* ----------------------------------------------------------------------- */

// Kata: Is n divisible by x and y?

// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

function isDivisible(n, x, y) {
  //   if (n % x === 0 && n % y === 0) {
  //     return true
  //   }

  //   return false

  return n % x === 0 && n % y === 0;
}

/* ----------------------------------------------------------------------- */

// Kata: Beginner - Lost Without a Map

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x) {
  return x.map((ele) => (ele *= 2));
}

/* ----------------------------------------------------------------------- */

// Kata: A Needle in the Haystack

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

function findNeedle(haystack) {
  let spot = haystack.indexOf("needle");

  return `found the needle at position ${spot}`;
}
