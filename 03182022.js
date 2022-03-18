// Day 3
//*******************************

// Kata: Sum of all the multiples of 3 or 5

// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

/* ----------------------------------------------------------------------- */

// Kata: Sum of a sequence

// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)
// This is the first kata in the series:

// Sum of a sequence (this kata)
// Sum of a Sequence [Hard-Core Version]

const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }

  let sum = 0;

  for (let i = begin; i <= end; i += step) {
    sum += i;
  }

  return sum;
};

/* ----------------------------------------------------------------------- */

// Kata: Even numbers in an array

// Given an array of digitals numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function evenNumbers(array, number) {
  let evens = [];

  for (i = array.length - 1; evens.length < number; i--) {
    if (array[i] % 2 === 0) {
      evens.unshift(array[i]);
    }
  }

  return evens;
}

/* ----------------------------------------------------------------------- */

// Kata: Over the Road

// Task
// You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:

// Street
// 1|   |6
// 3|   |4
// 5|   |2
// Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.

// Example (address, n --> output)
// Given your house number address and length of street n, give the house number on the opposite side of the street.

// 1, 3 --> 6
// 3, 3 --> 4
// 2, 3 --> 5
// 3, 5 --> 8
// Note about errors
// If you are timing out, running out of memory, or get any kind of "error", read on. Both n and address could get upto 500 billion with over 200 random tests. If you try to store the addresses of 500 billion houses in a list then you will run out of memory and the tests will crash. This is not a kata problem so please don't post an issue. Similarly if the tests don't complete within 12 seconds then you also fail.

// To solve this, you need to think of a way to do the kata without making massive lists or huge for loops. Read the discourse for some inspiration :)

// Got this on the FIRST TRY!!

// Started with some math...
// 3,3 -> 4

// Street length = 3
// Total houses = 3*2 -> 6
// Smallest = 1 / Largest = 6
// Address 3 = 1+2
// Address x = 6-2

// Street length = 11
// Total houses = 11*2 -> 22
// Smallest = 1 / Largest = 22
// Address 7 = 1+6
// Address x = 22-6

function overTheRoad(address, n) {
  let totalHomes = n * 2;

  let oddDist = address - 1;
  let opposite = totalHomes - oddDist;

  return opposite;
}
