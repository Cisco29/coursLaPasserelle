// recuperation des elements
let monImg = document.querySelector('img');
let monTitre = document.querySelector('h1');


function ChangerImage() {
   console.log(monImg);
    
   if (monImg.src.includes('nuage')) {
    monImg.src = 'image/nuage';
 }  else {
    monImg.src = 'image/akatsuki';
 }
}


 



// gestionnaire d evenements
monImg.addEventListener('click', ChangerImage);

function ChangerCouleur() {
    monTitre.classList.add('blue');
    
}