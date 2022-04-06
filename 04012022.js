// Day 12
//*******************************

// Kata: Count letters in string

// In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.

// Example:

// letter_count('arithmetics') //=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}

function letterCount(s) {
  // loop through string
  // empty hashmap
  // for char, if not in map, add:count 1
  //    else, incr count
  // return map

  let alphaMap = {};

  for (let char of s) {
    char in alphaMap ? (alphaMap[char] += 1) : (alphaMap[char] = 1);
  }

  return alphaMap;
}

/* ----------------------------------------------------------------------- */

// Kata: Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  // How to draw the oddball to one end?
  // sort, compare [0], [1], [-1]
  // return the outlier

  arr.sort((a, b) => a - b);
  return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
}

/* ----------------------------------------------------------------------- */

// Kata: Reverse every other word in the string

// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str) {
  // break str to list
  // odd-idx ele get reversed
  // join, trim, return

  let wordList = str.split(" ");
  for (let i = 1; i < wordList.length; i += 2) {
    // .reverse() isn't a method on strings, so make those words a list and then rejoin
    wordList[i] = wordList[i].split("").reverse().join("");
  }

  return wordList.join(" ").trim();
}

/* ----------------------------------------------------------------------- */

// Kata: Who likes it?

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

/* ----------------------------------------------------------------------- */

// Kata: Square Every Digit

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  // num to str split into list
  // forEach, sqr and concat to str
  // return as Num

  let digits = String(num).split("");
  let sqrNums = "";

  digits.forEach((num) => (sqrNums += String(num * num)));
  console.log(sqrNums);
  return Number(sqrNums);
}
