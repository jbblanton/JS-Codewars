// Day 16
//*******************************

// Kata: Calculate average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
  if (array.length === 0) {
    return 0;
  }

  let sum = array.reduce((sum, num) => (sum += num), 0);

  return sum / array.length;
}

/* ----------------------------------------------------------------------- */

// Kata: DNA to RNA Conversion

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let dnaList = dna.split("");
  let rnaList = [];

  for (let d of dnaList) {
    if (d === "T") {
      rnaList.push("U");
    } else {
      rnaList.push(d);
    }
  }
  return rnaList.join("");
}

/* ----------------------------------------------------------------------- */

// Kata: Find the next perfect square!

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square
