

let paquetdecartes = [];
let couleur = ['trefle','pic','carreau','coeur'];
let figures = ['As','2','3','4','5','6','7','8','9','10','Valet','Dame','Roi'];



// Créer une fonction qui va générer un paquet de 52 cartes, et le ranger dans notre "paquet"

function generateurDePaquet() {
    for (let couleur = 0; couleur < couleur.length; index++) {
        for (let j = 0; j < figures.length; index++) {
            paquetdecartes.push(figures[j] +' de '+couleur)
            
        }
        
    }
    
    }

console.table(cartes)

// Créer une fonction qui permet de piocher la première carte du paquet

function piocherLaPremiere(couleur, figure,) {
     paquetdecartes.push(couleur,figure)
     paquetdecartes.shift(couleur, figures)

    
}
console.table(paquetdecartes);