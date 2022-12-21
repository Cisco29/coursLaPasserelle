// --- Fonctions utilitaires
function getValues(selector){
    return document.querySelector(selector).value;
}

function fillValue(selector, chaineC) {
    document.querySelector(selector).value = chaineC;
}

function addContact(nom, prenom, tel, mail){
    let contact = {
        nom: nom,
        prenom: prenom,
        tel: tel,
        mail: mail
    };
    contacts.push(contact);
    //console.log(contacts);
}

function editContact(index,nom, prenom, tel, mail){
    let contact = {
        nom: nom,
        prenom: prenom,
        tel: tel,
        mail: mail
    };
    contacts.splice(index, 1,contact);
    //console.log(contacts);
}

function parseTab(lsKey){
    let stringTable = localStorage.getItem(lsKey);
    let savedContacts = JSON.parse(stringTable); 
    //console.log(savedContacts);
    return savedContacts;
}

function stringifyTab(lsKey, lsTab){
    let stringTable = JSON.stringify(lsTab);
    localStorage.setItem(lsKey, stringTable);  
}

