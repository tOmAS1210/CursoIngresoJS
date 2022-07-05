/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precio1;
    let precio2;
    let precio3;
    let total;

    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
	
    total = precio1 + precio2 + precio3;

    alert("el total de los 3 precios es: " +total);




}
function Promedio () 
{
    let precio1;
    let precio2;
    let precio3;
    let total;

    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    total = (precio1 + precio2 + precio3)/3;

    alert("el promedio de los tres productos es: " +total);


    
	
}
function PrecioFinal () 
{
    let precio1;
    let precio2;
    let precio3;
    let sumatotal;
    let total;

    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);


    sumatotal = precio1 + precio2 + precio3;

    total = sumatotal + (sumatotal * 21 / 100);

    alert("el precio final (mas IVA 21%) es de: " +total);


    
	




}