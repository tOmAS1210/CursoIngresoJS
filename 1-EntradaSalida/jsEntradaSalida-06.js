/*
thomas aguilar arguello
div x

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros parseInt() y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1;
	let numero2;
	let resultado;

	//parseFloat(); convierte "texto" a numeros decimales
	//parseInt(); convierte "texto" a numeros enteros


	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	//numero1 = parseInt(numero1);
	//numero2 = parseInt(numero2);
	
	resultado = numero1 + numero2;
	
	alert("el resultado de la suma es de: " +resultado);


	/*let dolarBlue;
	let dolarOficial;
	let diferencia;
	let total;

	dolarBlue = document.getElementById("txtIdNumeroUno").value;
	dolarOficial = document.getElementById("txtIdNumeroDos").value;

	dolarBlue = parseInt(dolarBlue);
	dolarOficial = parseInt(dolarOficial);

	diferencia = (dolarBlue / dolarOficial) * 100;

	total = diferencia - 100;



	alert("la diferencia de porcentaje es de: " +total.toFixed(2));*/
	//ejercicio hecho el sabado





}

