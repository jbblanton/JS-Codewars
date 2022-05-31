// Day 26
//*******************************

// Kata: Super Duper Easy

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x){
  
  return typeof(x) === 'string' ? 'Error' : x * 50 + 6 




/* ----------------------------------------------------------------------- */

// Kata: Maximum Length Difference

// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

function mxdiflg(a1, a2) {
    // Check for empty arrs; return -1
    // find the longest and shortest of each
    // filter? sort?
    // list of lengths, then sort
  if (a1.length === 0 || a2.length === 0) {
    return -1
  }
  
  let a1Length = a1.map((ele) => ele = ele.length).sort((a,b) => a - b)
  let a2Length = a2.map((ele) => ele = ele.length).sort((a,b) => a - b)
  console.log(a1Length, a2Length)
  
  let one = Math.abs(a1Length[0] - a2Length[a2Length.length - 1])
  let two = Math.abs(a2Length[0] - a1Length[a1Length.length - 1])
  
  return one > two ? one : two 
}


/* ----------------------------------------------------------------------- */

// Kata: Training JS #1: create your first JS function and print "Hello World!"

Task
Please refer to two example above and write your first JS function.

// mission 1:

// use keyword function to define your function, function name should be helloWorld(don't forget the () and {})

// mission 2:

// use keyword var (or let or const) to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).

// mission 3:

// type the console.log() in the next line(don't forget to put the str in the brackets).

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

//refer to the example and write your first JS function
function helloWorld() {
  const str = 'Hello World!'
  console.log(str)
}


/* ----------------------------------------------------------------------- */

// Kata: Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
  return x.reduce((sum, num) => sum += Number(num), 0)
}

/* ----------------------------------------------------------------------- */

// Kata: Sum The Strings

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

function sumStr(a,b) {
  return String(Number(a) + Number(b)) 
}