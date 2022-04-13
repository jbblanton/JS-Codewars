// Day 15
//*******************************

// Kata: Reverse words

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  // split the str into list of words / spaces
  // split the elements
  //  reverse them
  // stitch it back together
  let newWords = [];
  let wordList = str.split(" ");

  for (let word of wordList) {
    let miniWord = word.split("");
    newWords.push(miniWord.reverse().join(""));
  }

  return newWords.join(" ");
}

/* ----------------------------------------------------------------------- */

// Kata: Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let userBMI = weight / (height * height);

  if (userBMI <= 18.5) {
    return "Underweight";
  } else if (userBMI <= 25.0) {
    return "Normal";
  } else if (userBMI <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

/* ----------------------------------------------------------------------- */

// Kata: Area or Perimeter

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(3, 3) --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function (l, w) {
  if (l === w) {
    return l * w;
  }

  return l * 2 + w * 2;
};

/* ----------------------------------------------------------------------- */

// Kata: Transportation on vacation

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  if (d < 3) {
    return d * 40;
  } else if (d >= 3 && d < 7) {
    return d * 40 - 20;
  } else {
    return d * 40 - 50;
  }
}

/* ----------------------------------------------------------------------- */

// Kata: You only need one - Beginner

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
  return a.includes(x);
}
