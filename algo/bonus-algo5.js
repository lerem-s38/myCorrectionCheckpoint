/*

Notre équipe de football participe à un championnat dans laquelle elle a joué 10 matchs.
On veut calculer le nombre de points total de l'équipe.

Le résultat d'un match est défini de la façon suivante : "3-0"
- La première valeur correspond au nombre de but que notre équipe a marqué.
- Le deuxième correspond au nombre de but que notre adversaire a marqué.

Tu peux calculer les points gagné par notre équipe lors d'un match de la façon suivante :
* Victoire : +3 points
* Match nul : +1 points
* Défaite : +0 point

Ci-dessous, tu as un tableau avec tous les résultats de notre équipe,
qui te permet de tester si ta fonction est bonne.

Modifie la fonction `getPoints` qui nous permet de récupérer le nombre
de points de notre équipe à la fin du championnat.

Exemple : 
Pour le tableau :
[
  '1:0',
  '2:0',
  '3:0',
  '4:4',
  '2:2',
  '3:3',
  '1:4',
  '2:3',
  '2:4',
  '3:4'
]

Le résultat attendu sera 12.

*/

function getPoints(array) {
  // Le corps de ta fonction ici
}

// Début des tests
const assert = require('assert');

assert.strictEqual(typeof getPoints, 'function');
assert.strictEqual(getPoints.length, 1);
const scores = [
  '1:0',
  '2:0',
  '3:0',
  '4:4',
  '2:2',
  '3:3',
  '1:4',
  '2:3',
  '2:4',
  '3:4',
];
assert.strictEqual(getPoints(scores), 12);
console.log("Tests OK!");
// Fin des tests