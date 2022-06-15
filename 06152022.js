// Day 36
//*******************************

// Kata: Remove duplicates from list

// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
  // len = 1; return
  // loop
  //   moving l to r
  //   find lastIndexOf
  //    not the same? remove one
  // empty arr
  //    loop; push [0]; new arr includes ele? skip : push

  if (a.length < 2) {
    return a;
  }

  let unique = [];
  unique.push(a[0]);

  for (let i = 1; i < a.length; i++) {
    if (!unique.includes(a[i])) {
      unique.push(a[i]);
    }
  }

  return unique;
}

/* ----------------------------------------------------------------------- */

// Kata: Fix your code before the garden dies!

// You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

// Your task is to debug the code before your plants die!
// function rainAmount(mm){
//     if (rainAmount = 40) {
//          return "You need to give your plant " + {rainAmount - 40} + " mm of water"
//     };
//     if else {
//          return "Your plant has had more than enough water for today!"
//     };
// }

function rainAmount(mm) {
  if (mm < 40) {
    return `You need to give your plant ${40 - mm}mm of water`;
  } else {
    return "Your plant has had more than enough water for today!";
  }
}

/* ----------------------------------------------------------------------- */

// Kata: Alternate capitalization

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s) {
  s = s.split("");
  let s1 = "";
  let s2 = "";

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      s1 += s[i].toUpperCase();
      s2 += s[i];
    } else {
      s2 += s[i].toUpperCase();
      s1 += s[i];
    }
  }

  return [s1, s2];
}
