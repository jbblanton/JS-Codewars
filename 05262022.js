// Day 25
//*******************************

// Kata: Extract the domain name from a URL

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
  let splitArr = url.split(".");

  if (splitArr.length > 1) {
    if (splitArr[0].includes("//") && splitArr[0].includes("www")) {
      return splitArr[1];
    } else if (splitArr[0].includes("//")) {
      let newSplit = splitArr[0].split("//");
      return newSplit[1];
    } else if (splitArr[0] === "www") {
      return splitArr[1];
    } else {
      return splitArr[0];
    }
  }
}

/* ----------------------------------------------------------------------- */

// Kata: Function 2 - squaring an argument

// Now you have to write a function that takes an argument and returns the square of it.

function square(num) {
  return num * num;
}

/* ----------------------------------------------------------------------- */

// Kata:  Summing a number's digits

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
  // abs val of num to string to arr
  // reduce arr

  let numArr = String(Math.abs(number)).split("");
  return numArr.reduce((sum, num) => (sum += Number(num)), 0);
}

/* ----------------------------------------------------------------------- */

// Kata:  Grasshopper - Messi goals function

// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
