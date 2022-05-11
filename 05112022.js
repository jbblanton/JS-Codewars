// Day 21
//*******************************

// Kata: Testing 1-2-3

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

var number = function (array) {
  if (array.length === 0) {
    return array;
  }

  for (let i = 0; i < array.length; i++) {
    array[i] = `${i + 1}: ${array[i]}`;
  }

  return array;
};

/* ----------------------------------------------------------------------- */

// Kata: Factorial

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

function factorial(n) {
  // Check for RangeError (12 < n < 0)
  // while loop,
  //    subtracting 1,
  //    keeping a quotient
  // return quotient

  if (n > 12 || n < 0) {
    throw new RangeError("Out of range");
  }

  let quotient = 1;

  while (n > 0) {
    quotient *= n;
    n--;
  }

  return quotient;
}

function RangeError(msg) {
  this.msg = msg;
  this.name = "RangeError";
}

/* ----------------------------------------------------------------------- */

// Kata: Difference of Volumes of Cuboids

// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

function findDifference(a, b) {
  return Math.abs(
    a.reduce((q, n) => (q *= n), 1) - b.reduce((q, n) => (q *= n), 1)
  );
}

/* ----------------------------------------------------------------------- */

// Kata: Find the first non-consecutive number

// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

function firstNonConsecutive(arr) {
  //  next ele should be +/- 1 from current
  //  for loop...   it doesn't feel very efficient...
  if (arr.length < 2) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > arr[i] + 1 || arr[i + 1] < arr[i] - 1) {
      return arr[i + 1];
    }
  }

  return null;
}

/* ----------------------------------------------------------------------- */

// Kata: Total amount of points

// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
  // your code here
  let total = 0;

  for (let i = 0; i < games.length; i++) {
    console.log(games[i]);
    //let scores = games[i].split(':')
    if (games[i].slice(0, 1) > games[i].slice(2)) {
      total += 3;
    } else if (games[i].slice(0, 1) === games[i].slice(2)) {
      total += 1;
    }
  }

  return total;
}
