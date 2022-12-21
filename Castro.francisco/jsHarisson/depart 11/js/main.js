// --- Constantes et variables globales
//let carnet = []
const NOMCARNET = 'addressBook';
// Objets DOM.
let saveBtn = document.querySelector('save-contact');
// Le carnet d'adresses (tableau d'objets représentant chacun un contact).
let contacts = document.querySelector('contacts');
let name = document.querySelector('name');
let numberPhone = document.querySelector('téléphone');

let email = document.querySelector('contactMail');

if (restoreData(MONCARNET)== null) {
   savedata(MONCARNET, []);
}
let carnet = restoreData(MONCARNET);

// fonction du carnet d'adresse
function addcontact(nom, prenom,mail,tel) {
   let contact = {
lastname: nom,
firstname: prenom,
email: mail,
phone: tel,
};
   carnet.push(contact) 
}

function refresh() {
    let maListHtml = document.querySelector('#address-book');
   // Vider la liste HTML
      maListHtml.innerHTML = '';
   // Faire une boucle pour afficher les nouveaux li
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

// --- Fonctions du carnet d'adresses
function saveContact() {
    // 1 recupere les données du formulaire
   let nom = returnValue ('#lastname');
   let prenom = returnValue ('#firstname');
   let tel = returnValue ('#phone');
   let mail = returnValue ('#contactMail');


    // creer un nouveau contact 
   addcontact(nom, prenom, tel, mail);

   // sauvegarder 
   savedata(MONCARNET, carnet);

    //mettre à jour l'affichage html
   refresh();
   //réinitialiser le formulaire
   let monFormulaire = document.querySelector('form');
   monFormulaire.reset();
}
//créer une constante Javascript qui va contenir le nom de notre carnet d'adresses dans le local Storage
   let  nameCarnetData = JSON.stringify(carnet); 



//dans notre fonction de sauvegarde, sauvegarder le tableau de contacts mis à jour dans le localStorage
function saveContact() { 
   JSON.stringify(carnet)

}
   

// Dans la partie "code principal", effectuer un test conditionnel pour vérifier si notre carnet d'adresses existe déjà dans notre localStorage. S'il n'existe pas, il faut donc le créer. S'il existe déjà, il faut récupérer ses données et les mettre dans notre tableau contacts. (ne pas oublier de rafraichir l'affichage ensuite)



// --- Code principal.
saveBtn.addEventListener('click', saveContact);

if ( localStorage.getItem(MONCARNET) == null   ) {
   savedata(MONCARNET, []);
let carnet = restoreData



