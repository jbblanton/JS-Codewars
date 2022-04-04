// Day 10
//*******************************

// Kata: Find the odd int

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  // hashmap the freq.
  // look at values for odd num
  // return that key
  // Is there a value to sorting first?
  //    include counter inside loop, if val is odd, stop and return

  // Deal with single-item lists
  if (A.length === 1) {
    return A[0];
  }

  A.sort((a, b) => a - b);
  let counter = 1;

  for (let i = 0; i < A.length - 1; i++) {
    console.log(A[i]);
    if (A[i] === A[i + 1]) {
      counter += 1;
    } else {
      if (counter % 2 === 0) {
        if (i === A.length - 2) {
          return A[i + 1];
        }
        counter = 1;
      } else {
        return A[i];
      }
    }
  }
}

/* ----------------------------------------------------------------------- */

// Kata: Sum of Digits / Digital Root

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

//  Did I just solve this with recursion??  YAY!!

function digital_root(n) {
  let numList = String(n).split("");
  let summed = numList.reduce((sum, num) => (sum += Number(num)), 0);
  if (summed.toString().length > 1) {
    summed = digital_root(summed);
  }

  return summed;
}

/* ----------------------------------------------------------------------- */

// Kata: Get the Middle Character

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s) {
  // Find length of s
  // if odd, return floor of length/2
  // if even, s[length/2 - 1] + s[length/2]

  if (s.length % 2 === 1) {
    let idx = Math.floor(s.length / 2);
    return s[idx];
  } else {
    let idx1 = s.length / 2;
    let idx2 = idx1 - 1;
    return s.substring(idx2, idx1 + 1);
  }
}

/* ----------------------------------------------------------------------- */

// Kata: Descending Order

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  // num to string to list
  // sort descending
  // join and return as num

  let numList = n.toString().split("");
  numList.sort((a, b) => b - a);

  return Number(numList.join(""));
}

/* ----------------------------------------------------------------------- */

// Kata: Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
  // str.toLowerCase()
  // sort letters
  // if letter[i] === letter[i+1], return false
  // empty and single chars are true

  if (str.length < 2) {
    return true;
  }

  let newstr = str.toLowerCase().split("").sort();
  console.log(newstr);
  for (let i = 0; i < str.length - 1; i++) {
    if (newstr[i] === newstr[i + 1]) {
      return false;
    }
  }

  return true;
}

/* ----------------------------------------------------------------------- */
