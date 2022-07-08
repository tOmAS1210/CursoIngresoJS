/*
thomas aguilar arguello
div x*/




function mostrar()
{

	// operadores logicos:
	// if significa una pregunta condicional
	// == consulta si algo es igual a otra cosa <-- tienen que ser del mismo tipo
	// != si algo es distinto de
	// > si un numero es mayor a otro
	// < si un numero es menor a otro
	// && analiza si dos condiciones o expreciones son verdaderas o falsas al mismo tiempo
	//		si tenemos dos condiciones y preguntamos usando un && (y) si la primera es flasa, la segunda ni se ejecuta
	// || (pipe) se utiliza como o y pregunta por todas las condiciones y con que una,
	// sea verdadera alcanza
	// BOOLEANOS -> true y false
	
	let edad;
	

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad == 15) //si se cumple la condicion que tenemos en el argumento, se ejecuta el segmento de codigo dentro de las llaves
	{
		alert("niña bonita");
	}

}//FIN DE LA FUNCIÓN