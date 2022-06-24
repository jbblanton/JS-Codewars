// Day 42
//*******************************

// Kata: Training JS #8: Conditional statement--switch

// Task
// Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).

// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+
// little tips: Use default for most of the cases can reduce your work.

function howManydays(month) {
  var days;
  switch (month) {
    case 2:
      days = 28;
      break;
    case 4:
      days = 30;
      break;
    case 6:
      days = 30;
      break;
    case 9:
      days = 30;
      break;
    case 11:
      days = 30;
      break;
    default:
      days = 31;
      break;
  }
  return days;
}

/* ----------------------------------------------------------------------- */

// Kata: No Loops 2 - You only need one

// *** No Loops Allowed ***

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

function check(a, x) {
  return a.includes(x);
}

/* ----------------------------------------------------------------------- */

// Kata: Bumps in the Road

// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

function bump(x) {
  let bumps = x.split("").filter((ele) => ele === "n").length;
  return bumps <= 15 ? "Woohoo!" : "Car Dead";
}

/* ----------------------------------------------------------------------- */

// Kata: No oddities here

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

function noOdds(values) {
  return values.filter((ele) => ele % 2 === 0);
}

/* ----------------------------------------------------------------------- */

// Kata: Sum of angles

// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

function angle(n) {
  //   The interior angles in a regular polygon are always equal to each other.
  //   Therefore, to find the sum of the interior angles of a polygon, we use the formula:
  //    Sum of interior angles = (n − 2) × 180° where 'n' = the number of sides of a polygon.
  return (n - 2) * 180;
}

/* ----------------------------------------------------------------------- */

// Kata: Enumerable Magic #3 - Does My List Include This?

// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item) {
  return arr.includes(item);
}

/* ----------------------------------------------------------------------- */

// Kata: Form The Minimum

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7})  ==> return (579)
// Explanation:
// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)

function minValue(values) {
  let unique = new Set(values.sort());

  let num = "";

  for (let i of unique) {
    num += i;
  }

  return Number(num);
}

/* ----------------------------------------------------------------------- */

// Kata: Greet Me

// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function (name) {
  let person = name.toLowerCase().split("");
  person[0] = person[0].toUpperCase();
  person = person.join("");

  return `Hello ${person}!`;
};
