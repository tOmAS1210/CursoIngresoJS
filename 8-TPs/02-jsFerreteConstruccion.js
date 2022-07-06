/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

        let largo;
        let ancho;
        let perimetro;
    
        largo = parseInt(document.getElementById("txtIdLargo").value);
        ancho = parseInt(document.getElementById("txtIdAncho").value);
        perimetro = (largo + ancho) * 2;
    
        alert("la cantidad de alambre a comprar es: " + (perimetro * 3) + " metros");
    
    

}
function Circulo () 
{
    let radio;
    let resultado;

    radio = parseInt(document.getElementById("txtIdRadio").value);
    perimetro = (radio * 3.14 * 2);
    //ni idea lo que saldra de esto, pero es lo que hay jasjajs



    alert("la cantidad de alambre a comprar es: " +(perimetro * 3) + "metros");

}
function Materiales () 
{
    let largot;
    let anchot;
    let superficiet;
    let bolsacemento;
    let bolsacal;

    largot = parseInt(document.getElementById("txtIdLargo").value);
    anchot = parseInt(document.getElementById("txtIdAncho").value);
	
    superficiet = largot * anchot;
    bolsacemento = superficiet * 2;
    bolsacal = superficiet * 3;

    alert("se necesitan: " +bolsacemento +" bolsas de cemento y " +bolsacal +" bolsas de cal");

}