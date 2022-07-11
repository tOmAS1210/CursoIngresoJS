/*
thomas aguilar arguello
div x

Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	/*alert("Esto funciona de maravilla señores");*/

	let paloA; //variables usados para encontrar los metros del papel
	let paloC; 
	let papel;
	let metrospapel;


	let ladoA; // variables usadas para encontrar los metros necesarios a usar de palillos
	let ladoB;
	let ladoD;
	let ladobd;
	let ladoad;
	let suma79;
	let raiz79;
	let cmTotal;
	let barriletes10;
	let metros;
	let porcentaje10;
	let porcentajesuma;

	let papelcolor; //variable para usar en el barrilete de colores

	paloA = prompt("ingrese el valor del palillo vertical en centimetros");//centimetros
	paloC = prompt("ingrese el valor del palillo horizontal en centimetros");
	

	papel = (paloA * paloC) / 2;
	metrospapel = (papel * 1) / 100;
	alert("Se necesitan " + metrospapel + " metros de papel");
	//despues de sacar la medida necesaria para el cuerpo, acordate que a la cuerda se le debe agregar un 10%

	ladoA = prompt("ingrese el valor del palillo A");
	ladoB = prompt("ingrese el valor del palillo B");
	ladoD = prompt("ingrese el valor del palillo D");
	
	ladobd = (ladoB * ladoB) + (ladoD * ladoD);
	ladoad = (ladoA * ladoA) + (ladoD * ladoD);
	

	suma79 = ladobd + ladoad;


	raiz79 = Math.sqrt(suma79); // la funcion Math.sqrt() la use para sacar la raiz cuadrada de la suma de los lados bd y ad


	cmTotal = raiz79*2;
	
	barriletes10 = cmTotal * 10;
	metros = (barriletes10 * 1) / 100;

	alert("Se necesitan " + metros.toFixed(2) + " metros de varillas de plastico");
	

	porcentaje10 = (metrospapel * 10) / 100;
	porcentajesuma = porcentaje10 + metrospapel;


	alert("Los metros necesarios para construir la cola del barrilete es de " +porcentajesuma + " metros, que seria un 10% mas del que se necesita para el cuerpo.");

	papelcolor = metrospapel / 2;

	alert("Para el barrilete con 2 colores se necesitan " +papelcolor + " metros de papel para el color celeste y para el rosa");



}

