// --- Constantes et variables globales
const NOMCARNET = 'addressBook';

// Est-ce que j'ai déjà un tableau de contacts ?
if (restoreData(NOMCARNET) == null) {
    // Si non, j'en crée un vide dans le localStorage
    saveData(NOMCARNET, []);
}
// Je range dans ma variable carnet le contenu du localStorage
let carnet = restoreData(NOMCARNET);

// Maintenant, on affiche les éléments HTML correspondants à nos contacts du carnet
refresh();

// Objets DOM.
let saveBtn = document.querySelector('#save-contact');
let deleteBtn = document.querySelector('#delete-address-book');

// Le carnet d'adresses (tableau d'objets représentant chacun un contact).




// --- Fonctions du carnet d'adresses
function addContact(nom, prenom, mail, tel) {
    let contact = {
        lastname: nom,
        firstname: prenom,
        email: mail,
        phone: tel
    };

    carnet.push(contact);
}

function editContact(index, nom, prenom, mail, tel) {
    let contact = {
        lastname: nom,
        firstname: prenom,
        email: mail,
        phone: tel
    };

    carnet.splice(index, 1, contact);
}

function refresh() {
    // Récupérer la liste HTML
    let maListeHTML = document.querySelector('#address-book');
    // Vider la liste
    maListeHTML.innerHTML = '';

    for (let index = 0; index < carnet.length; index++) {
       maListeHTML.innerHTML += `
       <li class="card">
                <div class="card-body">
                    <i class="edit-contact fas fa-pen-to-square" data-index="${ index }"></i>
                    <i class="delete-contact fas fa-times" data-index="${ index }"></i>
                    <h5 class="card-title"> ${carnet[index].firstname} ${carnet[index].lastname} </h5>
                    <p class="card-text">${ carnet[index].phone }</p>
                    <p class="card-text">${ carnet[index].email }</p>
                </div>
            </li>
       `;
        
    }
    // Aller récupérer les boutons d'édition
    let editBtns = document.querySelectorAll('.edit-contact');
    let deleteBtns = document.querySelectorAll('.delete-contact');
    // Leur ajouter un gestionnaire d'évènements    
    for (let i = 0; i < editBtns.length; i++) {
        editBtns[i].addEventListener('click', edition);
        deleteBtns[i].addEventListener('click', deleteOne);
    }
}

function saveContact() {
    // 1. Récupérer les données du formulaire
    let nom = returnValue('#lastname');
    let prenom = returnValue('#firstname');
    let tel = returnValue('#phone');
    let mail = returnValue('#contactMail');
    // 2. Créer un nouveau contact
    if (saveBtn.dataset.mode == 'save') {
        addContact(nom, prenom, mail, tel);
    } else {
        // OU modifier un contact existant, selon le data-mode du bouton enregistrer
        editContact(saveBtn.dataset.index,nom, prenom, mail, tel);
        saveBtn.dataset.mode = 'save';
        saveBtn.textContent = 'Enregistrer';
    }

    // 2.5 sauvegarder le carnet dans le localStorage
    saveData(NOMCARNET, carnet);
    // 3. Mettre à jour l'affichage HTML
    refresh();
    // 4. Réinitialiser le formulaire
    let monFormulaire = document.querySelector('form');
    monFormulaire.reset();
}

function deleteAll() {

    if(confirm('Êtes-vous sur de vouloir vider le carnet d\'adresses ?')){
        // 1. Vider le carnet d'adresses
        carnet = [];
        // 2. Vider le localStorage
        // localStorage.clear();
        localStorage.removeItem(NOMCARNET);
        // 3. Actualiser l'affichage HTML
        refresh();

    }
}

function deleteOne(event) {

    let clickedIcon = event.currentTarget;


    if(confirm('Êtes-vous sur de vouloir supprimer ce contact ?')){
        // Supprimer l'élément de mon carnet d'adresses
        carnet.splice(clickedIcon.dataset.index, 1);

        // Enregistrer la modification dans le localStorage
        saveData(NOMCARNET, carnet);

        // Mettre à jour l'affichage HTML
        refresh();
    }
}

function edition(event) {
    let clickedIcon = event.currentTarget;

    let contactAEditer = carnet[clickedIcon.dataset.index];

    fillValue('#firstname', contactAEditer.firstname);
    fillValue('#lastname', contactAEditer.lastname);
    fillValue('#contactMail', contactAEditer.email);
    fillValue('#phone', contactAEditer.phone);

    // Passer le bouton enregistrer en "mode edit"
    saveBtn.dataset.mode = 'edit';
    saveBtn.textContent = 'Modifier'
    // Transférer l'index de l'élément à éditer au bouton de sauvegarde
    saveBtn.dataset.index = clickedIcon.dataset.index;
}

// --- Code principal.
saveBtn.addEventListener('click', saveContact);
deleteBtn.addEventListener('click', deleteAll);

