// Day 47
//*******************************

// Kata: Build a square

// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

function generateShape(integer) {
  // while loop
  // add to string
  // fill an array, join on \n (so as to not have a dangler)

  let shape = new Array(integer);
  shape.fill("+".repeat(integer));

  return shape.join("\n");
}

/* ----------------------------------------------------------------------- */

// Kata: Consonant value

// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

function solve(s) {
  // split on a vowel to find substrings
  //    find/replace? => 5 times to get each vowel?
  // one loop through str, build subs and push to arr?
  //  loop the subs and tally value

  // array of letters, adjusted to start at 1
  const alpha = "_abcdefghijklmnopqrstuvwxyz".split("");
  const vowels = "aeiou".split("");

  let subs = [];

  let sub = "";
  for (let char of s) {
    if (!vowels.includes(char)) {
      sub += char;
    } else {
      subs.push(sub);
      sub = "";
    }
  }
  subs.push(sub);

  let total = 0;
  for (let wrd of subs) {
    let sum = 0;
    for (let c of wrd) {
      sum += alpha.indexOf(c);
    }
    if (sum > total) {
      total = sum;
    }
  }

  return total;
}

/* ----------------------------------------------------------------------- */

// Kata: get ascii value of character

// Get ASCII value of a character.

// For the ASCII table you can refer to http://www.asciitable.com/

function getASCII(c) {
  return c.charCodeAt(0);
}

/* ----------------------------------------------------------------------- */

// Kata: Tip Calculator

// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

function calculateTip(amount, rating) {
  switch (rating.toLowerCase()) {
    case "terrible":
      return Math.ceil(amount * 0.0);
    case "poor":
      return Math.ceil(amount * 0.05);
    case "good":
      return Math.ceil(amount * 0.1);
    case "great":
      return Math.ceil(amount * 0.15);
    case "excellent":
      return Math.ceil(amount * 0.2);
    default:
      return "Rating not recognised";
  }
}

/* ----------------------------------------------------------------------- */

// Kata:  Convert an array of strings to array of numbers

// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

function toNumberArray(stringarray) {
  return stringarray.map((ele) => Number(ele));
}
