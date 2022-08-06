function mostrar()
{
	let numero;
	let i;
	let bandera;

	numero = prompt("ingrese un numero:");
	numero = parseInt(numero);
	bandera = 0;

	for(i=2; i<numero; i++)
	{
		if((numero%i)==0)
		{
			document.write(numero + " no es un numero primo");
			bandera = 1;
			break;
		}
	}
	if(bandera==0)
	{
		document.write(numero + " es primo");
	}
}//FIN DE LA FUNCIÓN