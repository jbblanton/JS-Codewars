// Day 51
//*******************************

//Kata: Add Length

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
  // string to array, split on the space
  // loop this array, count length of word and add
  // return

  let wordArr = str.split(" ");

  let newArr = wordArr.map((word) => {
    const len = word.length;
    return `${word} ${len}`;
  });

  return newArr;
}

// ************************************************************************

//Kata: Filling an array (part 1)

// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.

const arr = (N) => {
  let filler = new Array();

  for (let i = 0; i < N; i++) {
    filler.push(i);
  }

  return filler;
};

// ************************************************************************

//Kata: Price of Mangoes

// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
// mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free

function mango(quantity, price) {
  // qty / 3 = num free;
  // times rest by price

  let free = Math.floor(quantity / 3);
  let paid = quantity - free;

  return paid * price;
}

// ************************************************************************

//Kata: Balanced Number (Special Numbers Series #1 )

// Definition
// Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.

// Task
// Given a number, Find if it is Balanced or not .

// Notes
// If the number has an odd number of digits then there is only one middle digit, e.g. 92645 has middle digit 6; otherwise, there are two middle digits , e.g. 1301 has middle digits 3 and 0

// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g 413023 is a balanced number because the left sum and right sum are both 5.

// Number passed is always Positive .

// Return the result as String

function balancedNum(number) {
  // num to string
  // split in half
  //    length / 2, floor
  //      => 5 / 2 = 2.5 => 2
  //      slice(0, half), (half+1) 0,1 - 3,4
  //      => 6 / 2 = 3
  //      slice(0, half-1), (half+1) 0,1 - 4,5
  //  sum as numbers, compare, return

  let numStr = String(number);
  if (numStr.length < 2) {
    return "Balanced";
  }

  let half, left, right;

  if (numStr.length % 2 !== 0) {
    half = Math.floor(numStr.length / 2);
    left = numStr.slice(0, half);
    right = numStr.slice(half + 1);
  } else {
    half = numStr.length / 2;
    left = numStr.slice(0, half - 1);
    right = numStr.slice(half + 1);
  }

  left = left.split("").reduce((sum, num) => (sum += +num), 0);
  right = right.split("").reduce((sum, num) => (sum += +num), 0);

  return left === right ? "Balanced" : "Not Balanced";
}

// ************************************************************************

//Kata: Simple beads count

// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

// @ @@ @ @@ @ @@ @ @@ @ @@ @

// Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0.

function countRedBeads(n) {
  // fewer than 2? return 0
  // minus 1 (to get the spaces between) and then times by 2

  if (n < 2) {
    return 0;
  }

  let gaps = n - 1;
  return gaps * 2;
}
