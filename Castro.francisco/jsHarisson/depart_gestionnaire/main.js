// ------- FONCTIONS

function onClickItem(event)
{
    /*
     * event.currentTarget représente la balise qui a déclenché l'évènement
     * sur lequel on a installé le gestionnaire d'évènement de clic.
     */
    // 1- Récupération du fichier (le <li>) qui a déclenché l'évènement.
    let leLiSurLequelOnAClique = event.currentTarget;
    console.log(leLiSurLequelOnAClique);
    // 2- Activation ou désactivation de la classe CSS de sélection.
    leLiSurLequelOnAClique.classList.toggle('selected');
    
    // 3- Recherche de tous les éléments sélectionnés.
    let elementsSelectionnes = document.querySelectorAll('.selected');
    // 4- Mise à jour du message indiquant le nombre de fichiers sélectionnés.
    paragraphe.textContent = elementsSelectionnes.length + ' élément(s) sélectionné(s)';

}
function oneLi() {
    // // changer la classe du li
    // li.classList.toggle('selected');
}

// ------- CODE PRINCIPAL -------

// Intermédiaire: aller chercher le premier li
let li = document.querySelector('li');
// 1- Recherche de tous les <li> de la liste de fichiers.
let lis = document.querySelectorAll('.file-list li');
// 2- Recherche du paragraphe <p> affichant le nombre d'éléments sélectionnés.
let paragraphe = document.querySelector('p');
// 3- Boucle sur la liste de fichiers pour installer un gestionnaire d'évènement de clic (fonction onClickItem).
for (let index = 0; index < lis.length; index++) {
    lis[index].addEventListener('click', onClickItem);
    
}

// Intermédiaire 2: ajouter un écouteur/gestionnaire d'évènement
li.addEventListener('click', oneLi);