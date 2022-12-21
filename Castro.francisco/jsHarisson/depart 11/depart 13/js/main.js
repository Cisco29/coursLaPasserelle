// --- Constantes et variables globales
let carnet = [];
// Objets DOM.
let saveBtn = document.querySelector('#save-contact');
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

function refresh() {
    // Récupérer la liste HTML
    let maListeHTML = document.querySelector('#address-book');
    // Vider la liste
    maListeHTML.innerHTML = '';

    for (let index = 0; index < carnet.length; index++) {
       maListeHTML.innerHTML += `
       <li class="card">
                <div class="card-body">
                    <h5 class="card-title"> ${carnet[index].firstname} ${carnet[index].lastname} </h5>
                    <p class="card-text">${ carnet[index].phone }</p>
                    <p class="card-text">${ carnet[index].email }</p>
                </div>
            </li>
       `;
        
    }
}

function saveContact() {
    console.log('Coucou');
}


// --- Code principal.
saveBtn.addEventListener('click', saveContact);
