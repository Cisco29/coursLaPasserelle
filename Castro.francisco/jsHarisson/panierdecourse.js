// Ici, on va créer un programme qui va nous permettre de gérer un panier de courses qui contient des fruits: Pomme, Orange, Mangue, etc...

// Créer une variable qui va contenir notre panier de fruits. Au début du programme, notre panier est vide

//let panier = new Array();



// Créer une fonction qui va nous permettre d'ajouter des éléments à notre panier de fruits

/*function ajouterFruit(fruit) {
    panier.push(fruit);
}
ajouterFruit('grenade');
ajouterFruit('figue');
ajouterFruit('banane');

console.table(panier);
/*
// Créer une fonction qui va nous permettre de vider notre panier de fruits
/*
function viderPanier(params) {
    panier = []
}
viderPanier();
console.table(panier);
*/
// Créer une fonction qui va nous permettre de chercher un fruit dans notre panier. Elle doit retourner soit l'index du fruit dans le panier, soit -1 (fruit non trouvé)

/*
/function recherche(fruit) {
    for (let index = 0; index < panier.length; index++) {
        if (fruit == panier [index]) {
            return index;
        }
        
    }
    return -1;
}
*/
// return panier.indexof(fruit);    code plus court pour ce qu'il y a au dessus


// Créer une fonction pour supprimer un fruit dans le panier. Attention, il faut bien vérifier que le fruit existe dans le panier avant de le supprimer

let panier = ['pomme', 'banane', 'figue'];


function supprimerFruit(fruit) {

    let controle = recherche(fruit);
    if (controle != -1) {
        panier.splice(controle,1);
        
    } else {
        console.log('ce fruit nest pas dans le panier!');

    }

    }
    supprimerFruit('pomme');
    
    console.table(panier);







// Modifier la fonction d'ajout des éléments au panier. Maintenant on souhaite que les fruits y soient en un seul exemplaire. Il faudra bien vérifier qu'un fruit n'est pas encore dans le panier avant de l'y ajouter


function ajoutERFRUIT(Fuit) {
    let controle = recherche(fruit)

    if (controle !=1) [
        console.log('ce fruit');
    ]
    
}





// Tester le programme au fur et à mesure

// BONUS: refaire l'exercice en utilisant un Set() plutôt qu'un Array()

let panierfruit = new set();
function ajouterFruitSet(fruit) {
    panierfruit.add(fruit)
}

ajouterFruitSet('poire');

ajouterFruitSet('poire');
ajouterFruitSet('Ananas');
ajouterFruitSet('peche')

console.log searchFruitset('poire') 




