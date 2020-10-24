/*

En paramètre, tu as un tableau de personnes.
Tu dois écrire le code de la fonction `findAdult`, qui renvoie un nouveau tableau contenant: 
* première case : un tableau avec uniquement les femmes de 18 ans et plus.
* deuxième case : un tableau avec uniquement les hommes de 18 ans et plus.

Exemple : 
Pour le tableau :
[
  { name: 'Mary Poppins', age: 32, sex: 'female' },
  { name: 'Tony Stark', age: 36, sex: 'male' },
  { name: 'John Doe', age: 12, sex: 'male' },
  { name: 'Jane Doe', age: 6, sex: 'female' },
  { name: 'Homer Simpson', age: 45, sex: 'male' },
  { name: 'Leonardo Di Caprio', age: 42, sex: 'male' },
  { name: 'Carla Bruni', age: 54, sex: 'female' },
  { name: 'Lisa Simpson', age: 13, sex: 'female' },
  { name: 'Millie Bobby Brown', age: 15, sex: 'female' },
  { name: 'Penelope Cruz', age: 47, sex: 'female' },
]

Le résultat attendu sera :
[
  [
    { name: 'Mary Poppins', age: 32, sex: 'female' },
    { name: 'Carla Bruni', age: 54, sex: 'female' },
    { name: 'Penelope Cruz', age: 47, sex: 'female' }
  ],
  [
    { name: 'Tony Stark', age: 36, sex: 'male' },
    { name: 'Homer Simpson', age: 45, sex: 'male' },
    { name: 'Leonardo Di Caprio', age: 42, sex: 'male' }
  ]
]

*/

function findAdults(arr) {
  // Le corps de ta fonction ici
}

// Début des tests
const assert = require('assert');

assert.strictEqual(typeof findAdults, 'function');
assert.strictEqual(findAdults.length, 1);
const persons = [
  { name: 'Mary Poppins', age: 32, sex: 'female' },
  { name: 'Tony Stark', age: 36, sex: 'male' },
  { name: 'John Doe', age: 12, sex: 'male' },
  { name: 'Jane Doe', age: 6, sex: 'female' },
  { name: 'Homer Simpson', age: 45, sex: 'male' },
  { name: 'Leonardo Di Caprio', age: 42, sex: 'male' },
  { name: 'Carla Bruni', age: 54, sex: 'female' },
  { name: 'Lisa Simpson', age: 13, sex: 'female' },
  { name: 'Millie Bobby Brown', age: 15, sex: 'female' },
  { name: 'Penelope Cruz', age: 47, sex: 'female' },
];
const result = [
  [
    { name: 'Mary Poppins', age: 32, sex: 'female' },
    { name: 'Carla Bruni', age: 54, sex: 'female' },
    { name: 'Penelope Cruz', age: 47, sex: 'female' }
  ],
  [
    { name: 'Tony Stark', age: 36, sex: 'male' },
    { name: 'Homer Simpson', age: 45, sex: 'male' },
    { name: 'Leonardo Di Caprio', age: 42, sex: 'male' }
  ]
];
assert.deepStrictEqual(findAdults(persons), result);
console.log("Tests OK!");
// Fin des tests
