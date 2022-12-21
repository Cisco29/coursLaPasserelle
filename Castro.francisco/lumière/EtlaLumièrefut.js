let lightbulb = document.querySelector('img');
let toggleButton = document.querySelector('button');
// ou deuxieme façon
// let lightbulb = document.querySelector('#lightbulb');
// let toggleButton = document.querySelector('[button]');



function allummerLaLumiere() {
    lightbulb.src = 'images/on.png';
toggleButton.textContent = 'éteindre la lumiere';

}
function eteindreAmpoule() {
    lightbulb.src = 'images/off.png';
toggleButton.textContent = 'allumer la lumiere';
}

function gererampoule() {
if (toggleButton.textContent == 'éteindre la lumiere') {
eteindreAmpoule();

} else {
  allummerLaLumiere();
}

    
}



//toggleButton.addEventListener('click', allummerLaLumiere);
toggleButton.addEventListener('click', gererampoule);



