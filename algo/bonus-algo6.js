/*

Écris une fonction, qui prend deux paramètres.
Ces deux paramètres sont des tableau de chaînes de caractères contenant des nombres.

Ta fonction doit retourner un seul tableau, contenant la somme de chaque élément 
à la même position dans les deux tableaux.

Si les tableaux n'ont pas la même longueur, retourner null.

Exemples :
* sumArr(["1", "2", "3"], ["2", "4", "1"]) -> ["3", "6", "4"]
* sumArr(["2", "7", "3"], ["2", "4", "9"]) -> ["4", "11", "12"]
* sumArr(["2", "7", "3", "8", "2"], ["2", "4", "9"]) -> null

*/

function sumArr(arrayA, arrayB) {
  // Le corps de ta fonction ici
}

// Début des tests
const assert = require('assert');

assert.strictEqual(typeof sumArr, 'function');
assert.strictEqual(sumArr.length, 2);
assert.deepStrictEqual(sumArr([], []), []);
assert.deepStrictEqual(sumArr(["1", "2", "3"], ["2", "4", "1"]), ["3", "6", "4"]);
assert.deepStrictEqual(sumArr(["2", "7", "3"], ["2", "4", "9"]), ["4", "11", "12"]);
assert.deepStrictEqual(sumArr(["2", "7", "3", "8", "2"], ["2", "4", "9"]), null);
console.log("Tests OK!");
// Fin des tests