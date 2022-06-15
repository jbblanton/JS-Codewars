// Day 35
//*******************************

// Kata: Find the next perfect square!

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  // find the sqrt, add 1 and square?

  let sqr = Math.sqrt(sq);
  // if not an integer, return -1
  if (sqr !== Math.floor(sqr)) {
    return -1;
  } else {
    return (sqr + 1) ** 2;
  }
}

/* ----------------------------------------------------------------------- */

// Kata: Find the position!

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter) {
  const alpha = "_abcdefghijklmnopqrstuvwxyz".split("");

  const idx = alpha.indexOf(letter);

  return `Position of alphabet: ${idx}`;
}

/* ----------------------------------------------------------------------- */

// Kata: Two Sum

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

function twoSum(numbers, target) {
  // target - num[0] = newTarget
  //    find index of newTarget
  //      -1?
  //  target - num[1] = newTarget
  //    repeat

  let newTar = 0;

  for (let i = 0; i < numbers.length; i++) {
    newTar = target - numbers[i];
    let tarIdx = numbers.lastIndexOf(newTar);
    if (tarIdx > i) {
      // not -1, not i
      let found = [i];
      found.push(tarIdx);
      return found;
    }
  }
}

/* ----------------------------------------------------------------------- */

// Kata: Predict your age!

// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let gpts = [age1, age2, age3, age4, age5, age6, age7, age8];
  let sqrs = gpts.map((gp) => gp ** 2);
  let sum = sqrs.reduce((s, n) => (s += n), 0);
  let root = Math.sqrt(sum);
  return Math.floor(root / 2);
}

/* ----------------------------------------------------------------------- */

// Kata:  Meeting

// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

function meeting(s) {
  // split s on ';' to get each person
  // for each,
  //    split on the ':'
  //    caps each ele
  //    swap placement => ele = `(${p1}, ${p0})`
  // sort the list, join, return

  let ppl = s.toUpperCase().split(";");
  let fixed = ppl.map(
    (person) => `(${person.split(":")[1]}, ${person.split(":")[0]})`
  );

  let ordered = fixed.sort((a, b) => a.localeCompare(b));

  return ordered.join("");
}

/* ----------------------------------------------------------------------- */

// Kata:  Sum of numbers from 0 to N

// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (count < 0) {
      return `${count}<0`;
    } else if (count === 0) {
      return "0=0";
    }

    let nums = [];

    for (let i = 0; i <= count; i++) {
      nums.push(i);
    }
    let sum = nums.reduce((a, b) => (a += b));

    return `${nums.join("+")} = ${sum}`;
  };

  return SequenceSum;
})();

/* ----------------------------------------------------------------------- */

// Kata:  Simple Encryption #1 - Alternating Split

// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
  // n == 0 ? return text
  // split text to array
  // empty array;
  //  loop and push odd idx ele to array; then remaining
  //    should not remove from orig (will skew remaining idx)
  //    push others to 2nd arr and concat?
  //  reassign new array as text to split
  // repeat loop n times

  if (!n || !text) {
    return text;
  }

  let code = [];
  let tail = [];
  let newCode = [];
  let arr = text.split("");

  while (n > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 !== 0) {
        code.push(arr[i]);
      } else {
        tail.push(arr[i]);
      }
    }
    code = code.concat(tail);

    arr = code;
    code = [];
    tail = [];
    n -= 1;
  }

  return arr.join("");
}

function decrypt(encryptedText, n) {
  // array with text.length
  // loop n times
  //    assign to odd, odd, etc., then even, even, etc
  //    or.. splice incoming into front/back (odd is weighted to back)
  //      idx%2 => arr[idx] = back.shift()

  if (!n || !encryptedText || n < 0) {
    return encryptedText;
  }
  console.log(encryptedText);
  const len = encryptedText.length;

  let arr = new Array(len);
  let code = encryptedText.split("");
  let front = [];
  let back = [];

  while (n > 0) {
    if (len % 2 === 0) {
      front = code.slice(0, len / 2);
      back = code.slice(len / 2);
    } else {
      front = code.slice(0, Math.floor(len / 2));
      back = code.slice(Math.floor(len / 2));
    }

    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        arr[i] = back.shift();
      } else {
        arr[i] = front.shift();
      }
    }
    code = arr;
    n -= 1;
  }

  return arr.join("");
}
