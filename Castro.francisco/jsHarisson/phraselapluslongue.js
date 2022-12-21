let prompt  = require('prompt-sync')();

/*
 * L'objectif de l'exercice est de rechercher automatiquement la phrase la plus longue dans
 * le tableau de phrases indiquées ci-dessous. Cela doit fonctionner peu importer le nombre
 * de phrases, l'ordre des phrases, si on ajoute ou on supprime des phrases du tableau, etc.
 * Lorsque la phrase la plus longue est trouvée, afficher cette phrase sur la page ainsi
 * que sa longueur.
 */

// 1 - prévoir de stocker le résultat: quelle est la phrase la plus longue, et où elle est rangée dans notre tableau

// 2 - indice: on peut connaître la longueur d'une chaine de caractères, de la même manière que l'on peut connaitre la longueur d'un tableau

// 3 - Il va donc falloir passer en revue toutes les phrase du tableau, et les comparer les unes aux autres au fur et à mesure pour déterminer quelle est la plus longue

const phrases =
[
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "Aenean commodo ligula eget dolor. Aenean massa.",
    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    "Nulla consequat massa quis enim.",
    "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
    "Nullam dictum felis eu pede mollis pretium.",
    "Integer tincidunt. Cras dapibus.",
    "Vivamus elementum semper nisi.",
    "Aenean vulputate eleifend tellus.",
    "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
    "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
    "Phasellus viverra nulla ut metus varius laoreet.",
    "Quisque rutrum. Aenean imperdiet.",
    "Etiam ultricies nisi vel augue.",
    "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "Aenean commodo ligula eget dolor. Aenean massa.",
    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.",
    "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    "Nulla consequat massa quis enim.",
    "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
    "Nullam dictum felis eu pede mollis pretium.",
    "Integer tincidunt. Cras dapibus.",
    "Vivamus elementum semper nisi.",
    "Aenean vulputate eleifend tellus.",
    "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
    "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
    "Phasellus viverra nulla ut metus varius laoreet.",
    "Quisque rutrum. Aenean imperdiet.",
    "Etiam ultricies nisi vel augue.",
    "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
    "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit ipsuminus max.",
    "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
    "Maecenas nec odio et ante tincidunt tempus.",
    "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.",
    "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.",
    "Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
    "Sed consequat, leo eget bibendum sodales, augue velit cursus nunc."
];




let phraselapluslongue = '';

for (let compteur = 0; compteur < phrases.length; compteur++) {
    if (phrases[compteur].length > phraselapluslongue.length) {
        phraselapluslongue = phrases[compteur];
    }
   
    
}

console.log('La phrase la plus longue du tableau est: ' + phraselapluslongue);
console.log('elle fait ' + phraselapluslongue);