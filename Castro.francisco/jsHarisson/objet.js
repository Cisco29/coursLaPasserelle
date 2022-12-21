
/*
let MrCastro = {
    age: '43 ans',
   taille: '180cm',
   poids: '101kg',
   adresse: 'rond point de la place',
   fumeur: 'oui',
   discoursDeMotivation: function() {
    console.log('Mais si vous allez y arrivez ');
}
    
};




console.table(MrCastro);
MrCastro.discoursDeMotivation();
*/

// Créer 3 objets (au moins 3 propriétés par objet)

let pikachu = {
couleur: 'jaune',
taille: ['30cm'],
pouvoir: 'electricité',
}

let bulbizar = {
couleur: 'vert kaki',
taille: ['50cm'],
pouvoir: 'carapace à fleur',
}

let newton = {
couleur: 'gris moche',
taille: ['3 nains de jardin'],
pouvoir: 'feu à gogo',

}




// Les ranger dans un tableau

let mespokemons = [pikachu,bulbizar,newton];
console.table(pikachu)
console.table(bulbizar)
console.table(newton)






// afficher chaque objet du tableau dans une <ul> (grace aux boucles)

for (let i = 0; i < mespokemons.length; i++) {
    document.write('</ul>');
    
    for( let property in mespokemons) {
        document.write(`<li> <strong>${property}</strong> : ${ mespokemons[property] } </li>`);
    }
    document.write('</ul>');
    
}