function mostrar()
{

	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("En este lugar hace mucho frio");
		break;
		case "Cataratas":
		case "Mar del plata":
			alert("En este lugar hace mucho calor");
		break;
	}





}//FIN DE LA FUNCIÓN