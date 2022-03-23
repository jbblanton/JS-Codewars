// Day 5
//*******************************

// Kata: +1 Array

// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

// Pseudocode:
// Grab last element from array
//   if 9, it will become a 0 and second-to-last will increment
//     if second-to-last is 9, see above and continue inward
//   else, increment
// Return array
// Add check for validity of argument:
//   type == array
//   does not include negatives or multi-digit nums

// This is a great opportunity to use recursion...

function upArray(arr) {
  let badArr = arr.filter((ele) => ele > 9 || ele < 0);
  if (badArr.length > 0) {
    return null;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 0) {
      return null;
    } else if (arr[i] >= 0 && arr[i] <= 8) {
      arr[i] += 1;
      return arr;
    } else {
      if (i === 0) {
        arr[i] = 0;
        arr.unshift(1);
        return arr;
      } else {
        arr[i] = 0;
      }
    }
  }
  return null;
}

/* ----------------------------------------------------------------------- */

// Kata:
