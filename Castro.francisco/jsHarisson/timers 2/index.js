// fonction à déclencher
function direBonjour() {
    console.log('Bonjour');
}

// Appel de la fonction en différé
setTimeout(direBonjour, 5000);

console.log('Et oui, je m\'affiche en premier');


// Appel de la fonction plusieurs fois en répétition
let monInterval = setInterval(direBonjour, 2000);

// Arrêt de l'interval dans 20s

setTimeout('clearInterval(monInterval)', 20000);

