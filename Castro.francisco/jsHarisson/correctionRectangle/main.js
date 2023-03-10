// Liste des touches du clavier.
const TOUCHE_BAS    = 40;
const TOUCHE_DROITE = 39;
const TOUCHE_GAUCHE = 37;
const TOUCHE_HAUT   = 38;

const HAUT = 'ArrowUp';
const BAS = 'ArrowDown';
const GAUCHE = 'ArrowLeft';
const DROITE = 'ArrowRight';

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode#value_of_keycode


function onClickButton()
{
    // Changer la couleur du rectangle lorsqu'on clique sur le bouton (regarder le CSS).
    let rectangle = document.querySelector('#rectangle');
    rectangle.classList.toggle('autre-couleur');
}

function onKeyDown(event)
{
    // Les gestionnaires d'évènements reçoivent un objet event avec les informations sur ce qu'il s'est passé.
    console.log(event);

    // Par exemple pour les souris : https://developer.mozilla.org/fr/docs/Web/API/MouseEvent
    // Dans notre cas c'est pour le clavier : https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent

    // 1- Rechercher le rectangle.
    let rectangle = document.querySelector('#rectangle');
    // 2- Gérer les 4 touches du clavier fléchées pour déplacer en pixels le rectangle, en utilisant la propriété CSS left ou top.
    // let pressedKeyCode = event.keyCode;
    // 2-1 Pour chaque touche il faut récupérer la position avec https://developer.mozilla.org/fr/docs/Web/API/Window/getComputedStyle
    // 2-2 Il faut ajouter ou soustraire à chaque fois quelques pixels supplémentaires, en utilisant la propriété DOM style du rectangle.

    let pressedCode = event.code;

    let coordonneesGauche = window.getComputedStyle(rectangle).left;
    let coordonneesHaut = window.getComputedStyle(rectangle).top;

    switch (pressedCode) {
        case HAUT:
            rectangle.style.top = (parseInt(coordonneesHaut) - 20) + 'px';
            break;
        case BAS:
            rectangle.style.top = (parseInt(coordonneesHaut) + 20) + 'px';
            break;
        case DROITE:
            rectangle.style.left = (parseInt(coordonneesGauche) + 20) + 'px';
            break;
        case GAUCHE:
            rectangle.style.left = (parseInt(coordonneesGauche) - 20) + 'px';
            break;
        default:
            console.log(pressedCode);
    }
    // if (pressedKeyCode == TOUCHE_HAUT ) {
    //     rectangle.style.top = (parseInt(coordonneesHaut) - 20) + 'px';
    // } 
    // else if (pressedKeyCode == TOUCHE_BAS) {
    //     rectangle.style.top = (parseInt(coordonneesHaut) + 20) + 'px';
    // }
    // else if (pressedKeyCode == TOUCHE_DROITE) {
    //     rectangle.style.left = (parseInt(coordonneesGauche) + 20) + 'px';
    // }
    // else if (pressedKeyCode == TOUCHE_GAUCHE) {
    //     rectangle.style.left = (parseInt(coordonneesGauche) - 20) + 'px';
    // }
}


// 1- Rechercher le bouton
let bouton = document.querySelector('button');
// 2- Installer un gestionnaire d'évènements clic dessus, qui emmène vers onClickButton
bouton.addEventListener('click', onClickButton);
// 3- Installer un gestionnaire d'évènements sur toute la page, pour détecter les touches du clavier
document.addEventListener('keydown', onKeyDown);