function mostrar()
{
	let mesDelAño;
	
	mesDelAño = document.getElementById("txtIdMes").value;

	/*if(mesDelAño == "Enero")
	{
		alert("Que comiences bien el año");	
	}
	else if(mesDelAño == "Marzo")
	{
		alert("A clasesssssss");
	}
	else if(mesDelAño == "Julio")
	{
		alert("Se vienen las vacaciones");
	}
	else if(mesDelAño == "Diciembre")
	{
		alert("Felices fiestas");	
	}*/

	switch(mesDelAño)
	{
		case "Enero": 
			alert("Que comiences bien el año");
		break;
		case "Marzo":
			alert("A clasesssssss");
		break;
		case "Julio":
			alert("Se vienen las vacaciones");
		break;
		case "Diciembre":
			alert("Felices fiestas");
		break;
		default:
			alert("Pibe, pone los meses que dice el enunciado para poder ver los mensajes, no los demas cuchaste?");
		break;
	}
	/*
	case"si":
	case"sal":alert()       sirve para que en el caso de que se use el primer case, tambien se publique el mensaje del seg
	*/


} //FIN DE LA FUNCIÓN