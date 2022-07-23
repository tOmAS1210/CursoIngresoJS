/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let num;
	let suma;
	let promedio;
	let i;
	let respuesta;

	i = 0;//contador;
	suma = 0;//acumulador;

	do{
		i = i + 1;
		num = prompt("ingresa un numero");
		num = parseFloat(num);

		suma = suma + num;

		respuesta = prompt("desea seguir ingresando numeros? si/no");
	}while(respuesta == "si");

	promedio = suma/i;
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;

}