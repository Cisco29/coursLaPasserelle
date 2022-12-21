// Faire en sorte que quand on clique sur le cookie, le texte change et nous affiche le nombre de cookies possédés. 1 clic = 1 cookie supplémentaire

// variables


let nbrCookie = localStorage.getItem('cookie');
let clicker = [];

if (localStorage.getItem('cookie')== null) {
    localStorage.setItem('cookie');
}
//fonctions
function ajouterCookie() {
   

    nbrCookie++;



// augmenter le nombre de cookies
// je sauvegarde mes cookies
localStorage.setItem('cookies', nbrCookie);


// changer le texte du paragraphe
paragraphe.textContent = nbrCookie + ' cookies'


}
// creer une fonction
function addClicker() {
    clicker.push(setInterval(ajouterCookie, 10000));
    pClicker


}



// ajouter un clicker qui ajoute un cookie toute les 10secondes

// pour ajouter un clicker il faut le payer, disons 10 cookies



// code principal


// recuperer l'image et le paragraphe
let img = document.querySelector('img');
let paragraphe = document.querySelector('p');

// recuperer le bouton
let bouton = document.querySelector('button');



// ajouter un gestionnaire de l'évènement de clic à l'image
img.addEventListener('click' , ajouterCookie);

// récupérer le nombre de clickers
let pClicker = document.querySelector

// ajouter un gestionnaire d'évènement de clic au bouton
bouton.addEventListener('click' , addClicker);

// On vérifie d'abord que la clé accède bien à une valeur du localStorage
if (localStorage.getItem('nbrClic') == null) {
    localStorage.setItem('nbrClic', 0);
 } 
 
 // Je récupère ce qui est stocké dans le localStorage
 let nombreDeClic = localStorage.getItem('nbrclic');
 
 // Je fais mes petites opérations
 console.log(nombreDeClic);
 nombreDeClic++;
 
 let monSpan = document.querySelector('span');
 monSpan.textContent = nombreDeClic;
 
 // Je range dans le localStorage ma nouvelle valeur
 localStorage.setItem('nbrClic', nombreDeClic);
 
 
 // Vérification
 if (localStorage.getItem('coLogs') == null) {
    let monTableauStringified = JSON.stringify([]);
    localStorage.setItem('coLogs', monTableauStringified);
 } 
 
 // Tableau JS
 let monTableauStringified = localStorage.getItem('coLogs');
 let connectionLogs = JSON.parse(monTableauStringified);
 connectionLogs.push(Date.now());
 console.log(monTableauStringified);
 
 // Stocker mon tableau de dates
 monTableauStringified = JSON.stringify(connectionLogs);
 localStorage.setItem('coLogs', monTableauStringified);
 