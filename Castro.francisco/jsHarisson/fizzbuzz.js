let prompt  = require('prompt-sync')();



// L'utilisateur doit saisir un nombre
let nombreUser = prompt('choissisez un nombre : ')
// Si ce nombre est un multiple de 3, on doit afficher dans la console 'fizz'

if (nombreUser % 3 == 0) {
    console.log('fizz');
    
}

// Si ce nombre est un multiple de 5, on doit afficher dans la console 'buzz'

else if (nombreUser % 5 == 0) {

    console.log('buzz');    
    }

// Si ce nombre est un multiple de 3 et de 5, on doit afficher 'fizzbuzz'

else if ( numberUser %)






// S'il n'est multiple ni de l'un, ni de l'autre, on doit afficher tout simplement le nombre question.

/*let choixNumber = prompt('choisissez un nombre');




while (choixNumber <= 100) {
  if ((choixNumber % 3 === 0) && (choixNumber % 5 === 0)) {
    console.log("FizzBuzz");
    } else if (choixNumber% 3 === 0) {
      console.log("Fizz");
      } else if (choixNumber% 5 === 0) {
        console.log("Buzz");
        } else {
          console.log(choixNumber);
        }
        choixNumber++;
}/*


