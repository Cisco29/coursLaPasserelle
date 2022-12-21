/*
 * L'objectif de l'exercice est de permettre de changer l'image de l'ampoule par une
 * ampoule allumée ou éteinte, au fur et à mesure qu'on clique sur le bouton à côté.
 * Le bouton doit également changer avec l'action qui va se produire si on clique dessus.
 */

// ---- VARIABLES ET CONSTANTES GLOBALES

let lightbulb = document.querySelector('#lightbulb');          // L'objet DOM représentant la balise <img>
let toggleButton = document.querySelector('[type="button"]');       // L'objet DOM représentant la balise <button>

console.log(lightbulb);
console.log(toggleButton);


// ---- FONCTIONS
function allumerAmpoule() {
    console.log('On est dans la fonction');

    lightbulb.src = './images/on.png';
    toggleButton.textContent = 'Éteindre la lumière';
}

function eteindreAmpoule() {
    lightbulb.src = 'images/off.png';
    toggleButton.textContent = 'Allumer la lumière';
}

function gererAmpoule() {
    console.log(lightbulb.src);
    if (lightbulb.src.includes('/images/on.png')) {
        eteindreAmpoule();
    } else {
        allumerAmpoule();
    }
}


// ---- CODE PRINCIPAL
toggleButton.addEventListener('click', gererAmpoule);