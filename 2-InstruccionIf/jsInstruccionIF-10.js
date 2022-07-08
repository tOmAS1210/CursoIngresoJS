/*
thomas aguilar arguello
div x
*/
function mostrar()
{
	let random;
	random = Math.floor(Math.random()*11);
	
	if(random>8)
	{
		alert("Su nota es: " + random+ " EXELENTE");
	}
	else if(random>3)
	{
		alert("Su nota es: " + random+ " APROBÓ");
	}
	else
	{
		alert("Su nota es: " + random+ " Vamos, la proxima se puede");
	}


}//FIN DE LA FUNCIÓN