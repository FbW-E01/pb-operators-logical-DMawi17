// 1. Check the result of:
const isDogBetter = true;
const isCatBetter = false;

console.log(isDogBetter && isCatBetter); // false
console.log(isDogBetter || isCatBetter); // true
console.log(!(isDogBetter || isCatBetter)); // false

// 2. Declare three more variables `atoms`, `sandGrains`, `starsInSky`. Give these variables number values.
const atoms = 5;
const sandGrains = 12;
const starsInSky = 97;

// 3. Check the result of whether:
  // a) `atoms` is greater than `starsInSky` AND `atoms` is greater than `sandGrains`.
  console.log(atoms > starsInSky && atoms > sandGrains); // => false

  // b) `atoms` is NOT equal to `sandGrains`.
  console.log(atoms != sandGrains); // => true

  // c) `starsInSky` is less than `sandGrains` OR `starsInSky` is greater than `atoms`.
  console.log(starsInSky < sandGrains || starsInSky < atoms);  // => false

  // d) `atoms` is equal to `starsInSky` OR `atoms` is NOT equal to `sandGrains`.
  console.log(atoms === starsInSky || atoms !== sandGrains);  // true

  // e) `atoms` is greater than or equal to 10 AND `sandGrains` is less than or equal to 10.
  console.log(atoms >= 10 && sandGrains <= 10); // false

  // f) `atoms` multiplied by `starsInSky` is less than 100 OR whether `atoms` multiplied by `sandGrains` is greater than 100.
  console.log((atoms * starsInSky < 100) || (atoms * sandGrains > 100)); // false

// 4. BONUS: In your own words, explain the logic of each result in a comment after the result.