// Day 11
//*******************************

// Kata: Reversed Words

// Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str) {
  let strList = str.split(" ");
  let revList = strList.reverse();
  return revList.join(" ");
}

/* ----------------------------------------------------------------------- */

// Kata: MakeUpperCase

// Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  return str.toUpperCase();
}

/* ----------------------------------------------------------------------- */

// Kata:  Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
  let strList = x.split("");

  for (let i = 0; i < strList.length; i++) {
    if (strList[i] < 5) {
      strList[i] = 0;
    } else {
      strList[i] = 1;
    }
  }
  return strList.join("");
}

/* ----------------------------------------------------------------------- */

// Kata: Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  const vowels = "aeiou";
  var vowelsCount = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}
