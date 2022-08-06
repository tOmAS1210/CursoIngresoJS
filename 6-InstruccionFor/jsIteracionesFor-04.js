function mostrar()
{
	let i;
	let numero;

	numero = prompt("ingrese un numero");
	numero = parseInt(numero);

	for(i=0; i < numero; i++)
	{
		alert(numero);
	}
	alert("break en: " + i);

}//FIN DE LA FUNCIÓN