/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let num;
	
	do{
	num = prompt("ingrese un numero entre 0 y 9");
	num = parseInt(num);
	}while(num>9 || num<0);
	
	document.getElementById("txtIdNumero").value = num;

}//FIN DE LA FUNCIÓN