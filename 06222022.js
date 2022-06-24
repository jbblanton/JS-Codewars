// Day 40
//*******************************

// Kata: No zeros for heros

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
  // num to str to arr
  // loop from end to start,
  //    if 0, pop
  //    else, return arr to str to num
  if (n === 0) {
    return n;
  }

  let digits = String(n).split("");

  for (let i = digits.length - 1; i > 0; i--) {
    console.log(digits);
    if (Number(digits[i]) === 0) {
      digits.pop();
    } else {
      return Number(digits.join(""));
    }
  }
}

/* ----------------------------------------------------------------------- */

// Kata: Total amount of points

// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
  // loop the games
  //  each game is str; split on ':'
  //    compare game[0] to game[1], pt accordingly

  let total = 0;

  for (let game of games) {
    let us = game.split(":")[0];
    let them = game.split(":")[1];
    if (us > them) {
      total += 3;
    } else if (us === them) {
      total += 1;
    }
  }

  return total;
}

/* ----------------------------------------------------------------------- */

// Kata: Sorted? yes? no? how?

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  // sort asc, compare
  // sort dec, compare
  const copyA = array.slice();
  const copyD = array.slice();

  let asc = copyA.sort((a, b) => a - b);
  let a = false;
  let dec = copyD.sort((a, b) => a - b).reverse();
  let d = false;
  console.log("#", asc, dec);

  for (let i = 0; i < array.length; i++) {
    if (asc[i] === array[i]) {
      a = true;
    } else {
      a = false;
      break;
    }
  }

  if (a) {
    return "yes, ascending";
  }

  for (let i = 0; i < array.length; i++) {
    if (dec[i] === array[i]) {
      d = true;
    } else {
      d = false;
      break;
    }
  }

  if (d) {
    return "yes, descending";
  }

  return "no";
}

/* ----------------------------------------------------------------------- */

// Kata: Give me a Diamond

// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n) {
  // reject if even num or too small
  if (n % 2 === 0 || n < 1) {
    return null;
  }

  let diam = "";

  //   n will equal middle width
  //   each above/below == n - 2
  //     * = n-2
  //     ' ' n - (n-2) - 1 => always at the start

  //   if n === 1, return '*\n'
  //     while n-2 > 0 { ' '.repeat(n-(n-2)-1) + ('*'.repeat(n-2)) + '\n' }

  // Set the middle width
  let stars = "*".repeat(n) + "\n";
  diam = stars;

  for (let m = n - 2; m > 0; m -= 2) {
    let stars1 = "";
    if (m === 1) {
      stars1 = " ".repeat((n - 1) / 2) + "*" + "\n";
    } else {
      stars1 = " ".repeat((n - m) / 2) + "*".repeat(m) + "\n";
    }
    diam = stars1 + diam + stars1;
  }

  return diam;
}
