// Day 24
//*******************************

// Kata: Bingo ( Or Not )

// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

function bingo(a) {
  const bingoNums = [2, 7, 9, 14, 15];

  let result = bingoNums.every((i) => a.includes(i));

  if (result) {
    return "WIN";
  } else {
    return "LOSE";
  }
}

/* ----------------------------------------------------------------------- */

// Kata: Can we divide it?

// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

// A few cases:

// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

function isDivideBy(number, a, b) {
  return number % a === 0 && number % b === 0;
}

// end
