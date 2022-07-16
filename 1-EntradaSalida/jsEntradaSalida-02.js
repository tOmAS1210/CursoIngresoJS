/*
thomas aguilar arguello
div x 

Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;  // si declaramos una variable let, si es un nombre, se le pone entre comillas. ej      let nombre = "arthur";
	
	nombre = prompt("ingrese su nombre");

	

	alert("su nombre es : "+nombre);

	/*Desafío 2:
	Ingresar el nombre y los datos requeridos para calcular el IMC, 
	e informar a la persona si es:
	Bajo peso <18.5
	Peso normal 18,5-24.9
	Pre Obesidad 25-26.9
	Obesidad I 27-29.9
	Obesidad II 30-34.9
	Obesidad III >40
	
	let peso;
	let altura;
	let imc;
	let mensaje;

	peso = prompt("ingrese su peso");
	peso = parseFloat(peso);
	altura = prompt("ingrese su altura");
	altura = parseFloat(altura);

	imc = peso / (altura*altura);

	switch(peso)
	{
		case peso:
		if(imc<18.5)
		{
			mensaje=("usted tiene su peso debajo del normal");
		}
		else if(imc<25)
		{
			mensaje=("usted tine un peso normal");
		}
		else if(imc<26.9)
		{
			mensaje=("usted esta en la pre obesidad");
		}
		else if(imc<29.9)
		{
			mensaje=("usted esta en la obesidad 1");
		}
		else if(imc<34.9)
		{
			mensaje=("usted esta en la obesidad 2");
		}
		else
		{
			mensaje=("usted esta en la obesidad 3");
		}
		break;
	}


	alert(mensaje);*/

}

