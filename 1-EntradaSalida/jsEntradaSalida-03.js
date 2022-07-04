/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;
	nombreingresado = document.getElementById("txtIdNombre").value;

	//nombreIngresado=txtIdNombre.value; asi solo en gugul, asi que no.

	alert("su nombre es: " +nombreingresado);

}


