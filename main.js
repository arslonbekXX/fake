/** SWAP */
// let a = 30;
// let b = 40;

// // a = a + b; // a = 70
// // b = a - b; // b = 30 -> a
// // a = a - b; // a = 40 -> b

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

/** FizzBuzz */

let num = 15;
let result = "";

if (num % 3 == 0) result += "Fizz";
if (num % 5 == 0) result += "Buzz";

console.log(result);

/**
 * num % 3 == 0 -> "Fizz"
 * num % 5 == 0 -> "Buzz"
 * num % 15 == 0 -> "FizzBuzz"
 */
