/*
thomas aguilar arguello

div x

Enviamos el ejercicio 1 del examen de ingreso.
1)De una Red Social se debe ingresar una cantidad indeterminada de interacciones diaria de usuarios, validando los siguientes datos:
nombre de usuario, 
edad, 
cantidad de likes, 
tipo(“INVITADO” o “VIP”)
Informar:
a)El nombre del usuario de tipo “VIP” más joven.

b)La cantidad total de likes del día.

c)Promedio total de likes de los usuarios del tipo “INVITADO”.

Pedir datos por prompt y mostrar por document.write
*/
/*function mostrar()
{
	let nombreUsuario;
	let edad;
	let cantidadLikes;
	let tipo;
	let confirmacion;


	let nombreVipMasJoven;
	let bandera;
	bandera = 0;
	let edadMasJoven;
	nombreVipMasJoven = 0;

	let likesTotales;
	likesTotales = 0;

	let promedioLikes;
	let likesInvitados;
	promedioLikes = 0;
	likesInvitados = 0;
	let promedioFinal;


	do{
		nombreUsuario = prompt("ingrese su nombre de usuario");

		do{
		edad = prompt("ingrese su edad. entre 16 hasta los 90");
		edad = parseInt(edad);
		}while(isNaN(edad) || edad<16 || edad>90);

		do{
			cantidadLikes = prompt("ingrese la cantidad de likes");
			cantidadLikes = parseInt(cantidadLikes);
		}while(isNaN(cantidadLikes));

		do{
			tipo = prompt("ingrese su tipo de usuario. INVITADO / VIP");
		}while(tipo!="INVITADO" && tipo!="VIP");

		if(tipo == "VIP")
		{
			if(bandera==0)
			{
				nombreVipMasJoven = nombreUsuario;
				edadMasJoven = edad;
			}
			else
			{
				if(edad<edadMasJoven)
				{
					nombreVipMasJoven = nombreUsuario;
					edadMasJoven = edad;
				}
			}

		}

		likesTotales += cantidadLikes;


		if(tipo == "INVITADO")
		{
			likesInvitados += cantidadLikes;
			promedioLikes++; 
		}


		confirmacion = prompt("desea seguir ingresando datos? s/n");
	}while(confirmacion=='s');

	document.write("el nombre del usuario VIP mas joven es: " + nombreVipMasJoven);
	document.write("<br> la cantidad de likes totales del dia de hoy es de: " + likesTotales);
	promedioFinal = likesInvitados/promedioLikes;
	document.write("<br> el promedio de likes de los INVITADOS es de: " + promedioFinal);

}*/





/*
thomas aguilar arguello
div x



2)De 10 corredores de moto se deben tomar y validar los siguientes datos del Enduro del Vera
nombre, 
edad, 
tiempo(dato entero expresado en segundos),
sexo.
informar:
a)El nombre del hombre con mas tiempo(si lo hay).

b)El promedio de la edad de todos los participantes.

c)La cantidad de corredores de sexo femenino.

Pedir datos por prompt y mostrar por document.write
*/

/*function mostrar()
{
	let nombre;
	let edad;
	let tiempo;
	let sexo;
	let i;

	let nombreConMasTiempo;
	let bandera;
	bandera = 0;
	let tiempoMasLargo;


	let promedioEdadesTotales;
	promedioEdadesTotales = 0;
	let participantestotales;
	participantestotales = 0;

	let cantidadCorredoras;
	cantidadCorredoras = 0;



	for(i=0; i<10; i++)
	{
		nombre = prompt("ingrese el nombre del corredor");

		do{
			edad = prompt("ingrese su edad, mayor o igual a 18 años");
			edad = parseInt(edad);
		}while(isNaN(edad) || edad<18 || edad>85);

		do{
		tiempo = prompt("ingrese el tiempo del recorrido expresado en segundos");
		tiempo = parseInt(tiempo);
		}while(isNaN(tiempo));

		do{
			sexo = prompt("ingrese su sexo. m/f");
		}while(sexo!='m' && sexo!='f');

		if(sexo=='m')
		{
			if(bandera==0)
			{
				nombreConMasTiempo = nombre;
				tiempoMasLargo = tiempo;
				bandera = 1;
			}
			else
			{
				if(tiempo>tiempoMasLargo)
				{
					nombreConMasTiempo = nombre;
					tiempoMasLargo = tiempo;
				}
			}
		}

		promedioEdadesTotales += edad;
		participantestotales++;


		if(sexo=='f')
		{
			cantidadCorredoras++;
		}

	}

	if('m'>0)
	{
	document.write("el nombre del hombre con mas tiempo es: " +nombreConMasTiempo);
	}
	promedioEdadesTotales = promedioEdadesTotales/participantestotales;
	document.write("<br> el promedio de edad de todos los participantes es de: " + promedioEdadesTotales);
	document.write("<br> la cantidad de corredoras es de: " + cantidadCorredoras);
}*/

/*
thomas aguilar arguello

div x
3)Nos ingresan una cantidad indeterminada de ventas realizadas por las distintas sucursales de una Mega Tienda Polirubro, validando los datos ingresados:
nombre del cliente, 

sucursal( “CABA”, “BS.AS.” o “INTERIOR”), 

tipo(“GRANDE”,”MEDIANA”,“PEQUEÑA”),

monto de venta en Pesos.
Informar:
a)El nombre del cliente al que se le vendió menos.

b)El promedio del monto de venta de las sucursales del tipo “PEQUEÑA”.

c)La sucursal con mas cantidad de ventas.

Pedir datos por prompt y mostrar por document.write
*/

function mostrar()
{
	
	let nombreCliente;
	let sucursal;
	let tipo;
	let montoVentaPesos;
	let confirmacion;

	let clienteMenosVendido;
	let bandera;
	bandera = 0;
	let nombreClienteMenosVendido;

	let promedioSucursalPequeña;
	promedioSucursalPequeña = 0;
	let promedioVentasSucursalPequeña;
	promedioSucursalPequeña = 0;

	let sucursalConMasVentas;
	sucursalConMasVentas = 0;
	let flag;
	flag = 0;
	let nombreSucursalConMasVentas;
	nombreSucursalConMasVentas = 0;


	do{

		nombreCliente = prompt("ingrese su nombre de cliente");

		do{
			sucursal = prompt("ingrese la sucursal");
		}while(sucursal!="CABA" && sucursal!="BS.AS" && sucursal!="INTERIOR");

		do{
			tipo = prompt("ingrese el tipo de producto que compra. GRANDE/MEDIANA/PEQUEÑA");
		}while(tipo!="GRANDE" && tipo!="MEDIANA" && tipo!="PEQUEÑA");

		do{
		montoVentaPesos = prompt("ingrese el monto de la venta en pesos");
		montoVentaPesos = parseInt(montoVentaPesos)
		}while(isNaN(montoVentaPesos));

		if(bandera==0)
		{
			clienteMenosVendido = montoVentaPesos;
			nombreClienteMenosVendido = nombreCliente;
			bandera = 1;
		}
		else
		{
			if(montoVentaPesos<clienteMenosVendido)
			{
				clienteMenosVendido = montoVentaPesos;
				nombreClienteMenosVendido = nombreCliente;
			}
		}

		if(tipo=="PEQUEÑA")
		{
			promedioVentasSucursalPequeña += montoVentaPesos;
			promedioSucursalPequeña++;
		}

		if(flag==0)
		{
			sucursalConMasVentas = montoVentaPesos;
			nombreSucursalConMasVentas = sucursal;
			flag = 1;
		}
		else
		{
			if(montoVentaPesos>sucursalConMasVentas)
			{
				sucursalConMasVentas = montoVentaPesos;
				nombreSucursalConMasVentas = sucursal;
			}
		}




		confirmacion = prompt("desea seguir ingresando datos? s/n");
	}while(confirmacion=='s');

	document.write("el cliente al que se le vendio menos es: " + nombreClienteMenosVendido);
	promedioVentasSucursalPequeña = promedioVentasSucursalPequeña/promedioSucursalPequeña;
	document.write("<br> el promedio total de ventas de las 3 sucursales pero pequeñas es de: " + promedioVentasSucursalPequeña);
	document.write("<br> la sucursal con mas ventas es: " + nombreSucursalConMasVentas);
}