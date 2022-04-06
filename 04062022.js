// Day 14
//*******************************

// Kata: Find The Parity Outlier

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {
  // a filter seems the obv choice
  //    runtime issues for v.large arr?
  // Need to know what we're looking for
  //    Sample 3 ele
  //    if all are (even/odd), filter
  //    if one is diff, return that
  //

  let evens = integers.filter((num) => num % 2 === 0);
  if (evens.length === 1) {
    return evens[0];
  } else {
    let odd = integers.filter((num) => num % 2 !== 0);
    return odd[0];
  }
}

/* ----------------------------------------------------------------------- */

// Kata: Counting Duplicates

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  // text to lowercase
  // hashmap the found letters
  // values => value>1 ? count

  let letterMap = {};

  for (let char of text.toLowerCase()) {
    letterMap[char] ? (letterMap[char] += 1) : (letterMap[char] = 1);
  }

  let frequencies = Object.values(letterMap);
  let freq = frequencies.filter((letter) => letter > 1);

  return freq.length;
}
