/*document.write('<table>');

let letters = ['A', 'B', 'C', 'D'];

for (let i = 0; i < letters.length; i++) {
    document.write('<tr>');
    for (let j = 1; j <= letters.length; j++) {
        document.write(`<td> ${letters[i] + j} </td>`);
        
    } 
    document.write('</tr>')
}



document.write('</table>');
*/

document.write('<table>');

let nombre = ['1', '2', '3', '4', '5']

for (let ligne = 0; ligne < nombre.length; ligne++) {
    document.write('<tr>');
    for (let colonne = 1; j <= nombre.length; colonne++) {
        if (ligne == colonne){
            Document.write( `<td class="orange-text"> ${ligne*colonne} </td`);     
        } else{
            document.write(`<td> ${nombre[ligne] * colonne} </td>`); 
        }
        document.write(`<td> ${nombre[ligne] * colonne} </td>`);
        
    } 
    document.write('</tr>');
}




