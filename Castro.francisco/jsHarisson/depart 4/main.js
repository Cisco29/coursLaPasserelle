// ------- FONCTIONS
    function onClickItem(event) {
        
    

    /*
     * event.currentTarget représente la balise qui a déclenché l'évènement
     * sur lequel on a installé le gestionnaire d'évènement de clic.
     */

    // 1- Récupération du fichier (le <li>) qui a déclenché l'évènement.
      let  liClick = event.currentTarget;





    // 2- Activation ou désactivation de la classe CSS de sélection.
    liClick.classList.toggle('selected');


    // 3- Recherche de tous les éléments sélectionnés.
    let Li = document.querySelectorAll('.selected');
    
    for (let index = 0; index < li.length; index++) {
 
        li[index].addEventListener('selected',bkg);
    }
// 4- Mise à jour du message indiquant le nombre de fichiers sélectionnés.

    paragraphe.textContent = li.length + 'elements selectiones';

}




    function bkg(event) {
    console.log(event);
    let liClick = event.currentTarget;
    liClick.classList.toggle('selected');
}



// ------- CODE PRINCIPAL -------

// 1- Recherche de tous les <li> de la liste de fichiers.
let li = document.querySelectorAll('li');


// 2- Recherche du paragraphe <p> affichant le nombre d'éléments sélectionnés.
let paragraphe = document.querySelector('p');

// 3- Boucle sur la liste de fichiers pour installer un gestionnaire d'évènement de clic (fonction onClickItem).

for (let index = 0; index < li.length; index++) {
 
    li[index].addEventListener('click',bkg);
}


 




