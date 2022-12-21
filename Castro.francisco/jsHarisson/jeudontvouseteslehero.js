let prompt = require('prompt-sync')();

console.log('bonjour Madame Monsieur vous vous réveillez dans une pièce froide humide et lugubre, au sol se trouve des bouts d\'os humains avec du sang et des excrements sur les murs et une belle cicatrice au niveau des reins... devant vous se trouve deux portes une à gauche et l\'autre à droite!! veuillez faire un choix pour commencer l\'aventure'););


let choice = prompt('où allez vous? gauche/droite');

if (choice === 'gauche'){
console.log('vous arrivez dans la même pièce en plus salle mais avec la télé');

} else if (choice === 'droite'){
    console.log('un camion arrive devant vous');
} else {
    choice = prompt('bonjour Madame Monsieur vous vous réveillez dans une pièce froide humide et lugubre, au sol se trouve des bouts d\'os humains avec du sang et des excrements sur les murs et une belle cicatrice au niveau des reins... devant vous se trouve deux portes une à gauche et l\'autre à droite!! veuillez faire un choix pour commencer l\'aventure'); 

}






