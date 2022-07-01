// Day 46
//*******************************

// Kata: Most digits

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array) {
  // loop; if longer than prev, now longest
  let longest = 1;

  for (let num of array) {
    if (String(num).length > String(longest).length) {
      longest = num;
    }
  }

  return longest;
}

/* ----------------------------------------------------------------------- */

// Kata: Surface Area and Volume of a Box

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
  let area = 2 * (width * height) + 2 * (width * depth) + 2 * (height * depth);

  let vol = width * height * depth;

  return [area, vol];
}

/* ----------------------------------------------------------------------- */

// Kata: Array Helpers

// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

// Example
// var numbers = [1, 2, 3, 4, 5];

// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]

Array.prototype.square = function () {
  return this.map((ele) => ele ** 2);
}; //must return a copy of the array, containing all values squared

Array.prototype.cube = function () {
  return this.map((ele) => ele * ele * ele);
}; //must return a copy of the array, containing all values cubed

Array.prototype.average = function () {
  if (!this) {
    return NaN;
  }
  const len = this.length;
  return this.reduce((s, n) => (s += n), 0) / len;
}; //must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)

Array.prototype.sum = function () {
  return this.reduce((s, n) => (s += n), 0);
}; //must return the sum of all array values

Array.prototype.even = function () {
  return this.filter((ele) => ele % 2 === 0);
}; // must return an array of all even numbers

Array.prototype.odd = function () {
  return this.filter((ele) => ele % 2 !== 0);
}; //must return an array of all odd numbers
