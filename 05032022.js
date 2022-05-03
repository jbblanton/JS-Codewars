// Day 18
//*******************************

// Kata: Count by X

// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
  let z = [];
  let i = 1;

  while (i <= n) {
    z.push(i * x);
    i++;
  }

  return z;
}

/* ----------------------------------------------------------------------- */

// Kata: Grasshopper - Check for factor

// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

function checkForFactor(base, factor) {
  return base % factor === 0;
}

/* ----------------------------------------------------------------------- */

// Kata: Beginner Series #4 Cockroach

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
  //Good Luck!

  // km per hr => cm (km * 100 000) per sec (hr * 3 600)
  // 1.08kph => 1.08 * 100 000 / 3 600 = 30

  return Math.floor((s * 100000) / 3600);
}

/* ----------------------------------------------------------------------- */

// Kata: How good are you really?

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  // avg = sumOfGrades / numOfGrades
  // return yourPoints > avg
  // * Add own grade to class array

  classPoints.push(yourPoints);

  let total = classPoints.reduce((sum, num) => (sum += num), 0);
  let avg = total / classPoints.length;

  return yourPoints > avg;
}

/* ----------------------------------------------------------------------- */

// Kata: Simple multiplication

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  // your code........
  return number % 2 === 0 ? number * 8 : number * 9;
}

/* ----------------------------------------------------------------------- */

// Kata: The Feast of Many Beasts

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
  //your function here
  // Get first and last letter of beast
  // Get first and last letter of dish
  // Compare!

  let beastStart = beast[0];
  let beastLast = beast[beast.length - 1];

  let dishStart = dish[0];
  let dishLast = dish[dish.length - 1];

  return beastStart === dishStart && beastLast === dishLast;
}
