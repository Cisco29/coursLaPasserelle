let tab = ['Julien', 'Kevin', 'Nicolas M', 'Martin', 'Mohammed', 'Joseph', 'Virginie', 'Judes', 'Laura', 'Francisco', 'Ouissam', 'Noemie', 'Joel', 'Nicolas T', 'Anthony', 'Vincent'];


// Créer un programme qui affiche dans la console le nom d'une des personnes du tableau au hasard

/*let random = Math.floor(Math.random() * tab.length);

let nomAfficher = tab[random]

console.log(nomAfficher);
*/
// Créer un programme qui va créer au hasard un groupe de 3 personnes: soit en les affichant dans la console, soit en mettant les 3 prénoms tirés dans un nouveau tableau
// indice: si je veux remplir un nouveau tableau, il faut d'abord le déclarer, puis je peux utiliser .push()... en boucle.

// for (initialisation; condition de sortie; expression finale) {
  // code à exécuter
//  }


/*let compteur = 3;

let newTab = []

for (compteur = 0; compteur >3; ++){






}
*/

// Créer un programme qui va générer 4 tableaux, chacun contenant 4 personnes de la classe. Attention, pas de doublons !
// indice: encore une fois, bien penser à créer les tableaux d'abord. Ensuite on peut ranger les personnes 4 par 4 dans les différents tableaux, ou alors ranger une personne sur 4 dans chaque tableau... (%)

let trois = [];
for (prenoms = 0; prenoms < 3; prenoms++){
    let prenoms = tab[Math.floor(Math.random()*tab.length)];
    trois.push(prenoms);

} 
console.table(trois);





// Créer un programme qui va générer 4 tableaux, chacun contenant 4 personnes de la classe, de manière aléatoire. Attention aux doublons !
// indice: quand on range une des personnes dans un groupe, on pourrait la supprimer du tableau principal (splice)... Du coup, aucun risque de la re-sélectionner au hasard !

let tab1 =[];
let tab2 = [];
let tab3 = [];
let tab4 = [];

for (prenoms = 0; prenoms < 4; prenoms++){
    let prenoms = tab[Math.floor(Math.random()*tab.length)];
    tab1.push(prenoms);
    let prenoms1 = tab[Math.floor(Math.random()*tab.length)];
    tab2.push(prenoms1);
    let prenoms2 = tab[Math.floor(Math.random()*tab.length)];
    tab3.push(prenoms2);
    let prenoms3 = tab[Math.floor(Math.random()*tab.length)];
    tab4.push(prenoms3);

}
console.table(tab1);
console.table(tab2);
console.table(tab3);
console.table(tab4);


