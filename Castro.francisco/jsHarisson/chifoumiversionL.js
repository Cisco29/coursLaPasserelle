let prompt = require('prompt-sync')();


let question = true;

question = prompt('tu veux jouer?') == 'oui';




while(question ){
   
    
        let options = ['pierre' , 'feuille' , 'ciseaux'];
        let random = Math.floor(Math.random()*3);
        let choixOrdi = options[random];
    
        if (choixOrdi == joueur){
            console.log('Vous êtes execauts');
        }else if ((choixOrdi == 'feuille' && joueur == 'ciseaux')  (choixOrdi == 'ciseaux' && joueur == 'pierre')  (choixOrdi == 'pierre' && joueur == 'feuille')){
            
            console.log('Vous avez gagné, l\'ordi avait : '  + choixOrdi);
        } else {
            
            console.log(' perdu !, l\'ordi avait : ' + choixOrdi );
        }
        
    } 


