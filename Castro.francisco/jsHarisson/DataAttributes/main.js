// Variables et constantes globales

let studentsTab = ['Julien', 'Kévin', 'Nicolas M', 'Martin', 'Mohamed', 'Joseph', 'Virginie', 'Judes', 'Laura', 'Francisco', 'Ouissam', 'Noëmie', 'Joël', 'Nicolas T', 'Anthony', 'Vincent'];

// Elements du DOM
let maListe = document.querySelector('#students-list');

// Fonctions
function deleteStudent(event) {
    
    let iconClicked = event.currentTarget;

    // retire le nom du tableau

    // a. récupérer l'index de l'élément à supprimer
    let indexSuppr = iconClicked.getAttribute('data-index');
    console.log(indexSuppr);
    // supprimer l'élément dans le tableau
    studentsTab.splice(indexSuppr, 1);

    // rafraichir l'affichage
    refresh();
}

function refresh() {

    maListe.innerHTML = '';
    
    for (let i = 0; i < studentsTab.length; i++) {
        maListe.innerHTML += `<li>${ studentsTab[i] } <i class="fas fa-times" data-index="${ i }"></i></li>`
   }
   
   let mesIcones = document.querySelectorAll('i');
   for (let i = 0; i < mesIcones.length; i++) {
    mesIcones[i].addEventListener('click', deleteStudent);
    
   }
}

// code principal
refresh();