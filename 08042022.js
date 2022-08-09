// Day 50
//*******************************

//Kata: Enumerable Magic #1 - True for All?

// Create a method all which takes two params:

// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

// Example
// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True

function all(arr, fun) {
  // pass each ele of the arr through the fun
  // forEach()
  // empty arr == true

  if (!arr) {
    return true;
  }

  let test = true;

  for (let ele of arr) {
    if (!fun(ele)) {
      test = false;
    }
  }

  return test;
}

//Kata: Bouncing Balls

// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

function bouncingBall(h, bounce, window) {
  // h = height
  // bounce = fraction of height, between 0 & 1
  // window = less than height

  if (h <= 0 || window >= h || bounce <= 0 || bounce >= 1) {
    return -1;
  }

  // count bounces, start at 1 (first fall)
  // while height >= window, keep going
  // height = bounce * height

  let count = 1;
  h *= bounce;

  while (h > window) {
    count += 2;
    h *= bounce;
  }

  return count;
}
