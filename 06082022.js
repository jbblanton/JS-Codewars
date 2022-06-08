// Day 32
//*******************************

// Kata: Rock Paper Scissors!

// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  } else if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "scissors" && p2 === "paper")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

/* ----------------------------------------------------------------------- */

// Kata: Chain me

// Write a generic function chainer
// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

// function add(num) {
//   return num + 1;
// }

// function mult(num) {
//   return num * 30;
// }

// chain(2, [add, mult]);   // returns 90;

function chain(input, fs) {
  let newInput = input;

  for (let f = 0; f < fs.length; f++) {
    newInput = fs[f](newInput);
  }

  return newInput;
}

/* ----------------------------------------------------------------------- */

// Kata:  Training JS #7: if..else and ternary operator

// Task:
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

// number  price (cents)
// n < 5 100
// n >= 5 and n < 10 95
// n >= 10 90
// You can use if..else or ternary operator to complete it.

function saleHotdogs(n) {
  return n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90;
}

/* ----------------------------------------------------------------------- */

// Kata: Find Maximum and Minimum Values of a List

// DESCRIPTION:
// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

/* ----------------------------------------------------------------------- */

// Kata: Pre-FizzBuzz Workout #1

// DESCRIPTION:
// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

function preFizz(n) {
  let numArr = [];

  for (let i = 1; i <= n; i++) {
    numArr.push(i);
  }

  return numArr;
}

/* ----------------------------------------------------------------------- */

// Kata: Grasshopper - Function syntax debugging

// Grasshopper - Function syntax debugging
// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

// function main [verb, noun]
//   return verb + noun
// }

function main(verb, noun) {
  return verb + noun;
}
