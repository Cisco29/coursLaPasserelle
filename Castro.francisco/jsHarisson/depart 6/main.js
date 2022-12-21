/*
 * L'objectif de l'exercice est de réaliser un diaporama de photos qui s'affichent les
 * unes après les autres, toutes les 5 secondes. Puis ensuite de revenir à la première
 * photo et de recommencer, à l'infini. C'est ce qu'on appelle un carousel de photos.
 */

// ---- VARIABLES ET CONSTANTES GLOBALES

       // Numéro de la photo courant affichée (indice dans le tableau ci-dessous)
            // Tableau d'objets DOM représentant les balises <img>



// ---- FONCTIONS
// fonction défilement automatique
// 1 retirer la classe visible à la photo en cours
// 2 passer à la photo suivante du tablleau 
// 3 lui donner la classe visible



// ---- CODE PRINCIPAL

// rechercher mes images et les récuperer coté javascript

//pré-fonction: initialiser currentPhoto


// ici utiliser le setinterval pour lancer la fonction qui va créer l'effet diapo

let photos = document.querySelectorAll('img');
let currentPhoto = 0;
let nextBtn =document.querySelector('#next');
function enleverImage() {
for (let index = 0; index < photos.length; index++) {
   photos[index].style.display = 'none';

}
}

function nextImage() {
enleverImage();
photos[currentPhoto+1].style.display = 'block';
    currentPhoto ++;
    if (currentPhoto == photos.length-1) {
        currentPhoto = -1;
}
}




setInterval(nextImage, 5000);