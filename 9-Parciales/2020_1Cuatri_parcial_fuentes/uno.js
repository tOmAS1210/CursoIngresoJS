
/*
Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
-el nombre del producto
-el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
-el precio (validar entre 100 y 300),
-la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
-el tipo de inflamable("ignífugo", "combustible", "explosivo" ) 
-y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos*/
/*function mostrar()
{   let nombre;
	let tipoProducto;
	let precioProducto;
	let cantidadUnidades;
	let tipoInflamable;
	let marca;
	let promedioAlcohol;//contador
	let promedioIac;//contador
	let promedioQuat;//contador
	let cantidadAlcohol;//acumulador
	let cantidadIac;//acumulador
	let cantidadQuat;//acumulador
	let i;
	let bandera;
	let cantidadIgnifugo;
	let cantidadCombustible;
	let cantidadExplosivo;
	let unidadesIac;
	let precioMasCaro;
	let marcaMasCara;
	let productoMasCaro;



    

	cantidadAlcohol = 0;
	cantidadIac = 0;
	cantidadQuat = 0;
	bandera = 0;
	cantidadIgnifugo = 0;
	cantidadCombustible = 0;
	cantidadExplosivo = 0;
	unidadesIac = 0;
	precioMasCaro = 0;
	marcaMasCara = 0;
	productoMasCaro = 0;



	for(i=0; i<5; i++)
	{
		nombre = prompt("ingrese el nombre del producto");

		tipoProducto = prompt("ingrese el tipo de producto: ALCOHOL- IAC- QUAT");
		while(tipoProducto != "ALCOHOL" && tipoProducto != "IAC" && tipoProducto != "QUAT" )
		{
			tipoProducto = prompt("error. ingrese el tipo de producto: ALCOHOL- IAC- QUAT ");
		}

		precioProducto = prompt("ingrese el precio del producto, entre 100 y 300");
		precioProducto = parseInt(precioProducto);
		while(isNaN(precioProducto) ||	precioProducto>300 || precioProducto<100)
		{
			precioProducto = prompt("error. ingrese el precio del producto, entre 100 y 300 ");
			precioProducto = parseInt(precioProducto);
		}

		cantidadUnidades = prompt("ingrese la cantidad de unidades a comprar entre 1 y 1000");
		cantidadUnidades = parseInt(cantidadUnidades);
		while(isNaN(cantidadUnidades)	||	cantidadUnidades>1000 || cantidadUnidades<0)
		{
			cantidadUnidades = prompt("error. ingrese la cantidad de unidades a comprar, que sea mayor que 0 y que no supere las 1000 unidades ");
			cantidadUnidades = parseInt(cantidadUnidades);
		}
		
		tipoInflamable = prompt("ingrese el tipo de inflamable: ignifugo - combustible - explosivo");
		while(tipoInflamable != "ignifugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo")
		{
			tipoInflamable = prompt("error. ingrese el tipo de inflamable: ignifugo - combustible - explosivo");
		}

		marca = prompt("ingrese el nombre de la marca del producto");


		if(tipoProducto == "ALCOHOL")
		{
			cantidadAlcohol++;
		}
		if(tipoProducto == "IAC")
		{
			cantidadIac++;
		}
		if(tipoProducto == "QUAT")
		{
			cantidadQuat++;
		}

		//El tipo de inflamable con más cantidad de unidades en total de la compra

		if(tipoInflamable == "ignifugo")
		{
			cantidadIgnifugo += cantidadUnidades;
		}
		if(tipoInflamable == "combustible")
		{
			cantidadCombustible += cantidadUnidades;
		}
		if(tipoInflamable == "explosivo")
		{
			cantidadExplosivo += cantidadUnidades;
		}

		if(tipoProducto == "IAC" && precioProducto<201)
		{
			unidadesIac += cantidadUnidades;

		}

		if(bandera == 0)
		{
			precioMasCaro = precioProducto;
			productoMasCaro = tipoProducto;
			marcaMasCara = marca;
			bandera = 1;
		}
		else
		{
			if(precioProducto>precioMasCaro)
			{
				productoMasCaro = tipoProducto;
				marcaMasCara = marca;
			}

		}

	}
	
	promedioAlcohol = cantidadUnidades/cantidadAlcohol;
	promedioIac = cantidadUnidades/cantidadIac;
	promedioQuat = cantidadUnidades/cantidadQuat;
	document.write("el promedio de los productos de ignifugos es de: " + promedioAlcohol);
	document.write("<br> el promedio de los productos de combustible es de: " + promedioIac);
	document.write("<br> el promedio de los productos de explosivos es de: " + promedioQuat);
	if(cantidadIgnifugo>cantidadCombustible &&  cantidadIgnifugo>cantidadExplosivo)
	{
		document.write("<br> el tipo de inflamable con mas cantidad de unidades es el ignifugo con: " + cantidadIgnifugo);
	}
	if(cantidadCombustible>cantidadIgnifugo && cantidadCombustible>cantidadExplosivo)
	{
		document.write("<br> el tipo de inflamable con mas cantidad de unidades es el combustible con:" + cantidadCombustible);
	}
	if(cantidadExplosivo>cantidadIgnifugo && cantidadExplosivo>cantidadCombustible)
	{
		document.write("<br> el tipo de inflamable con mas cantidad de unidades es el explosivo con: " + cantidadExplosivo);
	}
	document.write("<br> la cantidad de IAC comprados es de: " + unidadesIac); 	
	document.write("<br> la marca mas cara es: " + marcaMasCara + " y el producto mas caro es: " + productoMasCaro);
 





}*/	//es mejor mostrar por document.write
/*
Realizar el algoritmo que permita ingresar los datos de los alumnos de una 
division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota
*/
/*function mostrar()
{
	let nombre;
	let tipoCursada;
	let cantidadMaterias;
	let sexo;
	let notaPromedio;
	let edad;
	let mensaje;
	let bandera;
	let banderaTwo;
	
	let mejorPromedioFemenino;

	let edadMasJoven;
	let nombreMejorPromedio;

	bandera = 0;
	banderaTwo = 0;
	edadMasJoven = 0;
	nombreMejorPromedio = 0;
	mejorPromedioFemenino = 0;

	do{
		nombre = prompt("ingrese su nombre");

		do{
			tipoCursada = prompt("ingrese el tipo de cursada  libre- prescencial- remota");
		}while(tipoCursada != "libre" && tipoCursada != "prescencial" && tipoCursada != "remota");

		do{
			cantidadMaterias = prompt("ingrese la cantidad de materias que cursa de 1 a 8");
			cantidadMaterias = parseInt(cantidadMaterias);
		}while(isNaN(cantidadMaterias)	||	cantidadMaterias<0 || cantidadMaterias>9);

		do{
			sexo = prompt("ingrese su sexo   masculino- femenino- no binario");
		}while(sexo != "femenino" && sexo != "masculino" && sexo != "no binario");

		do{
			notaPromedio = prompt("ingrese su nota, entre 0 y 10");
			notaPromedio = parseInt(notaPromedio);
		}while(isNaN(notaPromedio)	||	notaPromedio>11 || notaPromedio<0);

		do{
			edad = prompt("ingrese su edad entre 18 y 80 años");
			edad = parseInt(edad);
		}while(isNaN(edad)	||	edad<18 || edad>80);

		if(bandera == 0)
		{
			mejorPromedioFemenino = notaPromedio;
			bandera = 1;
		}
		else{
			if(notaPromedio>mejorPromedioFemenino && sexo != "masculino")
			{
				mejorPromedioFemenino = notaPromedio;
			}
		}

		if(banderaTwo==0 && tipoCursada == "libre")
		{
			edadMasJoven = edad;
			banderaTwo = 1;
			nombreMejorPromedio = nombre;
		}
		else{
			if(edad<edadMasJoven && tipoCursada == "libre")
			{
				edadMasJoven = edad;
				nombreMejorPromedio = nombre;
			}
		}
		mensaje = prompt("desea seguir ingresando datos? s/n");
	}while(mensaje == `s`);
	
	if(sexo!="masculino")
	{
	document.write("el mejor promedio femenino/binario es de: " + mejorPromedioFemenino);
	}
	if(edad == edadMasJoven)
	{
	document.write("<br>la edad del mas joven que da libre es de: " + nombreMejorPromedio);
	}
}*/





/*
Realizar el algoritmo que permita 
el ingreso por prompt de las notas 
(validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos,
el nombre e informar por alert:
a) El promedio de las notas totales.
b) La nota más baja , el nombre y  el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) la nota de la primer mujer ingresada y su nombre.
e) cantidad de aprobados de cada sexo (mas de 5)
f) el sexo que mas desaprobo
g) el promedio de notas de los aprobados
h) el promedio de notas de las mujeres 
*/
/*function mostrar()
{

	let notas;
	let sexo;
	let nombre;
	let i;
	
	let promedioNotas;//A
	promedioNotas = 0;


	let notaBaja;//B
	let bandera;
	let nombreNotaBaja;
	let sexoNotaBaja;
	bandera = 0;
	nombreNotaBaja = 0;
	sexoNotaBaja = 0;


	let cantidadVaronesNotas;//C
	cantidadVaronesNotas  = 0;

	let primerNotaMujer;//D
	let flag;
	let primerNombreMujer;
	flag = 0;
	primerNotaMujer = 0;
	primerNombreMujer = 0;

	let HombresAprobados;//E
	HombresAprobados = 0;
	let mujeresAprobadas;
	mujeresAprobadas = 0;

	let desaprobadas;//F
	let desaprobados;
	desaprobadas = 0;
	desaprobados = 0;

	let promedioAprobados;//G
	promedioAprobados = 0;

	let promedioNotasMujeres;//H
	promedioNotasMujeres = 0;
	let contadorNotasMujeres;
	contadorNotasMujeres = 0;

	
	for(i=0; i<5; i++)
	{
		do{
			notas = prompt("ingrese su nota de 0 a 10");
			notas = parseInt(notas);
		}while(notas>10 || notas<0);

		do{
			sexo = prompt("ingrese su sexo f/m");
		}while(sexo!="f" && sexo!="m");

		nombre = prompt("ingrese su nombre");
		alert("su nombre es: " + nombre);	

		promedioNotas += notas;

		if(bandera == 0)
		{
			notaBaja = notas;
			nombreNotaBaja = nombre;
			sexoNotaBaja = sexo;
			bandera = 1;
		}
		else
		{
			if(notas<notaBaja)
			{
				notaBaja = notas;
				nombreNotaBaja = nombre;
				sexoNotaBaja = sexo;
			}
		}

		if(sexo == "m" && notas>5)
		{
			cantidadVaronesNotas++;
		}

		if(sexo == "f" && flag == 0)
		{
			primerNotaMujer = notas;
			primerNombreMujer = nombre;
			flag = 1;
		}

		if(notas>5 && sexo == "m")
		{
			HombresAprobados++
		}
		if(notas>5 && sexo == "f")
		{
			mujeresAprobadas++
		}

		if(sexo<6 && sexo == "f")
		{
			desaprobadas++;
		}
		if(sexo<6 && sexo == "m")
		{
			desaprobados++
		}

		if(notas>5)
		{
			promedioAprobados += notas;
		}

		if(sexo == "f")
		{
			promedioNotasMujeres += notas;
			contadorNotasMujeres++
		}



	}

	promedioNotas = promedioNotas/i;

	document.write("el promedio de todas las notas es de: " + promedioNotas);
	document.write("<br> el alumno/a " + nombreNotaBaja + " se saco un: " + notaBaja + " y su genero es: " + sexoNotaBaja);
	document.write("<br> la cantidad de varones con una nota mayor o igual a 6 es de: " +cantidadVaronesNotas);
	document.write("<br> la nota de la primer mujer es de: " + primerNotaMujer + " y su nombre es: " + primerNombreMujer);
	document.write ("<br> la cantidad de alumnos aprobados es de: " + HombresAprobados + " y la cantidad de alumnas aprobadas es de: " + mujeresAprobadas);
	if(desaprobadas>desaprobados)
	{
		document.write("<br> la mayor cantidad de desaprobados lo tienen las mujeres");
	}
	else
	{
		document.write("<br> la mayor cantidad de desaprobados lo tienen los hombres");
	}

	promedioAprobados = promedioAprobados/i;
	document.write("<br> el promedio de aprobados es de: " + promedioAprobados);

	promedioNotasMujeres = promedioNotasMujeres/contadorNotasMujeres;
	document.write("<br> el promedio de las notas de las mujeres es de: " + promedioNotasMujeres);

}*/




/*
Realizar el algoritmo que permita 
el ingreso por prompt de las notas 
(validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos,
el nombre e informar por alert:
a) El promedio de las notas totales.
b) La nota más baja , el nombre y  el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) la nota de la primer mujer ingresada y su nombre.
e) cantidad de aprobados de cada sexo (mas de 5)
f) el sexo que mas desaprobo
g) el promedio de notas de los aprobados
h) el promedio de notas de las mujeres 
*/
function mostrar()
{
	let notas;
	let sexo;
	let nombre;
	
	let promedio;
	let i;
	let notasTotales;
	notasTotales = 0;

	let notaMasBaja;
	let bandera;
	bandera = 0;
	let nombreNotaBaja;

	let cantidadBarones;
	cantidadBarones = 0;


	let notaPrimerMujer;
	let nombrePrimerMujer;
	let flag;
	flag = 0;

	let cantidadAprobadosBarones;
	let cantidadAprobadosMujeres;
	cantidadAprobadosBarones = 0;
	cantidadAprobadosMujeres = 0;

	let desaprobadosMujeres;
	let desaprobadosHombres;
	desaprobadosHombres = 0;
	desaprobadosMujeres = 0;

	let promedioAprobados;
	promedioAprobados = 0;
	let totalAprobados;
	totalAprobados = 0;


	let promedioNotasMujeres;
	promedioNotasMujeres = 0;
	let cantidadMujeres;
	cantidadMujeres = 0;


	for(i=0; i<2; i++)
	{
		do{
		notas = prompt("ingrese la nota entre 0 y 10");
		notas = parseInt(notas);
		}while(isNaN(notas) || notas>10 || notas<0);

		do{
			sexo = prompt("ingrese su sexo f/m");
		}while(sexo!='m' && sexo!='f');

		nombre = prompt("ingrese su nombre");

		notasTotales += notas;


		if(bandera == 0)
		{
			notaMasBaja = notas;
			nombreNotaBaja = nombre;
			bandera = 1;
		}
		else
		{
			if(notas<notaMasBaja)
			{
				notaMasBaja = notas;
				nombreNotaBaja = nombre;
			}


		}

		if(sexo=='m' && notas>5)
		{
			cantidadBarones++;
		}


		if(flag == 0 && sexo == 'f')
		{
			notaPrimerMujer = notas;
			nombrePrimerMujer = nombre;
			flag = 1;
		}


		if(notas>5 && sexo == 'm')
		{
			cantidadAprobadosBarones++;
		}
		if(notas>5 && sexo == 'f')
		{
			cantidadAprobadosMujeres++;
		}

		if(sexo<6 && sexo == 'm')
		{
			desaprobadosHombres++;
		}
		if(sexo<6 && sexo == 'f')
		{
			desaprobadosMujeres++;
		}
		

		if(notas>5)
		{
			promedioAprobados = notas;
			totalAprobados++;
		}

		if(sexo=='f')
		{
			promedioNotasMujeres = notas;
			cantidadMujeres++
		}

	
	}




	promedio = notasTotales/i;

	document.write("el promedio de las notas es de: " + promedio);
	document.write("<br> el nombre es: " + nombreNotaBaja + " y tiene la nota mas baja que es de: " + notaMasBaja);
	document.write("<br> la cantidad de barones con una nota mayor a 6 es de: " + cantidadBarones);
	document.write("<br> la nota de la primer mujer ingresada es de: " + notaPrimerMujer + " y su nombre es: " +nombrePrimerMujer);
	document.write("<br> la cantidad de barones aprobados es de: " +cantidadAprobadosBarones + " y la cantidad de mujeres aprobadas es de: " +cantidadAprobadosMujeres);
	if(desaprobadosHombres>desaprobadosMujeres)
	{
		document.write("<br> los hombres fueron los que mas desaprobaron con: " + desaprobadosHombres + " desaprobados");
	}
	else
	{
		document.write("<br> los mas desaprobados fueron las mujeres con: " +desaprobadosMujeres + " desaprobados");
	}

	if(totalAprobados!=0)
	{
	promedioAprobados = promedioAprobados/totalAprobados;
	}
	else{
		promedioAprobados = "no hay aprobados";
	}
	document.write("<br> el promedio de los aprobados es de: " + promedioAprobados);
	
	if(cantidadMujeres!=0)
	{
	promedioNotasMujeres = promedioNotasMujeres/cantidadMujeres;
	}
	else
	{
		promedioNotasMujeres = "no hay ninguna mujer";
	}
	document.write("<br> el promedio de las mujeres es de: " +promedioNotasMujeres);
}