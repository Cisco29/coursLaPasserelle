/*
 * L'objectif de l'exercice est d'avoir un champ de saisie de mot de passe
 * qui donne la possibilité d'afficher la saisie par le biais d'une icône sur
 * laquelle on clique (typiquement un oeil qui s'ouvre puis se ferme). C'est
 * important d'un point de vue UX afin de permettre l'utilisateur de vérifier
 * sa saisie surtout lorsque celle-ci est complexe (majuscules puis minuscules, etc).
 */

// ---- VARIABLES ET CONSTANTES GLOBALES

//let icon;       // L'objet DOM représentant la balise <i>
//let input;      // L'objet DOM représentant la balise <input>

let icon = document.querySelector('i');
let input = document.querySelector('input')
// ---- FONCTIONS

function showHide() {
    // changer l'icone ---> changer la classe de 
    icon.classList.remove('fa-eye');
    // ajouter la classe fa eye-slash
icon.classList.add('fa-eye-slash');





    // montrer le mot de passe --> changer le type d'input
   input.type = 'text'; 
}

