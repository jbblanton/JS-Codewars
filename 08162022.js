// Day 54
//*******************************

//Kata: altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"

String.prototype.toAlternatingCase = function () {
  let alt = "";
  const lowers = "abcdefghijklmnopqrstuvwxyz".split("");
  const str = this;

  for (let char of str) {
    if (lowers.includes(char)) {
      alt += char.toUpperCase();
    } else {
      alt += char.toLowerCase();
    }
  }

  return alt;
};

// **************************************************

//Kata: Training JS #4: Basic data types--Array

// Task
// I've written five function, each function receives a parameter: arr(an array), you should code something with arr.

//     1. getLength(arr)    should return length of arr
//     2. getFirst(arr)     should return the first element of arr
//     3. getLast(arr)      should return the last element of arr
//     4. pushElement(arr)  should push an element to arr, and then return arr
//     5. popElement(arr)   should pop an element from arr, and then return arr

function getLength(arr) {
  //return length of arr
  return arr.length;
}
function getFirst(arr) {
  //return the first element of arr
  return arr[0];
}
function getLast(arr) {
  //return the last element of arr
  let last = getLength(arr) - 1;
  return arr[last];
}
function pushElement(arr) {
  var el = 1;
  //push el to arr
  arr.push(el);

  return arr;
}
function popElement(arr) {
  //pop an element from arr
  arr.pop();

  return arr;
}

// **************************************************

//Kata: Palindrome Strings

// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

// Examples(Input ==> Output)
// "anna"   ==> true
// "walter" ==> false
// 12321    ==> true
// 123456   ==> false

function isPalindrome(line) {
  // arg to string
  // split to arr, reverse, rejoin
  // orig equals new?

  let reversed = String(line).split("").reverse().join("");

  return line == reversed;
}

// **************************************************

//Kata:  Grasshopper - Order of operations

// You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but in stead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.

function orderOperations() {
  return (2 + 2) * (2 + 2) * 2;
}
