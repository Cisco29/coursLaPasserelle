// Récupération des éléments
let monImg = document.querySelector('img');
let monTitre = document.querySelector('h1');
let monUl = document.querySelector('ul');
let monBouton = document.querySelector('button');
let monInput = document.querySelector('input');

let mesElementsAuHasard = ['Carottes', 'Thym', 'Chou-Fleur', 'Poivre Noir', 'Courgettes'];

let spacebar = 'Space';

// Fonctions
function changerImage() {

    console.log(monImg.src);
    
    if (monImg.src.includes('caddie')) {
        monImg.src = 'img/liste.png';
    } else {
        monImg.src = 'img/caddie.jpg';
    }
}

function changerCouleur() {
    if (monTitre.classList.contains('blue')) {
        monTitre.classList.remove('blue');
        monTitre.classList.add('red');
    }
    else if (monTitre.classList.contains('red')) {
        monTitre.classList.replace('red', 'green');
    }
    else {
        monTitre.classList.remove('green');
        monTitre.classList.add('blue');,
    }
}

function pressSpacebar(event) {
    if (event.code == spacebar) {
        console.log(event);
        
        let rand = Math.floor(Math.random() * mesElementsAuHasard.length);

        let monElementAAjouter = mesElementsAuHasard[rand];

        monUl.innerHTML += `<li>${monElementAAjouter}</li>`;

    }
    
}

function moreElements() {
    monUl.innerHTML += `<li>${monInput.value}</li>`;
}

// Gestionnaires d'évènements
monImg.addEventListener('click', changerImage);
monTitre.addEventListener('click', changerCouleur);

document.addEventListener('keydown', pressSpacebar);
monBouton.addEventListener('click', moreElements);