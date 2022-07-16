function mostrar()
{
	let estaciones;
	let destino;
	let tarifa = 15000;
	let preciofinal;

	estaciones = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estaciones)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					preciofinal=((tarifa*120)/100);
				break;
				case "Cataratas":
				case "Cordoba":
					preciofinal=((tarifa*110)/100);
				break;
				case "Mar del plata":
					preciofinal=((tarifa*80)/100);
				break;
			}
		break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					preciofinal=((tarifa*80)/100);
				break;
				case "Cordoba":
				case "Cataratas":
					preciofinal=((tarifa*110)/100);
				break;
				case "Mar del plata":
					preciofinal=((tarifa*120)/100);
				break;
			}
		break;

		case "Otoño":
		case "Primavera":
			if(destino != "Cordoba")
			{
				preciofinal=(tarifa*110)/100;
			}
			else
			{
				preciofinal = tarifa;
			}
		break;
		
	}

	alert("el precio final de la estadia es: " +preciofinal);




}//FIN DE LA FUNCIÓN