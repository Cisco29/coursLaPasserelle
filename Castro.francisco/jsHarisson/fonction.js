


/*
function bonjour() {
// corps de la fonction
    console.log('bonjour');
    
}
// appeller la fonction

bonjour();

function bonjourperso(name) {
    console.log('bonjour' + name + '!');


}
bonjourperso('jean claude');

let tab = ['Julien', 'Kevin', 'Nicolas M', 'Martin', 'Mohammed', 'Joseph', 'Virginie', 'Judes', 'Laura', 'Francisco', 'Ouissam', 'Noemie', 'Joel', 'Nicolas T', 'Anthony', 'Vincent'];

for (let index = 0; index < tab.length; index++) {
    bonjourperso(tab[index]);
}

// passer  plusiseurs parametre 

function additionner(a + b) {
    console.log(a + b);
    
}
additionner(12, 48);
additionner(53, 27);

// dire salut

function direSalut(tableau) {
    for (let index = 0; index < tableau.length; index++);

    
}
direSalut(tab);
    direSalut(prenoms)


// Ecrire une fonction, qui affiche la moyenne entre 2 nombres ?

function moyenne(a, b){

    console.log((a+b )/ 2);
}
moyenne(12, 14)

// Créer un tableau avec des nombres de 0 à 20 (aléatoire ou pas)
let tab =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.table(tab);

// Créer une fonction qui prend en paramètre un tableau de nombres, et affiche la moyenne de ces nombres.

function mouyenneMultiple(tab) {
    let sum = 0;
    for (let index = 0; index < tab.length; index++) {
        sum += tab[index];
        
    }
    console.log(sum/tableau.length);
}

mouyenneMultiple(notes);
 */   

// creer un programme qui demande à l'utilisateur de choisir un nombre puis un autre, et qui fait la somme entre ces deux nombres.

let prompt  = require('prompt-sync')();


let choixNumber = prompt('choisissez un nombre:')
let choixNumber2 = prompt('choisissez encore un nombre:')

choixNumber =parseInt(choixNumber)
choixNumber2 =parseInt(choixNumber2)

console.log('la sommes est égale '+ choixNumber + choixNumber2);

// que se passe-t-il? comment y remédier?

function isEven(nombre) {
    

if (nombre % 2 == 0){
return true;
}
else {
    return false;
}
}

let estPair = isEven

console.log(estPair);

function altAddition(a, b) {
    return a+b;
}

function altDivision(nombre) {
    return nombre /2;

    function afficherMoyenne(numUn, numdeux) {

let somme = altAddition(numUn, numdeux);
let moyenne = altDivision(somme);

    }
    
}
afficherMoyenne(50, 42)











