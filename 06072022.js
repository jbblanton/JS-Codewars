// Day 31
//*******************************

// Kata: Reversing Words in a String

// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!

function reverse(string) {
  // split string to array
  //  array reverse
  // return joined array

  let words = string.split(" ");
  return words.reverse().join(" ").trim();
}

/* ----------------------------------------------------------------------- */

// Kata: Hello, Name or World!

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given
//   or `name` = ""        => return "Hello, World!"

function hello(name) {
  // format the name
  //    all to lower, first to upper
  // return as a ternary

  if (name) {
    name = name.toLowerCase();
    let x = name.split("")[0];
    let newName = name.replace(x, x.toUpperCase());
    return `Hello, ${newName}!`;
  } else {
    return "Hello, World!";
  }
}

/* ----------------------------------------------------------------------- */

// Kata: Reverse List Order

// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

function reverseList(list) {
  return list.reverse();
}

/* ----------------------------------------------------------------------- */

// Kata: Keep up the hoop

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount(n) {
  return n > 9 ? "Great, now move on to tricks" : "Keep at it until you get it";
}

/* ----------------------------------------------------------------------- */

// Kata:  Grasshopper - Personalized Message

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case  return
// name equals owner 'Hello boss'
// otherwise 'Hello guest'

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

/* ----------------------------------------------------------------------- */

// Kata: Sort array by string length

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength(array) {
  // Return an array containing the same strings, ordered from shortest to longest

  return array.sort((a, b) => a.length - b.length);
}
