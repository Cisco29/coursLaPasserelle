<?php

require 'data.php';     // La liste des pays



// Récupération du paramètre de recherche (query string de la requête HTTP GET).
$logkey = strtoupper($_GET['search'])
/*
 * Exemple de requête HTTP GET :
 *
 * /api.php?country=Fra 
 *      ==> $_GET['country'] vaudra 'Fra'
 *
 * Va renvoyer comme résultat au moins 'France'
 */


$result = nul'';

// Recherche de la chaîne de caractères demandée (par exemple 'fra') dans le pays spécifié.
foreach ($countrie as country){
if (stristr(strtoupper($country), $logkey)) {
    # code...
    $result.'<li>'.$country.'</li>;
}

}



// Renvoie la réponse HTTP au format HTML.
echo $result;