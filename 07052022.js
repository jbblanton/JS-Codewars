// Day 47
//*******************************

// Kata: Grasshopper - Array Mean

// Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4
// 3. The mean (or average) of this list is 4

var findAverage = function (nums) {
  return nums.reduce((s, n) => (s += n), 0) / nums.length;
};

/* ----------------------------------------------------------------------- */

// Kata: L1: Bartender, drinks!

// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input Output
// "Jabroni" "Patron Tequila"
// "School Counselor"  "Anything with Alcohol"
// "Programmer"  "Hipster Craft Beer"
// "Bike Gang Member"  "Moonshine"
// "Politician"  "Your tax dollars"
// "Rapper"  "Cristal"
// anything else "Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

function getDrinkByProfession(param) {
  switch (param.toLowerCase()) {
    case "jabroni":
      return "Patron Tequila";
    case "school counselor":
      return "Anything with Alcohol";
    case "programmer":
      return "Hipster Craft Beer";
    case "bike gang member":
      return "Moonshine";
    case "politician":
      return "Your tax dollars";
    case "rapper":
      return "Cristal";
    default:
      return "Beer";
  }
}

/* ----------------------------------------------------------------------- */

// Kata: Count the Digit

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

function nbDig(n, d) {
  // loop 1-n
  //    square the n
  //    does it contain d?
  //      count it!

  let i = 0;
  let count = 0;

  while (i <= n) {
    let sq = i ** 2;
    if (String(sq).includes(d)) {
      let num = String(sq)
        .split("")
        .filter((ele) => Number(ele) === d);
      count += num.length;
    }
    i++;
  }

  return count;
}

/* ----------------------------------------------------------------------- */

// Kata: Dashatize it

// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'
