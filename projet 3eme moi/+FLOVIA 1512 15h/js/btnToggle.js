let imgAnimPluie = document.querySelector("#imgAnimPluie")
let toggleButton = document.querySelector('#toggle');
// ou deuxieme façon
 //let imgAnimPluie = document.querySelector('#imgAnimPluie');
 //let toggleButton = document.querySelector('[button]');


console.log(toggleButton);
function mettreLaCarteSvg() {
    imgAnimPluie.src = './img/logopictoicone/pluieanimate.svg';
toggleButton.textContent = 'Afficher en chart.js';

}
function mettreLaCarteEnChart() {

    imgAnimPluie.src = './img/graphique/index.html';
toggleButton.textContent = 'Afficher en Svg';
}

function gererLesCartes() {

    
if (toggleButton.textContent == 'Afficher en Svg') {
    mettreLaCarteSvg();
    //mettreLaCarteEnChart();

} else {
    //mettreLaCarteSvg();
    mettreLaCarteEnChart();
}

    
}



//toggleButton.addEventListener('click', mettreLaCarteSvg);
toggleButton.addEventListener('click', gererLesCartes);