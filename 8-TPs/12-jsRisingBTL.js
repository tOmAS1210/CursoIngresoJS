/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	let edad;
	let sexo;
	let estadoCivil;
	let textoEstadoCivil;
	let sueldoBruto;
	let legajo;
	let Nacionalidad;
	let textoNacionalidad;
	let respuesta;

	do
	{
		edad = prompt("ingrese su edad entre 18 y 90 años");
		edad = parseInt(edad);
		while((isNaN(edad)) || (edad>90 || edad<18))//A
		{
			edad = prompt("error. ingrese correctamente su edad, entre 18 y 90 años");
			edad = parseInt(edad);
		}
		document.getElementById("txtIdEdad").value = edad;

		sexo = prompt("ingrese su sexo m/f");
		sexo = sexo.toLowerCase();
		while(sexo != 'f' && sexo != 'm')//B
		{
			sexo = prompt("error. ingrese su sexo m/f");
			sexo = sexo.toLowerCase();
		}
		document.getElementById("txtIdSexo").value = sexo;

		estadoCivil = prompt("ingrese su estado civil 1.soltero 2.casado 3.divorciado 4.viudo"); //C
		estadoCivil = parseInt(estadoCivil);
		while(isNaN(estadoCivil) || estadoCivil>4 || estadoCivil<1)
		{
			estadoCivil = prompt("ingrese correctamente su estadocivil 1.soltero 2.casado 3.divorciado 4.viudo");
			estadoCivil = parseInt(estadoCivil);
		}
		switch(estadoCivil)//C
		{
			case 1:
				textoEstadoCivil = "soltero";
			break;
			case 2:
				textoEstadoCivil = "casado";
			break;
			case 3:
				textoEstadoCivil = "divorciado";
			break;
			case 4:
				textoEstadoCivil = "viudo"
			break;
		}
		document.getElementById("txtIdEstadoCivil").value = textoEstadoCivil;

		sueldoBruto = prompt("ingrese su sueldo bruto");//D
		sueldoBruto = parseInt(sueldoBruto);
		while(isNaN(sueldoBruto) || sueldoBruto<8000)
		{
			sueldoBruto = prompt("ingrese un sueldo mayor a 8 mil");
			sueldoBruto = parseInt(sueldoBruto);
		}

		document.getElementById("txtIdSueldo").value = sueldoBruto;

		legajo = prompt("ingrese su legajo de 4 cifras sin 0 en la izquierda");//E
		legajo = parseInt(legajo);
		while(isNaN(legajo)	|| legajo>9999 || legajo<999)
		{
			legajo = prompt("error. vuelve a ingresar el legajo sin 0 en la izquierda");
			legajo = parseInt(legajo);
		}
		document.getElementById("txtIdLegajo").value = legajo;

		Nacionalidad = prompt("ingrese su nacionalidad  A.argentinos E.extrangeros N.nacionalizados");//F
		Nacionalidad = Nacionalidad.toUpperCase();
		while(Nacionalidad != 'A' && Nacionalidad != 'E' && Nacionalidad != 'N')
		{
			Nacionalidad = prompt("error ingrese su nacionalidad  A.argentinos E.extrangeros N.nacionalizados");
			Nacionalidad = Nacionalidad.toUpperCase();
		}
		switch(Nacionalidad)
		{
			case 'A':
				textoNacionalidad = "Argentino"
			break;
			case 'E':
				textoNacionalidad = "Extrangero"
			break;
			case 'N':
				textoNacionalidad = "Nacionalizado"
			break;
		}
		
		
		document.getElementById("txtIdNacionalidad").value = textoNacionalidad;

		respuesta = prompt("desea continuar ingresando datos? s/n");
		respuesta = respuesta.toLowerCase;
	}while(respuesta == "s");

	
}