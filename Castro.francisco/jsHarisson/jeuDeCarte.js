// Créer un tableau vide, qui représentera notre paquet de cartes
let paquetdecartes = [];





// Créer un tableau qui va contenir les 4 couleurs
let couleur = ['trefle','pic','carreau','coeur'];

// Créer un tableau qui va contenir les figures

let figures = ['As','2','3','4','5','6','7','8','9','10','Valet','Dame','Roi'];

// Créer une fonction qui va générer un paquet de 52 cartes, et le ranger dans notre "paquet"

function generateurDePaquet() {
    for (let couleur = 0; couleur < couleur.length; index++) {
        for (let j = 0; j < figures.length; index++) {
            paquetdecartes.push(figures[j] +' de '+couleur)
            
        }
        
    }
    
    }

console.table(paquetdecartes)


// "As de Pique", "Dame de Carreau", "7 de trèfle"...

// Créer une fonction qui permet de tirer une carte au hasard dans le paquet

function tirageAleatoire(paquetdecartes) {
    let random = Math.floor(Math.random()*52);
    
}

console.log(paquetdecartes[random]);

// Créer un tableau vide qui représentera notre main

let main = []

// Créer une fonction qui permet de piocher la première carte du paquet

function piocherLaPremiere() {
    main.push(paquetdecartes.shift())
   
   
}
console.table(paquetdecartes);
console.table(main)


// Créer une fonction qui permet de piocher les X premières cartes du paquet

function piocherX(Xcartes) {
    main.push(paquetdecartes.splice(0,Xcartes));
}



// Intermédiaire : Créer une fonction qui permet de piocher une carte au hasard dans le paquet

function randomDraw() {
    let random = Math.floor(Math.random() * paquetdecartes.length);
    main.concat(paquetdecartes.splice(random, 1))
}

randomDraw ()
randomDraw ()
// Créer une fonction qui permet de piocher X cartes du paquet au hasard

function randomXcard(x) {
for (let i = 0; i < x; i++)
randomDraw()
}

// Créer une fonction qui permet de mélanger le paquet de cartes
// indice: si on pioche au hasard, au fur et à mesure, les différentes cartes d'un paquet de cartes, et qu'on les range dans un autre, on obtient donc une version mélangée du paquet
function mixeDeck() {
    


let tab =[]

for (let index = paquetdecartes.length; index < 0 ; index--) {
    let random = Math.floor(Math.random()* paquetdecartes.length);
    tab = tab.concat(paquetdecartes.splice(random, 1))
    
}

}
// je range mon paquet de carte le tableau qui contient les cartes
paquetdecartes = tab;
// autre maniere fisher:

//Pour i allant de n − 1 à 1 faire :
for (let i = paquetdecartes.lengt-1; i >= 1; i--) {
    

 //      j ← entier aléatoire entre 0 et i
let j = Math.floor(Math.random()* i);
       
 //      échanger a[j] et a[i]
let temp;
temp =paquetdecartes[i];
paquetdecartes[i] = paquetdecartes[j];
paquetdecartes[j] = temp;
}