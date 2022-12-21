// Créer un programme qui va générer un nombre aléatoire entre 0 et 9.
let rand = Math.floor(Math.random()*10);

// Demander à l'utilisateur d'essayer de deviner le nombre

let prompt = require('prompt-sync')();

let nombre = prompt('Choisissez un chiffre entre 0 et 9 : ');

// S'il réussit, on va lui dire qu'il a gagné
// Sinon, on lui dit qu'il a perdu, et quel était le nombre à trouver

if (rand == nombre) {
    console.log('Bravo, vous avez gagné !');
} else {
    console.log('Perdu, la bonne réponse était : ' + rand);
}