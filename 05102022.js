// Day 20
//*******************************

// Kata: Sum Arrays

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

// Sum Numbers
function sum(numbers) {
  "use strict";
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
}

/* ----------------------------------------------------------------------- */

// Kata: The Supermarket Queue

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// N.B. You should assume that all the test input will be valid, as specified above.

// P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool

function queueTime(customers, n) {
  // Empty array should return 0 minutes
  if (!customers) {
    return 0;
  }

  // if there's only 1 register, return sum
  if (n === 1) {
    return customers.reduce((sum, num) => (sum += num), 0);
  }

  // len(arr) <= n ? return largest ele
  // len(arr) > n ?
  //    while customers has len
  //      first n ele into own sums
  //      smallest sum gets next ele
  //    return largest sum

  if (customers.length <= n) {
    return Math.max(...customers);
  }

  let queues = {};

  // build the queue, based on n registers
  for (let i = 0; i < n; i++) {
    queues[i] = customers.shift();
  }

  while (customers.length) {
    // find the smallest of those values
    let shortestWait = Math.min(...Object.values(queues));
    let shortestLine = Object.keys(queues).find(
      (key) => queues[key] === shortestWait
    );
    queues[shortestLine] += customers.shift();
  }

  return Math.max(...Object.values(queues));
}

/* ----------------------------------------------------------------------- */

// Kata: All Star Code Challenge #18

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

function strCount(str, letter) {
  if (!str) {
    return 0;
  }

  // str to arr,
  //  filter the arr for letter
  //  return len of filtered arr

  let letters = str.split("");
  let matches = letters.filter((char) => char === letter);
  return matches.length;
}

/* ----------------------------------------------------------------------- */

// Kata: Will there be enough space?

// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

function enough(cap, on, wait) {
  let ppl = on + wait;

  if (ppl <= cap) {
    return 0;
  } else {
    return ppl - cap;
  }
}
