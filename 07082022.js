// Day 49
//*******************************

// Kata: Get number from string

// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

function getNumberFromString(s) {
  // simple first - Number(s)
  // if it's a NaN...
  //    loop the chars?  arr.filter?  arr.map?
  const nums = "0123456789".split("");

  if (typeof Number(s) === "number" && !Number.isNaN(Number(s))) {
    return Number(s);
  } else {
    let arr = s.split("").filter((char) => nums.includes(char));
    console.log(arr);
    return Number(arr.join(""));
  }
}

/* ----------------------------------------------------------------------- */

// Kata:  Folding your way to the moon

// Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you have, but exactly how many? Maybe it's time to write a program to figure it out.

// You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
// (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

// Note: Of course you can't do half a fold. You should know what this means ;P

// Also, if somebody is giving you a negative distance, it's clearly bogus and you should yell at them by returning null (or whatever equivalent in your language). In Shell please return None. In C and COBOL please return -1.

function foldTo(distance) {
  // while loop?
  //    while thickness is less than distance, double the thickness?
  //    keep a counter and return it
  // filter out the trash => dist < 0 = null

  if (distance < 0) {
    return null;
  }

  let thick = 0.0001; // meters
  let folds = 0;

  while (thick < distance) {
    thick *= 2;
    folds++;
  }

  return folds;
}

/* ----------------------------------------------------------------------- */

// Kata:  Sum of Cubes

// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

function sumCubes(n) {
  // while loop, 1 to n
  //    keep a total to return

  let total = 0;
  let i = 1;

  while (i <= n) {
    total += i ** 3;
    i++;
  }

  return total;
}

/* ----------------------------------------------------------------------- */

// Kata:  Basic Training: Add item to an Array

// Add the value "codewars" to the websites array.
// After your code executes the websites array should == ["codewars"]

// The websites array has already been defined for you using the following code:

// var websites = [];

// add the value "codewars" to the already defined websites array

websites.push("codewars");

/* ----------------------------------------------------------------------- */
