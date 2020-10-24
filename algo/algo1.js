/*

On te donne 2 angles d'un triangle, modifie la fonction `thirdAngle` afin de 
retourner la valeur du 3e angle.

La somme des 3 angles d'un triangle est toujours égale à 180.

Exemples :
* thirdAngle(90, 30) -> 60
* thirdAngle(20, 80) -> 80

Pour tester cet exercice tu peux, dans le terminal, exécuter le script actuel avec Node.
(Idem pour les exercices suivant)
formule = angle1 + angle 2 = somme-180
*/

function thirdAngle(a, b) {
  return 180 - (a + b);
  // Votre code ici
}

// Début des tests
const assert = require('assert');

assert.strictEqual(typeof thirdAngle, 'function');
assert.strictEqual(thirdAngle.length, 2);
assert.strictEqual(thirdAngle(90, 30), 60);
assert.strictEqual(thirdAngle(20, 80), 80);
console.log('Tests OK!');
// Fin des tests
