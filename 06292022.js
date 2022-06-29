// Day 44
//*******************************

// Kata: Duck Duck Goose

// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name

function duckDuckGoose(players, goose) {
  // goose > players.length? subtract
  // mod?
  const len = players.length;
  if (len >= goose) {
    return players[goose - 1].name;
  } else {
    goose -= len;
    return duckDuckGoose(players, goose);
  }
}

/* ----------------------------------------------------------------------- */

// Kata: Deodorant Evaporator

// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.

// Example:
// evaporator(10, 10, 5) -> 29
// Note:
// Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.

function evaporator(content, evap_per_day, threshold) {
  // counter for days
  //  while loop that increments counter
  //    content -= (content * evap)

  let days = 0;
  // threshold is the percentage of original qty
  const min = (content * threshold) / 100;

  while (content > min) {
    content -= content * (evap_per_day * 0.01);
    days++;
  }

  return days;
}

/* ----------------------------------------------------------------------- */

// Kata:  Thinkful - Logic Drills: Traffic light

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow";
    case "yellow":
      return "red";
    case "red":
      return "green";
  }
}

/* ----------------------------------------------------------------------- */

// Kata: The Vowel Code

// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function encode(string) {
  const vow = {
    a: "1",
    e: "2",
    i: "3",
    o: "4",
    u: "5",
  };
  let code = "";

  for (let char of string) {
    if (vow[char]) {
      code += vow[char];
    } else {
      code += char;
    }
  }

  return code;
}

function decode(string) {
  const vow = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u",
  };

  let plain = "";

  for (let char of string) {
    if (vow[char]) {
      plain += vow[char];
    } else {
      plain += char;
    }
  }

  return plain;
}
