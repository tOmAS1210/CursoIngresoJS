/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexo;
	
	do{
	sexo = prompt("ingrese su sexo, f O m .");
	}while(sexo != "f" && sexo != "m");
	document.getElementById("txtIdSexo").value = sexo;

}//FIN DE LA FUNCIÓN