// --- Fonctions utilitaires

function returnValue(selector) {
    return document.querySelector(selector).value;
}

function savedata(key, carnet) {
// je transforme mon carnet en chaine de caractère
    let carnetStringified = JSON.stringify(carnet);
 // ranger la chaine de caractèere ds le localstorage
    localStorage.setItem(key, carnetStringified);
    
}


function restoreData(key) {
    // récupérer la chaine de caractére du local Storage
    let monCarnetString = localStorage.getItem(key);
    // transformer et renvoyer la chaîne en tableau
    return JSON.parse(monCarnetString);
    
}