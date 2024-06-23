// we use let when using the variable for the first time

let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log("muhterem");
console.log("16");

let surname = "alkan";
let senor = "Señor";
let firstNamePerson = "matmazel";

console.log(surname);
console.log(surname);
console.log(senor);

//  only "$" and "_" is allowed besides letters and numbers

// if its a real constant write it in uppercase
let person = "muhterem";
let PI = "3.1415";

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof "jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

//this is called reassigning we also say we mutate the age variable in technical terms
let age = 30;
age = 32;

// values in a const variable cannot be changed
const birthYear = 2008;
// birthYear = 2007;
console.log(birthYear);

var job = "engineer";
job = "teacher";
job = "student";

////////////////////////
// OPERATORS

// Math operators
const now = 2024;
const ageMuhterem = now - 2008;
const ageAlkan = now - 1939;
console.log(ageMuhterem, ageAlkan);

console.log(ageMuhterem * 2, ageMuhterem / 10, 2 ** 3);
// 2 ** 3 means 2^3

const firstName = "Muhterem";
const lastName = "Alkan";

// Asignment operators
// ! Awkward programming maths !
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x /= 5; // x = x / 5 = 20
x **= 2; // x = x^2 = 20 * 20 =400
x++; // x = x + 1 = 401
x--; // x = x - 1 = 400
console.log(x);

// Comparison operator
console.log(ageMuhterem > ageAlkan); // >, <, >=, <=
console.log(ageMuhterem >= 16);
const isFullAge = ageMuhterem >= 16;
console.log(isFullAge);

console.log(now - 1939 > now - 2008);

// division has higher priority than plus according to precedence table
// we can use parenthesis just like in real math
const averageAge = (ageMuhterem + ageAlkan) / 2;
console.log(ageMuhterem, ageAlkan, averageAge);

const massMark = 78;

console.log(firstName);
console.log(job);
console.log(birthYear);
console.log(now);

////////////////////////
// TEMPLATE STRİNGS

// This is too much pain
const muhteremSentence =
  "I'm " + firstName + ", a " + (now - birthYear) + " years old " + job + "!";
console.log(muhteremSentence);

//instead do this
const muhteremJobNew = `I'm ${firstName}, a ${now - birthYear} year old ${job}`;
console.log(muhteremJobNew);

const userAge = 15;

//when condition in '()' is true, code in '{}' will be executed
if (userAge >= 18) {
  console.log(`Muhterem can apply driving license`);
} else {
  const yearsLeft = 18 - userAge;
  console.log(`Wait ${yearsLeft} more years`);
}

// !!! leave century emty then conditionally give it a value !!!
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

////////////////////////
// Conversion and Coercion
// converting one type of value to another

// type conversion
const inputYear = "2008";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 16);

console.log(Number("Muhterem"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 16 + " years old");
// console.log("I am " + String(16) + " years old");
console.log("I am " + "16" + " years old");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log(Number("23") + Number("10") + 3);
console.log("23" * "2");
console.log("23" / "2");

////////////////////////
// Falsy and Truthy
// falsy will be false when converted to Boolean
// 6 falsy values: 0, “”, undefined, null, NaN, false
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Muhterem"));
console.log(Boolean({}));
console.log(Boolean(""));

// its coercionly converted when used if, else statement
const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("height is UNDEFINED");
}

// "===" is called strict equality operator its only true when both values are exactly the same
const randomAge = 18;
if (randomAge === 18) console.log("you became an are adult");
console.log("18" === 18);

// "==" is called loose equality operator, it does type coercion
// loose equality operator can introduce many hard to find bugs try to avoid it
console.log("18" == 18);

/*
const favourite = Number(prompt("What is your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite == 11) {
  console.log("11 is an amazing number");
}

if (favourite === 11) {
  console.log("11 is an amazing number");
} else if (favourite === 2) {
  console.log("3 is cool number");
} else {
  console.log("your number is not 11 or 3");
}

if (favourite !== 5) console.log("Why not 5?");
*/
console.log("test");
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

// "&&" is logical AND operator
console.log(hasDriversLicense && hasGoodVision);

// "||" logical OR operator
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//   console.log("Muhterem can drive");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;
if (shouldDrive) {
  console.log("Muhterem can drive");
} else {
  console.log("Someone else should drive...");
}

const dolphinsScoreOne = 96;
const dolphinsScoreTwo = 108;

const koalasScoreOne = 88;
const koalasScoreTwo = 91;
const koalasScoreThree = 110;

const scoreDolphins = (dolphinsScoreOne + dolphinsScoreTwo) / 2;
const scoreKoalas = (koalasScoreOne + koalasScoreTwo + koalasScoreThree) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}

const day = "monday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Go to school");
    console.log("Learn Javascript");
    break;
  case "tuesday":
    console.log("drink water");
    break;
  case "wednesday":
  case "tuesday":
    console.log("go on vacation");
    break;
  case "friday":
    console.log("go to a movie");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Go to school");
  console.log("Learn Javascript");
} else if (day === "tuesday") {
  console.log("drink water");
} else if (day === "wednesday" || day === "thursday") {
  console.log("go on vacation");
} else if (day === "friday") {
  console.log("go to a movie");
} else if (day === "saturday" || day === "sunday") {
  console.log("enjoy the weekend");
} else {
  console.log("Not a valid day!");
}
// expressions—> expressions produce values, the thing that we put into our template literal is expression
// for instance javascript dont except statements inside the template literals

// statements—> they are like sentences that translate our actions

////////////////////////
// Conditional Statement Operator
// conditional statement allows us to write if else statement but all in one line
// else block is mandatory

const conditionalAge = 17;
conditionalAge >= 18
  ? console.log("I'm bigger than 18")
  : console.log("I'm smaller than 18");
// this is called ternary operator

const ageCondition = conditionalAge >= 18 ? "bigger" : "smaller";
console.log(ageCondition);

console.log("test");
let ageCondition2;
if (conditionalAge >= 18) {
  ageCondition2 = "bigger";
} else ageCondition2 = "smaller";
console.log(ageCondition2);

// with this we can have consitionals inside of a template literal, we cant have if, else block in template litera

console.log(`I'm ${conditionalAge >= 18 ? "bigger" : "smaller"} than 18`);

// ternary operator is not going to work in bigger blocks of code but its perfecrt for this kind of situations

const bill = 100;
var tip;

console.log(
  `The bill was ${bill}, the tip was ${
    50 <= bill <= 300 ? (tip = bill * 0.15) : (tip = bill * 0.2)
  }, and the total value ${bill + tip}`
);
