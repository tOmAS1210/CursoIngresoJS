/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let numero;
	let maximo;
	let minimo;
	let respuesta;
	let bandera;

	bandera = 0;

	do{
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);
		if(bandera == 0)
		{
			minimo = numero;
			maximo = numero;
			bandera = 1;
		}
		else
		{
			if(numero<minimo)
			{
				minimo = numero;
			}
			if(numero>maximo)
			{
				maximo = numero;
			}
		}

		respuesta = prompt("desea ingresar mas numeros? si/no");
	}while(respuesta == "si");

	document.getElementById("txtIdMaximo").value = maximo; 
	document.getElementById("txtIdMinimo").value = minimo;


}//FIN DE LA FUNCIÓN