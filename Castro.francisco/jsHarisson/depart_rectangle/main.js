// Liste des touches du clavier.
const TOUCHE_BAS    = 40;
const TOUCHE_DROITE = 39;
const TOUCHE_GAUCHE = 37;
const TOUCHE_HAUT   = 38;

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode#value_of_keycode


function onClickButton()
{   let autrecouleur = document.querySelector('#rectangle');
    // Changer la couleur du rectangle lorsqu'on clique sur le bouton (regarder le CSS).
    autrecouleur.classList.toggle('autre-couleur');

}

function onKeyDown(event)
{
    // Les gestionnaires d'évènements reçoivent un objet event avec les informations sur ce qu'il s'est passé.

    // Par exemple pour les souris : https://developer.mozilla.org/fr/docs/Web/API/MouseEvent
    // Dans notre cas c'est pour le clavier : https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent

    // 1- Rechercher le rectangle.
let searchRectangle = document.querySelector('#rectangle');
    // 2- Gérer les 4 touches du clavier fléchées pour déplacer en pixels le rectangle, en utilisant la propriété CSS left ou top.

    let pressedKey = event.keyCode;
    // 2-1 Pour chaque touche il faut récupérer la position avec https://developer.mozilla.org/fr/docs/Web/API/Window/getComputedStyle


    // 2-2 Il faut ajouter ou soustraire à chaque fois quelques pixels supplémentaires, en utilisant la propriété DOM style du rectangle.
let coordonneesGauche = window.getComputedStyle(searchRectangle).left;
let coordonneesHaut = window.getComputedStyle(searchRectangle).top;
    
if (pressedKey == TOUCHE_HAUT) {
    searchRectangle.style.top = (parseInt(coordonneesHaut) - 20) + 'px';
}
else if (pressedKey == TOUCHE_BAS){  
    searchRectangle.style.top = (parseInt(coordonneesHaut) + 20) + 'px';
}

else if (pressedKey == TOUCHE_DROITE){ 
    searchRectangle.style.left = (parseInt(coordonneesGauche) + 20) + 'px';

}

else if (pressedKey == TOUCHE_GAUCHE){
    searchRectangle.style.left = (parseInt(coordonneesGauche) - 20) + 'px';

}

}


// 1- Rechercher le bouton
let botton = document.querySelector('button');

// 2- Installer un gestionnaire d'évènements clic dessus, qui emmène vers onClickButton

botton.addEventListener('click',onClickButton);

// 3- Installer un gestionnaire d'évènements sur toute la page, pour détecter les touches du clavier
