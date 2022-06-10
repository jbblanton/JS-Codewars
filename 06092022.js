// Day 32
//*******************************

// Kata: Training JS #2: Basic data types--Number

// Task
// I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.

// var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
// function equal1(){
//   var a=v1   
//   var b=v1   
//   return a+b;
// }
// //Please refer to the example above to complete the following functions
// function equal2(){
//   var a=   //set number value to a
//   var b=   //set number value to b
//   return a-b;
// }
// function equal3(){
//   var a=   //set number value to a
//   var b=   //set number value to b
//   return a*b;
// }
// function equal4(){
//   var a=   //set number value to a
//   var b=   //set number value to b
//   return a/b;
// }
// function equal5(){
//   var a=   //set number value to a
//   var b=   //set number value to b
//   return a%b;
// }

var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a=v1   
  var b=v1   
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a=v6
  var b=v3
  return a-b;
}
function equal3(){
  var a=v1
  var b=v5
  return a*b;
}
function equal4(){
  var a=v4   
  var b=v5   
  return a/b;
}
function equal5(){
  var a=v6  
  var b=v3   
  return a%b;
}

/* ----------------------------------------------------------------------- */

// Kata:  Grasshopper - Terminal game combat function

// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
  return health - damage < 0 ? 0 : health - damage
}

/* ----------------------------------------------------------------------- */

// Kata: Multiple of index

// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

function multipleOfIndex(array) {
  // .filter()
  // ele, idx => ele % idx === 0
  
  let multiples = array.filter((ele, idx) => ele % idx === 0)
  return multiples


/* ----------------------------------------------------------------------- */

// Kata: Remove anchor from URL

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
  // split on '#' and return 0th ele
  
  return url.split('#')[0]
}

/* ----------------------------------------------------------------------- */

// Kata: Grasshopper - Terminal game move function

// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

function move (position, roll) {
  // position = starting point
  //  roll = 2 * distance move
  // return position + (2*roll)
  
  return position + 2 * roll
}

/* ----------------------------------------------------------------------- */

// Kata: A Rule of Divisibility by 13

// From Wikipedia:

// "A divisibility rule is a shorthand way of determining whether a given integer is divisible by a fixed divisor without performing the division, usually by examining its digits."

// When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:

// 1, 10, 9, 12, 3, 4 because:

// 10 ^ 0 ->  1 (mod 13)
// 10 ^ 1 -> 10 (mod 13)
// 10 ^ 2 ->  9 (mod 13)
// 10 ^ 3 -> 12 (mod 13)
// 10 ^ 4 ->  3 (mod 13)
// 10 ^ 5 ->  4 (mod 13)
// (For "mod" you can see: https://en.wikipedia.org/wiki/Modulo_operation)

// Then the whole pattern repeats. Hence the following method:

// Multiply

// the right most digit of the number with the left most number in the sequence shown above,
// the second right most digit with the second left most digit of the number in the sequence.
// The cycle goes on and you sum all these products. Repeat this process until the sequence of sums is stationary.

// Example:
// What is the remainder when 1234567 is divided by 13?

// 7      6     5      4     3     2     1  (digits of 1234567 from the right)
// ×      ×     ×      ×     ×     ×     ×  (multiplication)
// 1     10     9     12     3     4     1  (the repeating sequence)
// Therefore following the method we get:

// 7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178

// We repeat the process with the number 178:

// 8x1 + 7x10 + 1x9 = 87

// and again with 87:

// 7x1 + 8x10 = 87

// From now on the sequence is stationary (we always get 87) and the remainder of 1234567 by 13 is the same as the remainder of 87 by 13 ( i.e 9).

// Task:
// Call thirt the function which processes this sequence of operations on an integer n (>=0). thirt will return the stationary number.

// thirt(1234567) calculates 178, then 87, then 87 and returns 87.

// thirt(321) calculates 48, 48 and returns 48


function thirt(n) {
    // num to str, then split, to access the digits
    // reverse and loop, or loop from r-l
    //    multiply against the 1 10 9 12 3 4 1 seq.
    //      ? what if num is longer than seq?
    //    sum the results
    //  repeat until stuck
    //    set a variable; if sum == variable, return
    //    while sum !== variable (do mults)
  
  let seq = [1,10,9,12,3,4] //grab same idx from both
  let digits = String(n).split('').reverse();
  let currSum = 0;
  let lastSum = 1;
  
  if (digits.length > seq.length) {
    seq = seq.concat(seq)
  }
  console.log(seq)
  while (currSum != lastSum) {
    console.log(digits)
    for (let i = digits.length - 1; i > -1; i--) {
      currSum += (digits[i] * seq[i])
      console.log(currSum)
    }
    console.log(currSum, lastSum)
    if (currSum !== lastSum) {
      lastSum = currSum
      digits = String(currSum).split('').reverse()
      currSum = 0
    } else {
      console.log('exit!')
      return lastSum
    }
    
  }

 /* ----------------------------------------------------------------------- */

// Kata:  Welcome to the City

// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

 /* ----------------------------------------------------------------------- */

// Kata:  Reversed sequence

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  let rev = [];
  
  for (let i = n; i > 0; i--) {
   rev.push(i) 
  }
  
  return rev
};