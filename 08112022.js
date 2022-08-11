// Day 53
//*******************************

//Kata: Rotate for a Max

// Let us begin with an example:

// Take a number: 56789. Rotate left, you get 67895.

// Keep the first digit in place and rotate left the other digits: 68957.

// Keep the first two digits in place and rotate the other ones: 68579.

// Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.

// You have the following sequence of numbers:

// 56789 -> 67895 -> 68957 -> 68579 -> 68597

// and you must return the greatest: 68957.

// Task
// Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.

function maxRot(n) {
  // store new nums in arr, return Max(arr)
  // num => str => arr
  //  loop, move arr[i] to the end, join, num, push

  let arr = [n];
  let numbers = String(n).split("");

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    numbers.splice(i, 1);
    numbers.push(num);
    arr.push(Number(numbers.join("")));
  }

  return Math.max(...arr);
}

// **************************************************

//Kata:  Printing Array elements with Comma delimiters

// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"
function printArray(array) {
  return array.join(",");
}

// **************************************************
