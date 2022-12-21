// On vérifie d'abord que la clé accède bien à une valeur du localStorage
if (localStorage.getItem('nbrVisites') == null) {
    localStorage.setItem('nbrVisites', 0);
} 

// Je récupère ce qui est stocké dans le localStorage
let nombreDeVisites = localStorage.getItem('nbrVisites');

// Je fais mes petites opérations
console.log(nombreDeVisites);
nombreDeVisites++;

let monSpan = document.querySelector('span');
monSpan.textContent = nombreDeVisites;

// Je range dans le localStorage ma nouvelle valeur
localStorage.setItem('nbrVisites', nombreDeVisites);


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


