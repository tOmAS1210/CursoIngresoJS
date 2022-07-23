/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let numeros;
	let bandera;
	let banderaOne;
	let respuesta;
	let numnegativos;//1
	let numpositivos;//2
	let cantceros;
	let pares;
	let promedionegativo;
	let promediopositivo;
	let diferenciaposneg;
	
	bandera = 0;
	banderaOne = 0;
	numnegativos = 0;
	numpositivos = 0;
	cantceros = 0;
	pares = 0;

	do{
		numeros = prompt("ingrese un numero");
		numeros = parseInt(numeros);
		if(numeros<0)
		{
			numnegativos = numnegativos + numeros;
			bandera = bandera + 1;
			promedionegativo = numnegativos/bandera;
		}
		else
		{
			numpositivos = numpositivos + numeros;
			banderaOne = banderaOne + 1;
			promediopositivo = numpositivos/banderaOne;
		}
		if(numeros == 0)
		{
			cantceros = cantceros + 1;
		}
		else if((numeros % 2) == 0)
		{
			pares = pares + 1;
		}
		respuesta = prompt("quieres volver a ingresar un numero? s/n");
	}while(respuesta == "s");
	
	diferenciaposneg = numpositivos - (numnegativos);

	document.write("la diferencia entre numeros positivos y numeros negativos es de: " + diferenciaposneg);//9
	document.write("<br>"+"su cuenta es: " + numpositivos);//2
	document.write("<br>"+"la cantidad de positivos es: " + banderaOne);//3
	document.write("<br>"+"el promedio es de: " + promediopositivo);//7
	document.write("<br>"+"su cuenta es: " + numnegativos);//1
	document.write("<br>"+"la cantidad de negativos es: " + bandera);//4
	document.write("<br>"+"el promedio es de: " + promedionegativo);//8
	document.write("<br>"+"la cantidad de ceros es de: " + cantceros);//5
	document.write("<br>"+"la cantidad de pares es de: " + pares);//6
	

}//FIN DE LA FUNCIÓN