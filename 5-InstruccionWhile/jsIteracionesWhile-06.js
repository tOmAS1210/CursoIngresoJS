function mostrar()
{
	let numero;
	let suma;
	let promedio;
	let i;

	i = 0;
	suma = 0;

	do{
		i = i + 1;
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);

		suma = suma + numero;
	}while(i<5);

	promedio = suma/i;
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;
	
}//FIN DE LA FUNCIÓN