/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10),
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/
function mostrar()
{
    /*let notas;
    let Promedios;
    let sexo;
    let i; 
    let notasTotales;
    let banderas;
    let notaBaja;
    let notabajaSexo;
    let notasvarones;
  
  
    i = 0;
    notasTotales = 0;
    notaBaja = 0;
    banderas = 0;
    notasvarones = 0;
  
    for(i=0; i<5; i++)
    {
        notas = prompt("Ingrese su nota: ");
        notas = parseFloat(notas);
        while(isNaN(notas) || notas > 10 || notas < 0 )
        {
            notas = prompt("Error vuelve a ingresar la nota");
        }
        notasTotales += notas;

        sexo = prompt("Ingrese su sexo f o m " );
        sexo = sexo.toLowerCase();
        while(sexo != 'f' && sexo != 'm' )
        {
        sexo = prompt("Error vuelve a intentar su sexo f o m " );
        }     
        if(banderas == 0)
        {
            notaBaja = notas;
            notabajaSexo = sexo;
            banderas = 1;
        }else
        {
            if(notas < notaBaja)
            {
                notaBaja = notas;
                notabajaSexo = sexo;
            }
        }
        if(notas>5 && sexo == 'm')
        {
            notasvarones++
        }
    }
    Promedios = notasTotales/5;
    alert("la nota mas baja es: " + notaBaja + " genero: " + notabajaSexo);
    alert("el promedio de las 5 notas es: " + Promedios);
    alert("la cantidad de varones con nota mayor a 6 es de: " +  notasvarones);*/

    /*practica de parcial

    Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes para preparar comida al por mayor ,
    hasta que el cliente quiera:
    peso (entre 10 y 1000)en kilo,
    precio por kilo (más de cero ),
    tipo validar("v";"a";"m")(vegetal,animal o mezcla )
    Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
    Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
    a) El importe total a pagar , bruto sin descuento
    b) el importe total a pagar con descuento(solo si corresponde)
    c) Informar el tipo de alimento más caro.
    d) El promedio de precio por kilo en total.

    */
    let peso;
    let precioPorKilo;
    let tipoProducto;
    let importeTotal;
    let precioFinal;
    let alimentoCaro;
    let bandera;
    let respuesta;
    let i;
    let promedioPrecioKilo;

    bandera = 0;
    i = 0;
    promedioPrecioKilo = 0;

    do{

        peso = prompt("ingrese el peso de su compra");
        peso = parseFloat(peso);
        while(peso>1000 || peso<10)
        {
            peso = prompt("ingrese el peso entre 10 o 1000");
            peso = parseFloat(peso);
        }

        precioPorKilo = prompt("ingrese el precio de cada peso");
        precioPorKilo = parseFloat(precioPorKilo);
        while(precioPorKilo<1)
        {
            precioPorKilo = prompt("ingrese el precio de cada peso mayor a 0");
            precioPorKilo = parseFloat(precioPorKilo);
        }

        do{
            tipoProducto = prompt("ingrese el tipo de producto que compró (v-a-m)(vegetal,animal o mezcla )");
        }while(tipoProducto!='v' && tipoProducto!='a' && tipoProducto!='m');

        importeTotal = precioPorKilo*peso;

        if(peso>100)
        {
            precioFinal = ((importeTotal*85)/100);
            mensaje = "el importe total a pagar con descuento es de: ";
        }
        if(peso>300)
        {
            precioFinal = ((importeTotal*75)/100);
            mensaje = "el importe total a pagar con descuento es de: ";
        }
        else
        {
           precioFinal = importeTotal;
            mensaje = "el precio total, sin descuento es de: ";
        }

        if(bandera==0)
        {
            alimentoCaro = importeTotal;
            bandera = 1;
        }
        else{
            if(alimentoCaro>importeTotal)
            {
                alimentoCaro = importeTotal;
            }
        }

        i++
        promedioPrecioKilo += precioPorKilo;
        respuesta = prompt("desea seguir ingresando mas productos? s/n");
    }while(respuesta == 's');

    promedioPrecioKilo = promedioPrecioKilo/i;

    alert(mensaje + precioFinal);

    alert("el alimento mas caro es: " + tipoProducto);

    alert("el promedio del precio por kilo es: " + promedioPrecioKilo);
}