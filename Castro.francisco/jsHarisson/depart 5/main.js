/*
 * L'objectif de l'exercice est d'implémenter une fusée qui décolle après qu'on ait
 * cliqué sur un bouton qui déclenche un compte à rebours de 5 secondes.
 * Une fois qu'on a cliqué sur le bouton, on ne peut pas revenir en arrière ! Le bouton est désactivé.
 * Une fois le compte à zéro la fusée s'envole verticalement de la lune, de bas 
 * en haut de l'écran, progressivement, jusqu'à disparaître de l'écran.
 * Déplacer la fusée de 2 pixels en 2 pixels, puis en bonus la faire déplacer
 * de plus en plus vite.
 * Lorsqu'on clique sur la fusée, les coordonnées X, Y de la souris s'affichent dans la console.
 */

// ---- VARIABLES ET CONSTANTES GLOBALES

let bottom = document.querySelector('.rocket');             // La position verticale de la fusée en pixels, depuis le bas de l'écran
let countdown = 5;          // Le chronomètre du compte à rebours
let counter = document.querySelector('span');            // L'objet DOM représentant la balise <span>
let launchButton = document.querySelector('button');       // L'objet DOM représentant la balise <button>
let rocket = document.querySelector('img');             // L'objet DOM représentant la balise <img>



// ---- FONCTIONS

// Le gestionnaire d'évènement de clic sur le bouton qui initie le comptes à rebours.
launchButton.addEventListener('click',launcher);



// 1- Il faut désactiver le bouton, quel attribut HTML permet de le faire ? En déduire le code JavaScript DOM
launchButton.disabled = true;
// 2- Il faut afficher la valeur de départ du compte à rebours pour informer l'utilisateur
countdown = 5;
counter.textContent = countdown;


// 3- Il faut initier le compte à rebours et informer l'utilisateur du temps restant en temps réel
setInterval(compteARebours, 1000);

setTimeout(demarrage, 5000);


// 4- Il faut lancer la fusée
setTimeout(spaceX) 

function compteARebours() {
if (countdown == 0) {
    counter.textContent ='🔥';
}
else {
    countdown--;
    counter.textContent = countdown;

}

    
}

// Le gestionnaire d'évènement de clic sur la fusée qui affiche la position de celle-ci dans la console.

// Regarder du côté de l'objet event des évènements de souris...



// La fonction qui produit l'animation de déplacement de la fusée.



function demarrage(){

setInterval(function () {
    bottom = bottom**1.02;
    rocket.style.bottom = bottom + 'px';
},100)
}

// Il faut se baser sur le positionnement en CSS, voir le fichier CSS ligne 19


// ---- CODE PRINCIPAL

// Recherche de la fusée et du bouton et compteur du panneau de commandes.
launchButton = document.querySelector('#command-panel button');

counter = document.querySelector('#command-panel span');

rocket = document.querySelector('.rocket');

// Installation d'un gestionnaire d'évènement de clic sur le bouton pour initier le compte à rebours.
launchButton.addEventListener('click',demarrage )

setInterval(compteARebours, 1000);



// Installation d'un gestionnaire d'évènement de clic sur la fusée pour afficher sa position dans la console.

rocket.addEventListener('click', scoobydoo);