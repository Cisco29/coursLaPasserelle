// Aller chercher les éléments par leur id
let monLiToto = document.getElementById('toto');
console.log(monLiToto);

// (à bannir) Aller chercher les éléments par leur classe
let mesLi = document.getElementsByClassName('menu-item');
console.log(mesLi);

// Avec un sélecteur
let unLi = document.querySelector('.menu-item');

// Va chercher TOUS les éléments qui correspondent au selecteur
mesLi = document.querySelectorAll('.menu-item');

// Modifier le contenu textuel d'un élément
unLi.textContent = 'Coucou';

// Récupérer la liste
let maListe = document.getElementById('maListe');

// modifier le contenu HTML d'un élément
console.log(maListe.innerHTML);
maListe.innerHTML += '<li>Mentions légales</li>';

// attributs
let monLien = document.querySelector('a');
monLien.href = 'https://www.google.com';

// modifier la source d'une image ?
let monImage = document.querySelector('img');
monImage.src = 'bebe_paresseux.jpg';

// les classes
unLi.className += " maClasse";
console.log(unLi.className);

console.log(unLi.classList.length);

// changer l'image
let monBouton = document.querySelector('button');

// fonction pour changer l'image
function changerImage() {
    monImage.src = 'bebe_chauvesouris.jpg';
}

function setBlackBkg(event) {
    console.log(event);
    let leLiSurLequelOnAClique = event.currentTarget;
    leLiSurLequelOnAClique.classList.toggle('black-bkg');
}

// ajouter un Gestionnaire d'évènements
monBouton.addEventListener('click', changerImage);
// Il faut récupérer à nouveau le <li> après qu'il ait été 'écrasé' par l'utilisation de innerHTML
unLi = document.querySelector('li');
unLi.addEventListener('click', setBlackBkg);

//
let tousLesLi = document.querySelectorAll('li');

for (let index = 0; index < tousLesLi.length; index++) {
    tousLesLi[index].addEventListener('click', setBlackBkg);
    
}
