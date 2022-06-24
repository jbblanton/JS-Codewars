// Day 41
//*******************************

// Kata: Rainfall

// dataand data1 are two strings with rainfall records of a few cities for months from January to December. The records of towns are separated by \n. The name of each town is followed by :.

// data and towns can be seen in "Your Test Cases:".

// Task:
// function: mean(town, strng) should return the average of rainfall for the city town and the strng data or data1 (In R and Julia this function is called avg).
// function: variance(town, strng) should return the variance of rainfall for the city town and the strng data or data1.
// Examples:
// mean("London", data), 51.19(9999999999996)
// variance("London", data), 57.42(833333333374)
// Notes:
// if functions mean or variance have as parameter town a city which has no records return -1 or -1.0 (depending on the language)

// Don't truncate or round: the tests will pass if abs(your_result - test_result) <= 1e-2 or abs((your_result - test_result) / test_result) <= 1e-6 depending on the language.

// Shell tests only variance

// A ref: http://www.mathsisfun.com/data/standard-deviation.html

// data and data1 (can be named d0 and d1 depending on the language; see "Sample Tests:") are adapted from: http://www.worldclimate.com

function mean(town, strng) {
  if (!strng) {
    return -1;
  }
  const cityData = strng.split("\n").filter((ele) => ele.includes(town))[0];
  if (!cityData) {
    return -1;
  }
  const city = cityData.split(":")[0];
  if (city !== town) {
    return -1;
  }
  const data = cityData.split(":")[1];
  if (!data) {
    return -1;
  }
  console.log("M", town, data);

  let total = 0;
  let count = 0;

  let rainDates = data.split(",");
  for (let month of rainDates) {
    let qty = Number(month.split(" ")[1]);
    total += qty;
    count++;
  }

  return total / count;
}

function variance(town, strng) {
  if (!strng) {
    return -1;
  }

  const townMean = mean(town, strng);

  const cityData = strng.split("\n").filter((ele) => ele.includes(town))[0];
  if (!cityData) {
    return -1;
  }
  const city = cityData.split(":")[0];
  if (city !== town) {
    return -1;
  }
  const data = cityData.split(":")[1];
  if (!data) {
    return -1;
  }
  console.log("V", town, data);

  let totals = [];
  let count = 0;

  let rainDates = data.split(",");
  for (let month of rainDates) {
    let qty = Number(month.split(" ")[1]);
    totals.push(qty);
    count++;
  }

  let total = totals
    .map((ele) => (townMean - ele) ** 2)
    .reduce((s, n) => (s += n), 0);

  return total / count;
}

// split on '\n' to get town data
//    filter the value with the town
// split on ',' to get each date+rain
//    loop this array
//      split on ' ' to get each value
//      add the values to a total, and count the num (12?)
// mean = return avgRain

// variance =
//  get the mean()
//   push each value into an array
//    loop this array
//      To calculate the Variance, take each difference from the mean, square it,
//      and then average the result:

/* ----------------------------------------------------------------------- */

// Kata: Check the exam

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

function checkExam(testKey, studentAnswers) {
  // keep a score
  // loop the test key
  //    loop the student answers
  //      compare and tally points
  let total = 0;

  for (let i = 0; i < studentAnswers.length; i++) {
    if (testKey[i] === studentAnswers[i]) {
      total += 4;
    } else if (!studentAnswers[i]) {
      total += 0;
    } else {
      total -= 1;
    }
  }

  return total > 0 ? total : 0;
}

/* ----------------------------------------------------------------------- */

// Kata:

// +Savings each month
// lose => carVal -= carVal * 1.5%
// every 2 months => carVal -= carVal * (1.5% + .5%)

// return [how many months?, how much left over?]
1, 1970 + 1000 < 8000;

let months = 1;
let oldC = 1970;
let savings = 1000;
let newC = 8000;
let perc = 1.5;

while (oldC + savings < newC) {
  // 2000 < 8000
  if (months !== 0 && months % 2 === 0) {
    months++; //
    savings += savingperMonth; //
    perc += 0.5;
    const loss = oldC * perc;
    oldC -= loss;
  } else {
    months++;
    savings += savingperMonth;
    const loss = oldC * perc;
    oldC -= loss;
  }
}
