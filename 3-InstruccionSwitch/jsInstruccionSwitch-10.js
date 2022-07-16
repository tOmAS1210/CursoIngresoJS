function mostrar()
{
	let estaciones;
	let destino;
	let mensaje;

	estaciones = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estaciones)
	{	
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					mensaje="Se viaja";
				break;
				default:
					mensaje="No se viaja";
				break;
			}
		break;
		case "Verano":
			switch(destino)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje="Se viaja";
				break;
				default:
					mensaje="No se viaja";
				break;
			}
		break;
		case "Otoño":
			switch(destino)
			{
				default:
					mensaje="Se viaja";
				break;
			}
		break;
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					mensaje="No se viaja";
				break;
				default:
					mensaje="Se viaja";
				break;
		}
		break;
	
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN