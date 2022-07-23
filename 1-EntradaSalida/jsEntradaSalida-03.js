/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;
	nombreingresado = document.getElementById("txtIdNombre").value;

	//nombreIngresado=txtIdNombre.value; asi solo en gugul, asi que no.

	alert("su nombre es: " +nombreingresado);


	/*let distancia;
	let tiempo;
	let velocidad;
	let mensaje;

	distancia = prompt("ingrese la distancia viajada");
	tiempo = prompt("ingrese el timepo que tardo en recorrer esa distancia");
	distancia = parseInt(distancia);
	tiempo = parseInt(tiempo);

	velocidad = distancia/tiempo;
	
	switch(velocidad)
	{
		case velocidad:
			if(velocidad == 60)
			{
				mensaje = "muy lento";
			}
			else if(velocidad>60 && velocidad<81)
			{
				mensaje = "lento";
			}
			else if(velocidad>80 && velocidad<101)
			{
				mensaje = "buen ritmo";
			}
			else if(velocidad>100 && velocidad<121)
			{
				mensaje = "ahi de la ley";
			}
			else if(velocidad>121)
			{
				mensaje = "eso no se hace";
			}
		break;
	}
	alert(mensaje);*/
}