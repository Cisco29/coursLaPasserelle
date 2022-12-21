<?php

/**
 * Vérifie si l'utilisateur existe bien en Base de donnée et enregistre son uid en session si c'est le cas
 *
 * @param string $email Email de l'utilisateur
 * @param string $password Mot de passe de l'utilisateur
 * @return integer Si les infos de connection sont correctes, l'uid de l'utilisateur, sinon 0
 */
function user_connect(string $email, string $password):int {

    // CHARGEMENT DE LA GLOBALE DATABASE

    // ÉCRITURE DU SQL POUR TROUVER LE MOT DE PASSE ET L'UID DE L'UTILISATEUR PAR SON EMAIL

    // DEMANDER À LA DATABASE DE PRÉPARER LA REQUÊTE SQL

    // EXÉCUTER LA REQUÊTE (AVEC EMAIL EN PARAMÊTRE)

    // SI $success N'EST PAS VRAI ALORS

        // RENVOYER 0

    // FIN SI

    // RÉCUPÉRER LE RÉSULTAT SOUS FORME DE TABLEAU ASSOCIATIF

    // SI LE MOT DE PASSE REÇU EN ARGUMENT DE LA FONCTION ET CELUI DANS LA BASE DE DONNÉES NE CORRESPONDENT PAS ALORS

        // RENVOYER 0 (ON A PAS LE BON MOT DE PASSE)

    // FIN SI

    // ENREGISTRER L'uid (TROUVÉ DANS LA BDD) VERS LA SESSION

    // RENVOYER L'uid 
    return 0;
}

/**
 * Déconnecte l'utilisateur (vide la session)
 *
 * @return void Rien
 */
function user_disconnect(){

    // PURGER TOUTES LES DONNÉES DE LA SESSION
    
}

/**
 * Vérifie si l'utilisateur est connecté
 *
 * @return boolean true si l'utilisateur est connecté
 */
function user_isConnected():bool{

    // RENVOYER TRUE SI $_SESSION['uid'] EST DÉFINI
    return false;
}

/**
 * Cherche un utilisateur dans la BDD par son uid et le renvoie
 *
 * @param integer $uid uid de l'utilisateur
 * @return array toutes les datas de l'utilisateur
 */
function user_getUserById(int $uid): array{

    // CHARGER LA GLOBALE $database

    // ÉCRIRE LE SQL (CHAINE DE CARACTÈRE)

    // DEMANDER À LA DATABASE DE PRÉPARER LA REQUÊTE SQL

    // ÉXÉCUTER LA REQUÊTE (AVEC UID EN PARAMÈTRE)

    // SI ÉCHEC DE LA REQUÊTE ALORS

        // RENVOYER UN TABLEAU VIDE

    // FIN SI

    // DEMANDER LE RESULTAT (UN SEUL) EN TABLEAU ASSOCIATIF

    // SI LE RESULTAT EST FALSE (UTILISATEUR PAS TROUVÉ) ALORS

        // RENVOYER UN TABLEAU VIDE

    // FIN SI

    // DÉTRUIRE LE MOT DE PASSE DANS LE RESULTAT (ON ENVOIE JAMAIS UN MOT DE PASSE SE PROMENER DIEU SAIT OÙ DANS LE CODE)

    // RENVOYER LE RESULTAT (C.À.D. L'UTILISATEUR ET TOUTES CES DATAS)
    return [];
}