// Day 37
//*******************************

// Kata: Sum of pairs

// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

function sumPairs(ints, s) {
  // absolute value, to allow for neg nums in arr and as s
  // return null if no options

  let idx1 = 0;
  let idx2 = 0;
  let sum = [];
  // first ele < s; then indexOf(s-ele)
  //    store these idx for comparison
  // do at least 1 more pair (same as above)
  //    if 2nd idx < 2nd of first pair && 1st idx !== 2nd idx; return
  // filter unique values into a set? Loop through those?

  let abbr = new Set(ints);
  abbr = new Array(...abbr.values());

  for (let h = 0; h < abbr.length; h++) {
    // work from set
    //     for (let i = 0; i < ints.length; i++) {
    let ai = ints.indexOf(abbr[h]); // idx of val in ints
    if (ints[ai] <= Math.abs(s)) {
      let first = ints[ai]; // value
      let next = ints.indexOf(s - first); // idx
      if (next > ai && next > 0) {
        if (idx2 === 0) {
          // set initial val
          idx1 = ai;
          idx2 = next;
        } else if (idx2 <= next) {
          // not initial, but earlier than what was found
          return [ints[idx1], ints[idx2]];
        } else {
          idx1 = ai;
          idx2 = next;
        }
      } else if (ai === ints.length - 1 && !idx1 && !idx2) {
        idx1 = next;
        idx2 = ai; // reverse order
      } else {
        // get the next option for idx2
        next = ints.lastIndexOf(s - first);
        if (next > ai && next > 0) {
          if (idx2 === 0) {
            // set initial val
            idx1 = ai;
            idx2 = next;
          } else if (idx2 <= next) {
            // not initial, but earlier than what was found
            return [ints[idx1], ints[idx2]];
          }
        }
      }
    } else if (ai === ints.length - 1) {
      // only val < s is the last
      let first = ints[ai]; // value
      let next = ints.indexOf(s - first);
      if (next >= 0 && next !== ai) {
        // next not -1, not a duplicate
        return [ints[idx1], ints[idx2]];
      }
    }
  }
  //     }

  if (idx1 === idx2) {
    return undefined;
  }
  if (typeof ints[idx1] === "number" && typeof ints[idx2] === "number") {
    return [ints[idx1], ints[idx2]];
  } else {
    return undefined;
  }
}

/* ----------------------------------------------------------------------- */

// Kata: Help the bookseller !

// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

// For example an extract of a stocklist could be:

// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// or
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
// You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

// M = {"A", "B", "C", "W"}
// or
// M = ["A", "B", "C", "W"] or ...
// and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

// For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket a list of pairs):

// (A : 20) - (B : 114) - (C : 50) - (W : 0)
// where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

// If L or M are empty return string is "" (Clojure and Racket should return an empty array/list instead).

// Note:
// In the result codes and their values are in the same order as in M.

function stockList(listOfArt, listOfCat) {
  // loop the Cats
  //  if ele in Art startsWith letter
  //    sum the qty
  // hashmap => Cat: sum
  // format return

  if (!listOfArt.length || !listOfCat.length) {
    return "";
  }
  console.log(listOfArt, listOfCat);

  let books = {};

  for (let cat of listOfCat) {
    books[cat] = 0;
    for (let art of listOfArt) {
      if (art.startsWith(cat)) {
        let qty = Number(art.split(" ")[1]);
        books[cat] += qty;
      }
    }
  }

  //   if (books.values())
  let tally = [];
  for (let book in books) {
    tally.push(`(${book} : ${books[book]})`);
  }

  return tally.join(" - ");
}
