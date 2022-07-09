/*
thomas aguilar arguello
div x
*/

function mostrar()
{

	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad>17)
	{
		alert("Usted es un adulto");
	}
	else if(edad>12)
	{
		alert("Ustes es un adolescente");
	}
	else
	{
		alert("Eres un niñoo");
	}







}//FIN DE LA FUNCIÓN