/*
thomas aguilar arguello
div x
*/

function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad<18 && edad>12)
	{
		alert("Usted es un adolescente");
	}


}//FIN DE LA FUNCIÓN