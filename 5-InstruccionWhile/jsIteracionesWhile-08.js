/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let i;
	let suma;
	let multiplicacion;
	let respuesta;
	let vecesNeg;

	i = 0; //se inicializan contador;
	suma = 0;//acumulador;
	multiplicacion = 1;
	vecesNeg = 0;

	do{
		i = i + 1;
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);
		if(numero>=0)
		{
			suma = suma + numero;
		}
		else
		{
			vecesNeg = vecesNeg + 1;
			multiplicacion = multiplicacion * numero;
			
		}	
		respuesta = prompt("desea seguir ingresando un numero? si/no");
	}while(respuesta == "si");

	if(vecesNeg==0)
	{
		multiplicacion = 0;
	}

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdProducto").value = multiplicacion;

}//FIN DE LA FUNCIÓN