// Day 19
//*******************************

// Kata: The highest profit wins!

// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

function minMax(arr) {
  let minMax = [];

  minMax.push(Math.min(...arr));
  minMax.push(Math.max(...arr));

  return minMax;
}

/* ----------------------------------------------------------------------- */

// Kata: Grasshopper - Grade book

// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score Letter Grade
// 90 <= score <= 100  'A'
// 80 <= score < 90  'B'
// 70 <= score < 80  'C'
// 60 <= score < 70  'D'
// 0 <= score < 60 'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade(s1, s2, s3) {
  let avg = (s1 + s2 + s3) / 3;

  if (avg >= 90) {
    return "A";
  } else if (avg >= 80) {
    return "B";
  } else if (avg >= 70) {
    return "C";
  } else if (avg >= 60) {
    return "D";
  } else {
    return "F";
  }
}

/* ----------------------------------------------------------------------- */

// Kata: Sort and Star

// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
  let first = s.sort();

  return first[0].split("").join("***");
}

/* ----------------------------------------------------------------------- */

// Kata: Title Case

// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// ###Example

// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox

function titleCase(title, minorWords) {
  if (!title) {
    return title;
  }

  let newTitle = [];
  let minorSplit = [];
  if (minorWords) {
    minorSplit = minorWords.toLowerCase().split(" ");
  }

  // Set to all to Lower case and split into words
  let titleArr = title.toLowerCase().split(" ");

  // Get the first word to title case, no matter what
  let first = titleArr[0].replace(titleArr[0][0], titleArr[0][0].toUpperCase());
  newTitle.push(first);

  for (let i = 1; i < titleArr.length; i++) {
    if (minorWords) {
      if (minorSplit.includes(titleArr[i])) {
        newTitle.push(titleArr[i]);
      } else {
        let word = titleArr[i].replace(
          titleArr[i][0],
          titleArr[i][0].toUpperCase()
        );
        newTitle.push(word);
      }
    } else {
      let word = titleArr[i].replace(
        titleArr[i][0],
        titleArr[i][0].toUpperCase()
      );
      newTitle.push(word);
    }
  }

  return newTitle.join(" ");
}

/* ----------------------------------------------------------------------- */

// Kata: Replace With Alphabet Position

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let cipher = "";

  for (let char of text.toLowerCase()) {
    if (alpha.includes(char)) {
      cipher += alpha.indexOf(char) + 1 + " ";
    }
  }
  return cipher.trim();
}
