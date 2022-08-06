function mostrar()
{
	let numero;
	let i;
	let divisor;

	numero = prompt("ingrese un numero");
	numero = parseInt(numero);
	divisor = 0;

	for(i=1; i<=numero; i++)
	{
		if((numero%i)==0)
		{
			document.write("<br>" + "divisores: " + i);
			divisor++
		}
	}
	document.write("<br> cantidad de divisores: " + divisor);
}//FIN DE LA FUNCIÓN