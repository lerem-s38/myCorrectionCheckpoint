/*
Tu dois créer une fonction `sumOfEvens` qui prend un tableau de nombre en argument
et qui retourne la somme des valeurs paires.

Si le tableau est vide, retourne 0.

Exemples :
* sumOfEvens([]) -> 0
* sumOfEvens([1, 2, 3, 4]) -> 6

*/

// Ta fonction à créer ici

// Début des tests
const assert = require('assert');

assert.strictEqual(typeof sumOfEvens, 'function');
assert.strictEqual(sumOfEvens.length, 1);
assert.strictEqual(sumOfEvens([]), 0);
assert.strictEqual(sumOfEvens([1]), 0);
assert.strictEqual(sumOfEvens([2]), 2);
assert.strictEqual(sumOfEvens([1, 2, 3, 4]), 6);
assert.strictEqual(sumOfEvens([-4, 4]), 0);
console.log("Tests OK!");
// Fin des tests
