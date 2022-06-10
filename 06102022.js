// Day 33
//*******************************

// Kata: Grasshopper - Messi Goals

// Create these three variables and store the appropriate values using the table above:
// laLigaGoals
// championsLeagueGoals
// copaDelReyGoals
// Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.

var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

/* ----------------------------------------------------------------------- */

// Kata:  Welcome!

// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
// The Database
// english: 'Welcome',
// czech: 'Vitejte',
// danish: 'Velkomst',
// dutch: 'Welkom',
// estonian: 'Tere tulemast',
// finnish: 'Tervetuloa',
// flemish: 'Welgekomen',
// french: 'Bienvenue',
// german: 'Willkommen',
// irish: 'Failte',
// italian: 'Benvenuto',
// latvian: 'Gaidits',
// lithuanian: 'Laukiamas',
// polish: 'Witamy',
// spanish: 'Bienvenido',
// swedish: 'Valkommen',
// welsh: 'Croeso'
// Possible invalid inputs include:

// IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
// IP_ADDRESS_NOT_FOUND - ip address not in the database
// IP_ADDRESS_REQUIRED - no ip address was supplied

function greet(language) {
  let welcome = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };

  return welcome.hasOwnProperty(language) ? welcome[language] : "Welcome";
}

/* ----------------------------------------------------------------------- */

// Kata: Holiday VIII - Duty Free

// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers. Please return an integer. Round down.

function dutyFree(normPrice, discount, hol) {
  //  round down == Math.floor()
  //  normPrice * discount(%) == savings
  //  hol / savings => num bottles needed

  let savings = normPrice * (discount * 0.01);
  return Math.floor(hol / savings);
}

/* ----------------------------------------------------------------------- */

// Kata: Fix string case

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s) {
  //  if all upper or all lower, return
  //  note length of s
  //  loop chars, count upper/lower
  //  as soon as count > length, all to that case

  let upper = 0;
  let lower = 0;
  let length = s / 2;

  while (upper < s.length && lower < s.length) {
    for (let char of s) {
      if (char === char.toUpperCase()) {
        upper += 1;
      } else {
        lower += 1;
      }
    }
  }

  if (upper > lower) {
    return s.toUpperCase();
  } else {
    return s.toLowerCase();
  }
}

/* ----------------------------------------------------------------------- */

// Kata:  Grasshopper - Debug sayHello

// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock

function sayHello(name) {
  return `Hello, ${name}`;
}

/* ----------------------------------------------------------------------- */

// Kata: How old will I be in 2099?

// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

// Good Luck!

function calculateAge(bYr, end) {
  // bYr - end => diff
  //  positive? 'you are X years old'
  //  negative? 'you will be born in X year(s)'
  if (bYr === end) {
    return "You were born this very year!";
  }

  let diff = end - bYr;

  if (diff === 1) {
    return "You are 1 year old.";
  } else if (diff > 1) {
    return `You are ${diff} years old.`;
  } else if (diff < -1) {
    return `You will be born in ${Math.abs(diff)} years.`;
  } else if (diff === -1) {
    return "You will be born in 1 year.";
  }
}

/* ----------------------------------------------------------------------- */

// Kata: Thinkful - String Drills: Repeater

// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

// Example: (Input1, Input2 --> Output)
// "a", 5 --> "aaaaa"

function repeater(string, n) {
  return string.repeat(n);
}
