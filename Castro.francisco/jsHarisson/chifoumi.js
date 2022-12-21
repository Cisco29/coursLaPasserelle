let prompt = require('prompt-sync')();

// Créer un programme qui doit choisir 'pierre' feuille' ciseaux'
let tab = []
console.log(tab)
tab.push('pierre');
tab.push('feuille');
tab.push('ciseaux');
// creer un tableau avec nos 3 options
let options = ['pierre','papier','ciseaux'];

// génerer un nombre entier entre 0 et 2
let random = Math.floor(Math.random() *3);

// le choix de l'ordinateur est dans l'option dont l'index correspond au nombre aléatoire

let choixOrdi = options[random];

// demander à l'utilisateur de faire son choix egalement

let choixUser = prompt('choisissez entre pierre papier et ciseaux:')

let choixUser = prompt('choisissez entre pierre, feuille et ciseaux:');


// ecrire les tests qui permettront de savoir qui a gagné

 //testter individuellement chaque possibilité
 //regrouper les possibilités qui mènent au même résultat
 //indice commencer par vérifier si il y a match nul 
 
if (choixOrdi == choixUser) {
    console.log('Match nul');
} else if((choixUser == 'pierre' && choixOrdi == 'ciseaux') || (choixUser == 'papier' && choixOrdi == 'pierre'))


// afficher le resultat du match













