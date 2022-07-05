/* 
thomas aguilar arguello
div x

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;	
	
	nombre = prompt("Ingrese el nombre que quiere imprimir");
	
	document.getElementById("txtIdNombre").value = nombre;



}

