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

	/*espero asi sea el ejercicio, me tarde como 20 minutos probando un monton de cosas
	siempre poniendo "nombre" primero, seguido del = y el Id, hasta que mande el nombre
	al final, y me acabo funcionando como yo creo que debe de funcionar,
	si no es asi entonces tendre que esperar a mañana y ver como se hace jajajs*/

}

