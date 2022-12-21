let prompt  = require('prompt-sync')();

// L'objectif ici est de créer un programme qui va nous permettre d'ajouter des pièce à un appartement, calculer et stocker leur superficie, puis d'afficher à l'utilisateur la superficie globale de l'appartement.

/*console.log('choisissez une largeur');

console.log('choisissez une longueur');

// 1- Créer une fonction qui prend en paramètre une longueur et une largeur et renvoie la superficie.

function calculeSuperficie(largeur, longueur) {
    return largeur*longueur;
}

*/



// 2- Créer une fonction qui prend en paramètre un tableau de superficies et renvoie la superficie totale.



function superficieTotale(tab) {

    let sum = 0;

    for (let index = 0; index < tab.length; index++) {
        sum += tab[index];
        
    } return sum;
    
}

let superficies= [12, 24, 7, 24];

console.log(superficieTotale(superficies));









// 3- Créer une boucle qui propose d'ajouter une nouvelle pièce, et dans ce cas propose de saisir la longueur puis la largeur de cette pièce. (via prompt-sync)
        
let superficies = []

let reponse = prompt('voulez vous creer une piece pour votre appartement? oui/non')

while (reponse == 'ou') {
    let long = prompt('veuillez entrer la longueur de la pièce');
    let larg = prompt('veuillez entrer une largeur');

    let superficieNouvellePiece = calculSuperficie(larg,long);
    superficies.push(superficieNouvellePiece);

    
}

console.log('votre appartement compte ' + 'pieces, et il a une superficie total de ' + superficies.lenght);

// 4- Utiliser la fonction en 1- pour calculer la superficie de cette pièce et stocker le résultat




// 5- A la fin, afficher un récapitulatif et utiliser la fonction en 2- pour afficher la superficie totale de l'appartementpwd

/*let long = 5;
let larg = 7

console.log(calculeSuperficie(larg,));
*/

