function mostrar()
{
	let numero;
	let i;
	
	for(;;)
	{
		numero = prompt("ingrese el 9, si no se le volvera a pedir");
		numero = parseInt(numero);

		if(numero==9)
		{
			alert("break");
			break;
		}
	}

}//FIN DE LA FUNCIÓN