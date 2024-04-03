console.log("starting ..");

//initialize variables

const distance = 1500;

const firstSpeed = 55;
const secondSpeed= 60;
const thirdSpeed = 75;

const firstSpeedMiles = 30;
const secondSpeedMiles= 28;
const thirdSpeedMiles = 23;

let budget = 175;
let cost = 3;

//get average speed for three speeds
const averageSpeed = (firstSpeed + secondSpeed + thirdSpeed) / 3;

console.log(`Average speed: ${averageSpeed} miles per hour`);

// get average miles per gallon for three speeds
const averagemilesPerGallon = (firstSpeedMiles + secondSpeedMiles + thirdSpeedMiles) / 3;

console.log(`Average Miles Per Gallon : ${averagemilesPerGallon} miles per gallon`);

// How many gallons of fuel will you need for the entire trip?

// for average speed
let gallonNumber= distance/averagemilesPerGallon;
// for first speed
let gallonNumberfor1st = distance/23;
//for second speed
let gallonNumberfor2nd = distance/28;
// for third speed
let gallonNumberfor3rd = distance/30;
console.log(`I will need ${gallonNumber} gallons for entire distance`);
console.log(`I will need ${gallonNumberfor1st} gallons for 75 miles per hour speed`);
console.log(`I will need ${gallonNumberfor2nd} gallons for 60 miles per hour speed`);
console.log(`I will need ${gallonNumberfor3rd} gallons for 55 miles per hour speed`);
// -------------------------------------------------------------
// Will your budget be enough to cover the fuel expense?
//for average speed
let gallonBudget = gallonNumber * cost;
//for first speed
let budgetfor1st = gallonNumberfor1st * cost ;
//for second speed
let budgetfor2nd = gallonNumberfor2nd * cost ;
// for third screen
let budgetfor3rd = gallonNumberfor3rd * cost ;

console.log(`budget : ${gallonBudget} dollar`);
console.log(`budget : ${budgetfor1st} dollar for 75 miles per hour speed`);
console.log(`budget : ${budgetfor2nd} dollar for 60 miles per hour speed`);
console.log(`budget : ${budgetfor3rd} dollar for 55 miles per hour speed`);

let IsEnoughBudget = budget >= gallonBudget;
console.log(`Will my budget ${budget} be enough to cover the fuel expense ? ${IsEnoughBudget} `);
// --------------------------------------------------------------
// How long will the trip take, in hours?
NumberHours = distance/averageSpeed;
console.log(`the trip will take ${NumberHours} hours`);








