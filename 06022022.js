// Day 28
//*******************************

// Kata: Plural

// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

function plural(n) {
  // is 1 the only non-plural?

  return n !== 1;
}

/* ----------------------------------------------------------------------- */

// Kata:  Count the divisors of a number

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCnt(n) {
  for (var d = 0, i = n; i > 0; i--) {
    if (n % i == 0) d++;
  }

  return d;
}

//  ** Didn't get this one.  Going through each possible num seemed like brute force / would time out.  I was attempting a fancy algo that would need helpers, so clearly overthinking.

/* ----------------------------------------------------------------------- */

// Kata: N-th Power

// This kata is from check py.checkio.org

// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Let's look at a few examples:

// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

function index(array, n) {
  // array.length <= n ? return -1
  // power = n * array[n]

  // n is beyond array
  if (array.length <= n) {
    return -1;
  }

  // return the power
  return array[n] ** n;
}

/* ----------------------------------------------------------------------- */

// Kata: Find Multiples of a Number

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.

function multiplesOf(integer, limit) {
  let multiples = [];
  let num = integer;

  for (let i = 1; num <= limit; i++) {
    let newNum = i * integer;
    if (newNum <= limit) {
      multiples.push(newNum);
    }
    num = newNum;
  }

  return multiples;
}
