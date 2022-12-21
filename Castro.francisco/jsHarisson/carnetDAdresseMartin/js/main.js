// --- Constantes et variables globales

// Objets DOM.

saveBtn = document.querySelector('#save-contact');
deleteBtn = document.querySelector('#delete-address-book');
addressBook = document.querySelector('#address-book');

// Le carnet d'adresses (tableau d'objets représentant chacun un contact).
let contacts = [];
const lsContactsKey = 'carnet';

// --- Fonctions du carnet d'adresses
function refresh(){
    addressBook.innerHTML = "";

    for(i = 0; i < contacts.length; i++){
        addressBook.innerHTML += 
    `<li class="card">
        <div class="card-body">
            <i class="del-contact fa-solid fa-trash-can data-index="${i}"></i>
            <i class="edit-contact fas fa-pen-to-square" data-index="${i}"></i>
            <h5>${contacts[i].nom} ${contacts[i].prenom}</h5>
            <p class="card-text">${contacts[i].tel}</p>
            <p class="card-text">${contacts[i].mail}</p>
        </div>
    </li>`;
    }
    editBtns = document.querySelectorAll('.edit-contact');
    for (let index = 0; index < editBtns.length; index++) {
       editBtns[index].addEventListener('click', edition);
        
    }
    supBtns = document.querySelectorAll('.del-contact');
    for (let index = 0; index < editBtns.length; index++) {
       supBtns[index].addEventListener('click', deletOneCon);
        
    }
}

    function saveContact(){
    nom = getValues('#nom');
    prenom = getValues('#prenom');
    tel = getValues('#tel');
    email = getValues('#email');
    if (saveBtn.dataset.mode == "edit") {
        editContact(saveBtn.dataset.index, nom, prenom, tel, email);
        saveBtn.dataset.mode = "save";


    } else{    
        addContact(nom, prenom, tel, email);
        
    }
    stringifyTab(lsContactsKey, contacts);
    refresh();

    let myForm = document.querySelector('form');
    myForm.reset();
}



function openAddressBook(){
    contacts = parseTab(lsContactsKey);
    refresh();
}

function deleteContact() {
    if (window.confirm("Do you really want to erase?")) {
        //Suppression de l'affichage HTML
        addressBook.innerHTML = "";
        //SUppression de tableau de contact
        //localStorage.clear();
        
        contacts = [];
        //On vide le local storage en lui sauvegardant le tableau vide
        stringifyTab(lsContactsKey, contacts);
    }
    
}

function edition(event) {

let clickedIcon = event.currentTarget;
let ContactAEditer = contacts[clickedIcon.getAttribute('data-index')];

    fillValue('#prenom', ContactAEditer.prenom);
    fillValue('#nom', ContactAEditer.nom);
    fillValue('#email', ContactAEditer.mail);
    fillValue('#tel', ContactAEditer.tel);

//passer le bouton enregistrer en mode edit
saveBtn.dataset.mode = "edit";
// transferer 
saveBtn.dataset.index = clickedIcon.getAttribute('data-index')
}

function deletOneCon(event) {
    let clickedIcon = event.currentTarget;
    contacts.splice(clickedIcon.dataset.index, 1);
    // enregister la modif dans le localStorage
    stringifyTab(lsContactsKey, contacts);
    // mettre à jour 
    refresh();
}



// --- Code principal.
if(localStorage.getItem(lsContactsKey) == null){
    let stringTable = JSON.stringify([]);
    localStorage.setItem(lsContactsKey, stringTable);
}


openAddressBook();

saveBtn.addEventListener('click', saveContact);
deleteBtn.addEventListener('click', deleteContact);
