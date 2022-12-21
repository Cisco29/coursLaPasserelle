// tant que : while

// while(condition){
    
//} 
//

let prompt = require('prompt-sync')();

let jouer = true;

while (jouer) {
    jouer = prompt('tu veux gamer?') == 'true';
    
}

// compteur

let compteur = 0;
while (compteur < 10) {
   console.log('bonjour, je suis le' + compteur +'message'); 
   compteur = compteur +1;
}
// pour : for

for (let compteur = 0; compteur < 10; compteur = compteur +1) {
    console.log(compteur);
}