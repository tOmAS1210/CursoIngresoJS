function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
			alert("Se encuentra al Oeste de nuestro pais");
		break;
		case "Cataratas":
			alert("se encuentra al Norte de nuestro pais");ç
		break;
		case "Mar del plata":
			alert(" se encuentra al Este de nuestro pais");
		break;
		default:
			alert("se encuentra al Sur de nuestro pais");
		break;
	}
}//FIN DE LA FUNCIÓN