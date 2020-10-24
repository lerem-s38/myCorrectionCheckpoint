/*
Tu dois écrire une fonction `isLeapYear` permettant de déterminer si une année est bissextile.

Elle retournera true si l'année passée en argument est bissextile et false si ce n'est pas le cas.

Une année est bissextile:
* si elle est divisible par 4 sans être divisible par 100
* si elle est divisible par 400

Les années 2004, 2016 et 2020 sont bissextiles.

Exemples :
* isLeapYear(2000) -> true
* isLeapYear(2019) -> false
* isLeapYear(2020) -> true

Rappel: tu dois utiliser l'opérateur modulo pour vérifier si un nombre est divisible par un autre.

*/

// Ta fonction à créer ici
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 > 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// Début des tests
const assert = require('assert');

assert.strictEqual(typeof isLeapYear, 'function');
assert.strictEqual(isLeapYear.length, 1);
assert.strictEqual(isLeapYear(1900), false);
assert.strictEqual(isLeapYear(2000), true);
assert.strictEqual(isLeapYear(2004), true);
assert.strictEqual(isLeapYear(2019), false);
assert.strictEqual(isLeapYear(2020), true);
console.log('Tests OK!');
// Fin des tests
