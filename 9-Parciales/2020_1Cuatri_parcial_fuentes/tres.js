function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let confirmacion;

	let personaConMasTemperatura;
	let temperaturaMasAlta;
	let bandera;
	bandera = 0;


	let mayoresViudos;
	mayoresViudos = 0;

	let hombresViudos;
	let hombresSolteros;
	hombresSolteros = 0;
	hombresViudos = 0;

	let personasTerceraEdadConFiebre;
	personasTerceraEdadConFiebre = 0;

	let edadesSolteros;
	edadesSolteros = 0;
	let totalesSolteros;
	totalesSolteros = 0;


	do{
		nombre = prompt("ingrese su nombre");

		do{
			edad = prompt("ingrese su edad entre 0 y 90 años");
			edad = parseInt(edad);
		}while(isNaN(edad) || edad>90 || edad<0);

		do{
			sexo = prompt("ingrese su sexo f/m");
		}while(sexo!= 'm' && sexo!= 'f');

		do{
			estadoCivil = prompt("ingrese su estado civil. soltero/casado/viudo");
		}while(estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo");

		do{
			temperaturaCorporal = prompt("ingrese su temperatura corporal entre 35 y 42 grados");
			temperaturaCorporal = parseInt(temperaturaCorporal);
		}while(isNaN(temperaturaCorporal) || temperaturaCorporal>42 || temperaturaCorporal<35);


		if(bandera==0)
		{
			personaConMasTemperatura = nombre;
			temperaturaMasAlta = temperaturaCorporal;
			bandera = 1;
		}
		else
		{
			if(temperaturaCorporal>temperaturaMasAlta)
			{
				personaConMasTemperatura = nombre;
				temperaturaMasAlta = temperaturaCorporal;
			}
		}

		if(edad>17 && estadoCivil == "viudo")
		{
			mayoresViudos++;
		}

		if(sexo=='m')
		{
			if(estadoCivil=="soltero")
			{
				hombresSolteros++;
			}
			if(estadoCivil=="viudo")
			{
				hombresViudos++;
			}
		}	


		if(edad>60 && temperaturaCorporal>38)
		{
			personasTerceraEdadConFiebre++;
		}

		if(estadoCivil=="soltero")
		{
			edadesSolteros += edad;
			totalesSolteros++;
		}


	confirmacion = prompt("desea ingresar datos de otra persona? s/n");
	}while(confirmacion == 's');

	document.write("la persona con mas temperatura es: " + personaConMasTemperatura);
	document.write("<br> la cantidad de adultos viudos es de: " +mayoresViudos);
	document.write("<br> la cantidad de hombres solteros es de: " +hombresSolteros + " y la cantidad de hombres viudos es de: " +hombresViudos);
	document.write("<br> la cantidad de hombres mayores de 60 con mas de 38 de temperatura son de: " +personasTerceraEdadConFiebre);
	edadesSolteros = edadesSolteros/totalesSolteros;
	document.write("<br> el promedio de edad de los solteros es de: " +edadesSolteros);

}
