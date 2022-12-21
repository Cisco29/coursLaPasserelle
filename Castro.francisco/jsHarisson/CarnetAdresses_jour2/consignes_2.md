# Carnet d'adresses partie 2: localStorage

Pour rendre notre carnet d'adresses encore plus complet, nous allons maintenant rendre les données persistantes grâce au local Storage !

https://www.alsacreations.com/article/lire/1402-web-storage-localstorage-sessionstorage.html

## Utilities

- créer une fonction qui acceptera pour paramètre un nom (chaîne de caractères) et notre carnet d'adresses, et qui sauvegardera notre carnet d'adresses dans le local storage sous le nom qu'on lui a donné
- créer une fonction qui acceptera pour paramètre un nom, et qui retournera l'objet correspondant à ce nom dans le localStorage

## Javascript principal

- créer une constante Javascript qui va contenir le nom de notre carnet d'adresses dans le local Storage

- dans notre fonction de sauvegarde, sauvegarder le tableau de contacts mis à jour dans le localStorage

- Dans la partie "code principal", effectuer un test conditionnel pour vérifier si notre carnet d'adresses existe déjà dans notre localStorage. S'il n'existe pas, il faut donc le créer. S'il existe déjà, il faut récupérer ses données et les mettre dans notre tableau contacts. (ne pas oublier de rafraichir l'affichage ensuite)