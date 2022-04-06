// Day 10
//*******************************

// Kata: Pillars

// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars(num_pill, dist, width) {
  // meters to centimeters => dist * 100
  // if more than 2 pillars, add width * num - 2

  let cmDist = 0;

  if (num_pill >= 2) {
    cmDist = dist * 100 * (num_pill - 1);
    cmDist += (num_pill - 2) * width;
  }

  return cmDist;
}

/* ----------------------------------------------------------------------- */

// Kata: Is it a palindrome?

// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  return x.toLowerCase() === x.toLowerCase().split("").reverse().join("");
}

/* ----------------------------------------------------------------------- */

// Kata: Data Reverse

// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

function dataReverse(data) {
  let revData = [];

  // Start at idx 0,
  // Grab chunks of 8
  // data.slice(0, 8) / data.slice(8,16)
  // Push onto revData
  for (let i = 0; i < data.length - 1; i += 8) {
    let byte = data.slice(i, i + 8);
    revData = byte.concat(revData);
    console.log(byte);
  }

  return revData;
}
