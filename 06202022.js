// Day 39
//*******************************

// Kata: JavaScript Array Filter

// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray) {
  return numbersArray.filter((num) => num % 2 === 0);
}

/* ----------------------------------------------------------------------- */

// Kata: Regular Ball Super Ball

// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"

class Ball {
  constructor(type = "regular") {
    this.ballType = type;
  }

  ballType() {
    console.log(this.ballType);
  }
}

/* ----------------------------------------------------------------------- */

// Kata: Delete occurrences of an element if it occurs more than n times

// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr, n) {
  // .splice() out the repeats
  // hashmap the frequency?
  //    once val == n, remove remaining?

  let nums = {};

  // make the hashmap {num: freq, num2: freq2}
  for (let i = 0; i < arr.length; i++) {
    nums[arr[i]] ? (nums[arr[i]] += 1) : (nums[arr[i]] = 1);
  }

  // make a list of nums where freq > n
  let freq = Object.keys(nums).filter((ele) => nums[ele] > n);

  for (let j = 0; j < freq.length; j++) {
    let rem = nums[freq[j]];
    while (rem > n) {
      let lio = arr.lastIndexOf(freq[j]);
      arr.splice(lio, 1);
      rem -= 1;
    }
  }

  return arr;
}

/* ----------------------------------------------------------------------- */

// Kata: Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

// Description:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"

function remove(string) {
  let str2 = "";

  let arr = string.split("!");
  console.log(arr);
  for (let bang of arr) {
    if (bang !== "!") {
      str2 += bang;
    }
  }

  return str2 + "!";
}

/* ----------------------------------------------------------------------- */

// Kata: Multiplication table

// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function (size) {
  // make array with $size nested arrays, each of $size
  // loop big arr
  //    1st = 1...n
  //    2nd = 2* 1...n
  //    3rd = 3* 1...n

  let table = [];

  for (let i = 1; i <= size; i++) {
    // i=1, i=2, i=3
    let row = [];
    for (let j = 1; j <= size; j++) {
      // j=1, j=2, j=3
      row.push(i * j); // [1,2,3]
    }
    table.push(row);
  }

  return table;
};
