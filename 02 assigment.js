function describeCountry(country, population, capitalCity) {
  console.log(country, population, capitalCity);
  const countryDescription = `${country} has ${population} million people and its capital city ${capitalCity}`;
  return countryDescription;
}

describeCountry("Turkey", 85, "Ankara");
const myCountry = describeCountry("Turkey", 85, "Ankara");
console.log(myCountry);

const indonesiaCountry = describeCountry("Indonesia", 275, "Jacarta");
console.log(indonesiaCountry);

const indiaCountry = describeCountry("India", 1417, "New Delhi");
console.log(indiaCountry);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

console.log("TEST");

const percentageOfWorld3 = (population) => (population / 7900) * 100;
const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(332);

console.log(percPortugal3, percChina3, percUSA3);

const populations = [10, 1441, 332];
console.log(populations);
console.log(populations.length === 4);

const percentages = [percPortugal3, percChina3, percUSA3];

const neighbours = ["Greece", "Armenia", "Palestina", "Romania"];
neighbours.push("Utopia");
neighbours.pop();

neighbours.includes("Germany")
  ? console.log("probably a central european country")
  : console.log("probably not a central european country");

console.log(neighbours);
console.log(neighbours[2]);
neighbours[2] = "Israel";

console.log(neighbours);

const myCountry1 = {
  country: "Turkey",
  capital: "Ankara",
  language: "Turkish",
  population: 85,
  neighbours: ["Greece", "bulgaria", "Syria", "Iraq"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },
  checkIslans: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

myCountry1.population *= 5;
console.log(myCountry1.population);

myCountry1["population"] /= 2yyy
;
console.log(myCountry1.population);

myCountry1.describe();
myCountry1.checkIslans();
console.log(myCountry1.isIsland);

//
//
//
//
//

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

// Election

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
}

console.log(mark.calcBMI());
console.log(john.calcBMI());

for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}

const populations2 = [10, 1441, 322, 84];
const percentages2 = [];

for (let i = 0; i < populations2.length; i++) {
  const perc = percentageOfWorld1(populations2[i]);
  percentages2.push(perc);
}

console.log(populations2);
console.log(percentages2);

// Or

const percentages3 = [];

let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}

console.log(percentages3);

//

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
