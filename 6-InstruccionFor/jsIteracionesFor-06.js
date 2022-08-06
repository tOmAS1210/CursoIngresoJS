function mostrar()
{
	let numero;
	let i;
	let par;

	numero = prompt("ingrese un numero par");
	numero = parseInt(numero);
	par = 0;

	for(i=1; i<numero; i++)
	{
		if((i%2)==0)
		{
			document.write("<br>" + "numero par: " + i);
			par++
		}
	}
	document.write("<br> cantidad de pares: " + par);
}//FIN DE LA FUNCIÓN