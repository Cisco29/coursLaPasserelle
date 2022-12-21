// operateur de comparaison

//let notetoto =0;
/*let notetata=17;


// superireur à
let tatameilleur = notetoto < notetata;

//inferieur à 
let totomeilleur = notetoto > notetata;

// egal à

let egalenote = notetoto == notetata;

console.log(tatameilleur);
console.log(totomeilleur)
console.log(egalenote);

let taillelimite = 1.70;
let tailletata = 1.30


// superieur ou égal à
let indulgent = tailletata >= taillelimite;
let strict = tailletata > taillelimite;

console.log(indulgent);
console.log(strict);

// inf ou egale

indulgent = tailletata <= taillelimite;
strict = tailletata > taillelimite;

// test conditionnelle
// if (condition)

if (strict) [
console.log('tata monter dans le manege');

  ]

// if (condition)    else faire autre chose

if (indulgent) [
console.log('tata peut monter dans le manege');
]

else[
    console.log('tat ne peut pas monter dans le manege');
   
]

let moyenne = 10;
notetoto = 10;

if(notetoto>moyenne) [
    console.log('c\est tres bien, continue comme ça'),
]  else if (notetoto == moyenne) */





//creer un programme qui va générer un nombre aléatoire entre 0 et 9.

let max = 10;
let random = Math.random ();
random =  random*max;
random = Math.floor(random);




// demander à l'utilisateur de deviner le nombre

let prompt = require('prompt-sync')();
let guess = prompt('choisissez un nombre entre 0 et 9?');


// s'il réussit on va lui dire qu'il a gagné

if (guess == random) {
  console.log('Bravo Bravo vous avez gagné le droit de rejouer');
  // sinon on luin dit qu'il a perdu
} else {
  console.log ( 'pas de bol mais vous pouvez rejouer le bon numéro etait '+ random);
}


// operateur logique //

let ageToto = 24;
let isIvre = false;

if (ageToto > 18 && isIvre == false) {
  console.log('tu peux entrer mon coco');
} else {
  console.log('cest mon coco');
}

let ageTiti = 17;
let isTitiIvre = false;

if (ageTiti < 18 && isTitiIvre == false) {
  console.log(' tu peux entrer mec');
  
} else { console.log('cest mort mecton');
  
}

// ou logique OR ||  //

if ('ageTiti < 18 || isTitiIvre') { console.log('veuillez me suivre');
  
} else { console.log('eclate toi bien mais oublie pas que je te vois');
  
}

// différent de 

let differentDe = ageToto != 23;
















