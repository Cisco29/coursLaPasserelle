// il faut d'abord créer une classe
import Canvas from './canvas.js';
class Painter {
    constructor(){
        this.nom = 'Mon super logiciel de dessin ! ';
        // recuperation du canvas
        this.canvas = new Canvas();
    }
}
document.addEventListener('DOMContentLoaded', (event) =>{
let painter = new Painter();
console.log(painter);
})