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
	let mensaje;
	let sueldoBruto;
	let legajo;
	let Nacionalidad;
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
		while(sexo != 'f' && sexo != 'm')//B
		{
			sexo = prompt("error. ingrese su sexo m/f");
		}
		document.getElementById("txtIdSexo").value = sexo;

		estadoCivil = prompt("ingrese su estado civil 1.soltero 2.casado 3.divorciado 4.viudo"); //C
		estadoCivil = parseInt(estadoCivil);
		while(isNaN(estadoCivil) || estadoCivil>4 || estadoCivil<0)
		{
			estadoCivil = prompt("ingrese correctamente su estadocivil 1.soltero 2.casado 3.divorciado 4.viudo");
			estadoCivil = parseInt(estadoCivil);
		}
		switch(estadoCivil)//C
		{
			case 1:
				mensaje = "soltero";
			break;
			case 2:
				mensaje = "casado";
			break;
			case 3:
				mensaje = "divorciado";
			break;
			case 4:
				mensaje = "viudo"
			break;
		}
		document.getElementById("txtIdEstadoCivil").value = mensaje;

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
		Nacionalidad.toLowerCase();
		while(Nacionalidad != 'A' && Nacionalidad != 'E' && Nacionalidad != 'N')
		{
			Nacionalidad = prompt("error ingrese su nacionalidad  A.argentinos E.extrangeros N.nacionalizados");
		}
		
		document.getElementById("txtIdNacionalidad").value = Nacionalidad;

		respuesta = prompt("desea continuar ingresando datos? s/n");
	}while(respuesta == "s");

	
}