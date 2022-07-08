/*
thomas aguilar arguello
div x
*/

function mostrar()
{
	let edad;
	let estadocivil;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadocivil = document.getElementById("estadoCivil").value;

	if(edad>17 && estadocivil == "Soltero")
	{
		alert("Es soltero y no es menor");
	}



	

}//FIN DE LA FUNCIÓN