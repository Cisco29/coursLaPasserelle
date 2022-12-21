# Carnet d'adresses partie 3: Edit et Delete, data attributes

Dernière étape pour notre carnet d'adresses: on va ajouter une fonction d'édition pour chacune des fiches de contact, et une de suppression de carnet d'adresses au complet

## Fonctions utilities

- créer une fonction qui accepte en paramètres un selecteur CSS et une valeur (chaine de caractères), et qui va récupérer l'input correspondant au selecteur, pour remplir le champ avec la valeur

## HTML

- créer un bouton pour supprimer les contacts
- tester l'ajout d'un bouton d'édition sur les fiches contact

## Javascript principal

- créer une fonction qui va supprimer notre liste de contacts (bien penser à la supprimer aussi dans le local Storage)
Bonus: faire confirmer à l'utilisateur la suppression

### Data Attributes
https://www.alsacreations.com/article/lire/1397-attributs-data-et-api.html

- dans notre HTML, ajouter à notre bouton Enregistrer un attribut custom qui va représenter le "mode" du bouton: ajout, ou edition. Par défaut, on le met en mode ajout
- dans notre fonction refresh, rajouter l'icone d'édition à nos fiches contact. Chaque icone doit avoir un attribut custom représentant l'indice du contact en cours dans le tableau contacts
- à la fin de cette même fonction, ajouter les écouteurs d'évènements sur chacune de ces icones
optionnel: on peut utiliser une boucle for of

### Plus de fonctions

- créer une fonction qui prend en paramètre un *index* et nos 4 propriétés. Sur le modèle de la fonction de création, elle doit créer un nouvel objet contact, puis remplacer l'ancien objet (qui se trouve dans notre tableau contacts, à l'indice *index*)
indice: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

- créer la fonction qui se déclenche au clic sur les icones d'édition.
Cette fonction doit:
- prendre en paramètre notre evenement
- récupérer le data *index* de notre icone cible (ce qui revient à savoir sur l'icone de quel li l'utilisateur a cliqué)
- remplir le formulaire HTML avec les informations du contact rangé dans le tableau contacts à l'indice *index*
- faire passer le bouton de sauvegarde en mode edit
- ajouter au bouton de sauvegarde un data index (pour garder en mémoire l'élément à modifier)

- modifier la fonction de sauvegarde
Au moment où on créait le contact, faire un test:
- Si le bouton de sauvegarde est en mode ajout, faire comme avant
- Sinon, appeler la fonction d'edition à la place (en récupérant l'index du bouton de sauvegarde) et remettre le bouton de sauvegarde en mode ajout

OUF, c'est fini !