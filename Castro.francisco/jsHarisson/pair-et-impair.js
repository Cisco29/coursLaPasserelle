
// creer un programme qui va demander à l'utilisateur de saisir un nombre//

let prompt = require('prompt-sync')();

let number = prompt('saisisez un nombre pair ou impair');

// dire à l'utilisateur si le nombre est pair ou non//

if (number%2 == 0) {
    console.log('votre nombre est pair');
} else{ 
   console.log( 'votre nombre est impair'); 
}


