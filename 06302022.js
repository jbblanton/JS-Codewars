// Day 45
//*******************************

// Kata: Encrypt this!

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function (text) {
  // split str into words
  //  loop the words
  //    arr[0] => ascii
  //    .charCodeAt() => idx, returns code
  // arr[1] / arr[-1] to swap
  //    only if word > 2 char
  // push the above into a new arr and return joined

  let arr = text.split(" ");
  let code = [];

  // each word in string
  for (let word of arr) {
    let woo = String(word.charCodeAt(0));
    if (word.length === 1) {
      code.push(woo);
    } else if (word.length === 2) {
      woo += word[1];
      code.push(woo);
    } else {
      let two = word[1];
      let last = word[word.length - 1];
      let middle = word.substring(2, word.length - 1);
      woo += last + middle + two;
      code.push(woo);
    }
  }

  return code.join(" ");
};

/* ----------------------------------------------------------------------- */

// Kata: A wolf in sheep's clothing

// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

function warnTheSheep(queue) {
  // reverse the array so it makes sense
  // loop, find wolf, n = wolf (with a start of 0)

  queue = queue.reverse();
  let wolf = queue.indexOf("wolf");

  return wolf === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${wolf}! You are about to be eaten by a wolf!`;
}
