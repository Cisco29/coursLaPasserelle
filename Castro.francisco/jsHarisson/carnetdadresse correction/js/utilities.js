// --- Fonctions utilitaires

function returnValue(selector) {
    return document.querySelector(selector).value;
}

function fillValue(selector, chaineC) {
    document.querySelector(selector).value = chaineC;
}



function saveData(key, carnet) {
    // Je transforme mon carnet en chaîne de caractères
    let carnetStringified = JSON.stringify(carnet);
    // Ranger la chaîne dans le localStorage
    localStorage.setItem(key, carnetStringified);
}

function restoreData(key) {
    // Récupérer la chaîne de caractères du local Storage
    let monCarnetString = localStorage.getItem(key);
    // Transformer la chaîne en tableau, puis la renvoyer
    return JSON.parse(monCarnetString);
}