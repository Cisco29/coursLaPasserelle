let prenom;
let nom;




let tab = []
console.log(tab)
tab.push('ada');
tab.push('Lovelace');
tab.push(1815);


console.log(tab);
console.table(tab);

console.log(tab.length);
console.log(tab[1]);

// .pop: methode pour retirer le dernier élément d'un tableau//

tab.pop();
console.table(tab);

// pour ajouter un element au début d'un tableau//

tab.unshift('Alfred');
console.table(tab);

tab.push(1815);
tab.push(Math.PI);
console.table(tab);

// .splice méthode pour retirer un ou plusieurs éléments//

tab.splice(1, 2);
console.table(tab);


