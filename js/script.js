console.log("running scripts...");

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;
// if you want to let the user to enter the numbers
// let n1 = prompt("Enter first number");
// let n2 = prompt("Enter second number");
// let n3 = prompt("Enter third number");
// let n4 = prompt("Enter fourth number");



//Check if all numbers are divisible by 5. Cache the result in a variable.
let firstDividedBy5 = n1 % 5 === 0
let secondDividedBy5 = n2 % 5 === 0
let thirdDividedBy5 = n3 % 5 === 0
let fourthDividedBy5 = n4 % 5 === 0

let allDividedBy5 = firstDividedBy5 && secondDividedBy5 && thirdDividedBy5 && fourthDividedBy5;

console.log("All numbers are divided by 5 :" + allDividedBy5);
//------------------------------------------------------------
//Check if the first number is larger than the last. Cache the result in a variable.
let firstLarger = n1 > n4;

console.log("Is the first number larger than the last?" + allDividedBy5);

//-----------------------------------------------------------
// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.

let arthChain = ((n2-n1)*n3)%n4;
console.log(`Result of the arithmetic chain: ${arthChain}`);

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
const allLess25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(`Are all numbers less or equall 25 ? ${allLess25}`);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
const isValid = isSum50 && isTwoOdd && allLess25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);