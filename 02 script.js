///////////////////////////
// STRİCT MODE

// Strict Mode is a special mode that we can activate in JavaScript,
// it makes it easier for us to write a code
// it avoids bugs
// strict mode forbids us to do certain things
// it will create visible errors, without strict mode JS would fail silently

// with this we activated strict mode
"use strict";
let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("you can drive");

// const if = true;
// const interface = "Audio";
// const private = 534;

///////////////////////////
// FUNCTİONS
// A function can hold one or more lines of code

function logger() {
  console.log("My name is Muhterem");
}

logger();
logger();
logger();

function add(x, y) {
  let result = x + y;
  return result;
}
// or;
function add(x, y) {
  return x + y;
}
let answer = add(3, 5);
console.log(answer);
// do the one bellow if you dont want to store
console.log(add(12, 4));

function subtract(x, y) {
  return x - y;
}

console.log(subtract(2, 3));

// '%' is remainder operator
function isEven(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(isEven(22));

function isValidEmail(email) {
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidEmail("muho@gmail.com"));
console.log(isValidEmail("MuhtarMuho.com"));

//
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
// use return when u want a function to return a value

fruitProcessor(5, 0);
// apples will become 5 and oranges will be 0

const appleJuice = fruitProcessor(6, 0);
console.log(appleJuice);
console.log(fruitProcessor(4, 7));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function declaration
// You can call a function declaration before you define it
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2024 - birthYear;
}
console.log(age1);

// Function expression

const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
const age2 = calcAge2(2008);

console.log(age1, age2);

// Arrow Function
// it faster to write
/// good for SİMPLE functions that you only use once

// function hello() {
//   console.log("HELLO");
// }
// hello();

const hello = () => console.log("HELLO");
hello();

const nameArrow = (name, age) => {
  console.log(`Hello ${name}`);
  console.log(`You are ${age} years old`);
};
nameArrow("Muhterem", 16);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(2008, "Muhterem"));
// console.log(yearsUntilRetirement(1960, "SaulGoodman"));

// Chosing which one to use is matter of preference

// Function calling other functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

// birthYear and firstName are not related you can wjen change the name go ahead and try

const yearsUntilRetirement = function (birthYear, firstName) {
  // const age = 2024 - birthYear;
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  // in if else statements if you want a code to be executed put it before "return"
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years!`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
    // -1 is a convention in programming it shows that it has no meaning
  }

  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2008, "Muhterem"));
console.log(yearsUntilRetirement(1954, "Mike"));

const calcAverage = (a, b, c) => (a + b + c) / 3;
const scoreDolphins = calcAverage(200, 500, 80);
const scoreKoalas = calcAverage(10, 20, 40);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgKoalas > 2 * avgDolphins) {
    const koalasWin = `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    return koalasWin;
  } else if (avgDolphins > 2 * avgKoalas) {
    const dolphinsWin = `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    return dolphinsWin;
  } else {
    const test = "No team wins...";
    return test;
  }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));

///////////////////////////
// ARRAYS
// arrays are data structure
// data structures bundle values together into one big container

const friend1 = "Elon";
const friend2 = "Bill";
const friend3 = "Carl";
// instead do this -->
var friends = ["Elon", "Bill", "Carl", "Robert"];

console.log(friends);
console.log(friends[2]);
console.log(friends.length);

//  this can give you the last value in the array
console.log(friends[friends.length - 1]);

console.log([friends.length * 3]);

friends[1] = "Stephan";
console.log(friends);

const firstName = "Ahmet";
const Muhterem = [firstName, "Alkan", 2024 - 2008, friends];
console.log(Muhterem);

const years = new Array(1991, 1914, 2008, 2024);

const age1New = calcAge(years[0]);
const age2New = calcAge(years[1]);
const age3New = calcAge(years[years.length - 1]);
console.log(age1New, age2New, age3New);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

// Basic Array Operations

var friends = ["Elon", "Bill", "Carl", "Robert"];

// 'push' adds elements to the end of array
const newLength = friends.push("Muhterem");
console.log(friends);
console.log(newLength);

// 'unshift' adds new elements to beginning of array
friends.unshift("John");
console.log(friends);

// 'pop' remove elements
friends.pop(); // Last Element
const popped = friends.pop(); // Last Element
console.log(friends);
console.log(popped);

// 'shift' removes first element
friends.shift(); // First
console.log(friends);

// 'indexOf' shows the number of element
console.log(friends.indexOf("Carl"));
console.log(friends.indexOf("Nobody"));

// 'includes' checkes if array includes that element
console.log(friends.includes("Tyler Durden"));
console.log(friends.includes("Bill"));
friends.push(23);
console.log(friends.includes("23"));

if (friends.includes("Bill")) {
  console.log("You Have a friend called bill");
}

//

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

/*
const totalCost = (bill, tip) => bill + tip;
const totals = [
  totalCost(bills[0], tips[0]),
  totalCost(bills[1], tips[1]),
  totalCost(bills[2], tips[2]),
];
console.log(totals[0]);
console.log(totals[1]);
*/

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);
console.log(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]);

//
///////////////////////////
// OBJECTS
// like arrays we use objects to group together different variables
// difference is the order of elements does not matter at all in objects

var muhteremArray = [
  "Muhterem",
  "Alkan",
  "2024 - 2008",
  "student",
  ["array 1", "array 2", "array 3"],
];

var muhteremObject = {
  firstName: "Muhterem",
  lastName: "Alkan",
  age: 2024 - 2008,
  hobbys: ["Sleeping", "Sleeping Again", "He dont have any other hobby"],
  job: "student",
};
console.log(muhteremArray);
console.log(muhteremObject);

console.log(muhteremObject.lastName); // Dot notation
console.log(muhteremObject["lastName"]); // Bracket notation

const nameKey = "Name";
console.log(muhteremObject["first" + nameKey]);
console.log(muhteremObject["last" + nameKey]);
// same think would not wok with dot, dot we have to use reak name not a computed name

// const interestedIn = prompt(
//   "What do you wantto now about Muhterem? Choose between firstName, lastName, age, job"
// );
// console.log(muhteremObject.interestedIn);

// undefined when you try to access to a property that dont exist

// if (muhteremObject[interestedIn]) {
//   console.log(muhteremObject[interestedIn]);
// } else {
//   console.log("Wrong request! Choose between firstName, lastName, age, job");
// }

muhteremObject.location = "Ankara";
muhteremObject["Email"] = "alkanahmetmuho@gmail.com";
console.log(muhteremObject);

//

console.log(
  `${muhteremObject.firstName} has ${muhteremObject.hobbys.length}, and his second hobby is ${muhteremObject.hobbys[2]}`
);

// adding functions to objects

var muhteremObject = {
  firstName: "Muhterem",
  lastName: "Alkan",
  birthYear: 2008,
  hobbys: ["Sleeping", "Sleeping Again", "He dont have any other hobby"],
  job: "student",
  driversLicense: false,

  // function expression
  // this is not ideal we already now birthyear
  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // },

  // function calcAge(birthYear) {
  //   return 2024 - birthYear
  // }

  // calcAge: function () {
  //   // "this" is calling to "muhteremObject" so this.birthYear is birthYear property in the muhteremObject
  //   // console.log(this);
  //   return 2024 - this.birthYear;
  // },

  calcAge: function () {
    // declaring a new property called age
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has `;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.driversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(muhteremObject.calcAge());
console.log(muhteremObject.age);
console.log(muhteremObject.age);
console.log(muhteremObject.age);
console.log(muhteremObject["age"]);

// console.log(muhteremObject.calcAge(2008));
// console.log(muhteremObject["calcAge"](2008));
// this is not ideal we already now birthyear

console.log(muhteremObject.getSummary());

///////////////////////////
// LOOPS
// they allow us to automate repetitive tasks

// console.log("Lifting weights repetition 1 🏋🏿");
// console.log("Lifting weights repetition 2 🏋🏿");
// console.log("Lifting weights repetition 3 🏋🏿");
// console.log("Lifting weights repetition 4 🏋🏿");
// console.log("Lifting weights repetition 5 🏋🏿");

// instead do this -->

// for loop keeps running while this condition stays true
for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏿`);
}

// looping arrays

var muhteremArray = [
  "Muhterem",
  "Alkan",
  2024 - 2008,
  "student",
  ["array 1", "array 2", "array 3"],
];

// muhteremArray[5] doesent exist so i counter variable should always stay below 5
// we hard-coded the length "5"
for (let i = 0; i < 5; i++) {
  console.log(muhteremArray[i]);
  // we use "[i]" because i = 0
}

// Do this instead -->
const types = [];

for (let i = 0; i < muhteremArray.length; i++) {
  // Reading from muhteremArray
  console.log(muhteremArray[i], typeof muhteremArray[i]);

  // Filling types array
  // types[i] = typeof muhteremArray[i];
  types.push(typeof muhteremArray[i]);
}
console.log(types);

const newYears = [1991, 2008, 1969, 2024];
const newAges = [];

for (let i = 0; i < newYears.length; i++) {
  newAges.push(2024 - newYears[i]);
}
console.log(newAges);

// Continue and Break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < muhteremArray.length; i++) {
  // continue means current iteration of loops stops
  if (typeof muhteremArray[i] !== "string") continue;

  console.log(muhteremArray[i], typeof muhteremArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < muhteremArray.length; i++) {
  // after number is found operation will stop
  if (typeof muhteremArray[i] === "number") break;
  console.log(muhteremArray[i], typeof muhteremArray[i]);
}

//

var muhteremArray = [
  "Muhterem",
  "Alkan",
  2024 - 2008,
  "student",
  ["array 1", "array 2", "array 3"],
];

//

for (let i = muhteremArray.length - 1; i >= 0; i--) {
  console.log(i, muhteremArray[i]);
}

// Loop inside of the loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} Lifting weights repetition ${rep} 🏋🏿`);
  }
}

// While loop

for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏿`);
}

// it will happen while rep is less than 10
let rep = 1;
while (rep <= 5) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋🏿`);
  rep++;
}

// Running a loop until dice is 6 -->

// 'Math.trunc()' gets rid of decimal
// 'Math.random()' creates a number between 0 and 1
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  // dice === 6 ? console.log("Loop ended") : null;
  // using a single line if statement is better
  if (dice === 6) console.log("Loop is about to end...");
}

//

const calcTip2 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips2 = [];
const totals2 = [];

for (let i = 0; i < bills2.length; i++) {
  const tip = calcTip(bills2[i]);
  tips2.push(tip);
  totals2.push(tip + bills2[i]);
}

console.log(bills2);
console.log(tips2);
console.log(totals2);

const calcAverage2 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    // sum += arr[i];
  }
  // console.log(sum);
  return sum / arr.length;
};

console.log(calcAverage2([2, 3, 6]));
console.log(calcAverage2(totals2));
console.log("test");
console.log(calcAverage2(tips2));
console.log(calcAverage2(bills2));
