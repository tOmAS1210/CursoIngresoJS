function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	 { 
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
		break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora el calorrrrr!!!!!!");
		break;
		default:
			alert("Falta para el invierno");
	 }

}//FIN DE LA FUNCIÓN