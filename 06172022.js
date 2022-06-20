// Day 38
//*******************************

// Kata: Fundamentals: Return

// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

// Please use the following function names:

// addition = add

// multiply = multiply

// division = divide (both integer and float divisions are accepted)

// modulus = mod

// exponential = exponent

// subtraction = subt

// Note: All math operations will be: a (operation) b

// function add(a,b){
//     return
// }

// function divide(a,b){
//     return
// }

// function multiply(a,b){
//     return
// }

// function mod(a,b){
//     return
// }

// function exponent(a,b){
//     return
// }

// function subt(a,b){
//     return
// }

function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function mod(a, b) {
  return a % b;
}

function exponent(a, b) {
  return a ** b;
}

function subt(a, b) {
  return a - b;
}

/* ----------------------------------------------------------------------- */

// Kata: Grasshopper - Variable Assignment Debug

// Fix the variables assigments so that this code stores the string 'devLab' in the variable name.

// var a == "dev"
// var b == "Lab"

// var name == a + b

var a = "dev";
var b = "Lab";

var name = a + b;

/* ----------------------------------------------------------------------- */

// Kata: How many stairs will Suzuki climb in 20 years?

// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

// 20_year_estimate = one_year_total * 20

// You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

// stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
// Make sure your solution takes into account all of the nesting within the stairs array.

// Each weekday in the stairs array is an array.

// sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
// Your function should return the 20 year estimate of the stairs climbed using the formula above.

function stairsIn20(s) {
  // loop s to access the days
  //  sum each day
  //  sum the daily sums
  // multiply by 20 and return

  let daily = s.map((day) => day.reduce((s, n) => (s += n), 0));
  let year = daily.reduce((s, n) => (s += n), 0);

  return year * 20;
}

/* ----------------------------------------------------------------------- */

// Kata: Sum of Triangular Numbers

// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]
// e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

// Triangular Numbers cannot be negative so return 0 if a negative number is given.

function sumTriangularNumbers(n) {
  // a = 1, a+2, (a+2)+3, (a+2+3)+4, ... => triangular number
  // something more efficient than a big loop?
  // n=4 => 20 (4*5)
  // n=6 => 56 (6*7)
  // n=12 => 364 (12*30)
  // 1+3+6+10+15+21+28+36+45+55+66+78=

  let sum = 0;
  let tn = 0;
  let counter = 1;

  while (n > 0) {
    tn += counter;
    sum += tn;
    counter++;
    n--;
  }

  return sum;
}

/* ----------------------------------------------------------------------- */

// Kata: Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word) {
  // loop the chars
  //  seek a lastIndexOf(char)
  //    if idx are not the same, it's a duplicate
  let wordArr = word.toLowerCase().split("");
  let newWord = "";

  for (let i = 0; i < wordArr.length; i++) {
    let first = wordArr.indexOf(wordArr[i]);
    let last = wordArr.lastIndexOf(wordArr[i]);
    if (first === last) {
      newWord += "(";
    } else {
      newWord += ")";
    }
  }

  return newWord;
}

/* ----------------------------------------------------------------------- */

// Kata: Formatting decimal places #0

// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Example:
// 5.5589 is rounded 5.56
// 3.3424 is rounded 3.34

function twoDecimalPlaces(n) {
  return Number(n.toFixed(2));
}
