/*
thomas aguilar arguello
div x
*/

function mostrar()
{
	/*let edad;
	let estadocivil;


	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);


	estadocivil = document.getElementById("estadoCivil").value;

	if(edad<18 && estadocivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}*/

	let edad;
	let mensaje;

	edad = document.getElementById("txtIdEdad").value;

	if(edad<13)
	{
		mensaje = "Feliz dia";
	}
	else if(edad>12 && edad<18)
	{
		mensaje = "Usted es adolescente";

		if(edad == 17)
		{
			mensaje = mensaje + ", ultimo año";
		}
	}
	else if(edad>17)
	{
		mensaje = "tenes edad para laburar";
		if(edad == 33)
		{
			mensaje = mensaje + ", como cristo";
		}
		else if(edad>60)
		{
			mensaje = "A juvilarse";
			if(edad == 88)
			{
				mensaje = mensaje+ ", lindo numero";
			}
		}
	}
	if(edad % 2 == 0)
	{
		mensaje = mensaje + ", sos par";
	}




	alert(mensaje);

}//FIN DE LA FUNCIÓN