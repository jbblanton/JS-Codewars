// Day 2
//*******************************

// Kata: Flatten and sort array

// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

"use strict";

function flattenAndSort(array) {
  let flatArray = new Array();

  // Start by flattening it
  for (let ele of array) {
    if (Array.isArray(ele)) {
      for (let el of ele) {
        flatArray.push(el);
      }
    } else {
      flatArray.push(ele);
    }
  }

  // Then give it a sort
  numberSort = function (a, b) {
    return a - b;
  };

  flatArray = flatArray.sort(numberSort);

  return flatArray;
}

/* ----------------------------------------------------------------------- */

// Kata: Odd or Even?

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
  if (!array || array === [0]) {
    return "even";
  }

  const initial = 0;
  const sum = array.reduce((a, b) => a + b, initial);

  return sum % 2 === 0 ? "even" : "odd";
}

/* ----------------------------------------------------------------------- */

// Kata: Find the middle element

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme(triplet) {
  // make new array, sort orig contents
  // use newArray[1] to find indexOf in orig array

  let newList = [...triplet].sort(function (a, b) {
    return a - b;
  });
  return triplet.indexOf(newList[1]);
}
