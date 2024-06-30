'use strict';
// SCOPE CHAİN İS A ONE WAY STREET
// ONLY AN İNNER SCOPE CAN HAVE ACCESS TO VARİABLES OF İTS OUTER SCOPE,
// NOT THE OTHER WAY AROUND

const calcAge = function (birthYear) {
  const age = 2024 - birthYear;
  // Function Scope or Local scope
  function printAge() {
    let output = `You are ${age} born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // var variables are function scoped, they ignore the block
      var millenial = true;

      // Javascript will not perform a new variable look up.
      // Scope chain isnt necesarry at all if the varable we are
      // looking for is in the current scope
      const firstName = 'bob';
      const str = `You're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3));
      output = 'NEW OUTPUT!';
    }
    console.log(millenial);
    console.log(output);
  }

  printAge();
  return age;
};

const firstName = 'Muhterem';
calcAge(1996);
