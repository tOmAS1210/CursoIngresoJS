/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let Fahrenheit;
    let total;

    Fahrenheit = parseInt(document.getElementById("txtIdTemperatura").value);

    total = (Fahrenheit - 32) * 5/9;

    alert(Fahrenheit + " grados Fahrenheit son: " +total + " grados Centigrados");
}


function CentigradosFahrenheit () 
{
    let centigrados;
    let total;

    centigrados = parseInt(document.getElementById("txtIdTemperatura").value);

    total = (centigrados * 9/5) +32;

    alert(centigrados + " grados Centigrados son: " +total + " grados Fahrenheit");
	
}
