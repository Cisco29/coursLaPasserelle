// créer un programme qui demande à l'utilisateur de choisir un topping pour sa pizza, puis lui dire qu'il a choisi une pizza avec le topping indiqué//

let prompt = require('prompt-sync')();

let pizza = prompt('quels assortiments voulez vous?');


console.log('vous avez choisi une pizza : '+ pizza);

let nombre = prompt('choisissez un nombre:');
console.log('vous avez choisi ' + (nombre *2 ));


let tab = []
console.log(tab)
tab.push('champignons');
tab.push('poivrons');
tab.push('chorizo');

console.log(tab)
console.table(tab)

let nombres = prompt('choisi un nombre entre 0 et 3 ? ');

let mystere = prompt('choisissez un chiffre entre 0 et 5'+ (tab.length - 1));

console.log('votre ingredient est: ' +tab[mystere]);

