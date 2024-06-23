// practice
const country = "Turkey";
const continent = "europe and asia";
let population = 85;
isIsland = false;
language = "Turkish";

console.log(country);
console.log(continent);
console.log(population);
console.log(typeof isIsland);
console.log(typeof language);

console.log(population / 2);

population++;

console.log(population);
console.log(population > 6);
console.log(population < 33);

const description = `${country} is in ${continent} and its ${population} million people speak ${language}`;
console.log(description);

// if (population > 33) {
//   console.log(`${country}s population is above above 33 million`);
// } else {
//   console.log(`${country}s population is bellow 33 million`);
// }

// const numNeighbours = Number(
//   prompt("How  many neighbour countries does your country have")
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

const speakEnglish = "English" === language;
console.log(speakEnglish);

const lessPopulation = 50 > population;
console.log(lessPopulation);

const isItIsland = isIsland === true;
console.log(isItIsland);

if (speakEnglish && lessPopulation && isItIsland) {
  console.log("You should live in Turkey");
} else {
  console.log("Turkey does not meet your criteria");
}
