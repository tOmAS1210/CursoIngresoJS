/*function mostrar()
{

  let tipo;
  let cantidadBolsas;
  let precioPorBolsa;
  let confirmacion;

  let descuento;
  let precioDescuento;
  let precioTotal;

  let bandera;
  bandera = 0;
  let tipoConMasCantidad;
  let masBolsasTipo;


  let bolsaMasCara;
  let tipoMasCaro;
  let flag;
  flag = 0;

  let ;


  do{
    
    do{
      tipo = prompt("ingrese el tipo de producto que comprara.  arena/cal/cemento");
    }while(tipo!="arena" && tipo!="cal" && tipo!="cemento");

    do{
      cantidadBolsas = prompt("ingrese la cantidad de bolsas a comprar");
      cantidadBolsas = parseFloat(cantidadBolsas);
    }while(isNaN(cantidadBolsas) || cantidadBolsas<0);

    do{
      precioPorBolsa = prompt("ingrese el precio de la bolsa a comprar");
      precioPorBolsa = parseFloat(precioPorBolsa);
    }while(isNaN(precioPorBolsa) || precioPorBolsa<0);

    precioTotal = precioPorBolsa*cantidadBolsas;

    if(cantidadBolsas>10)
    {
      descuento = (precioTotal*85)/100;
    }
    if(cantidadBolsas>30)
    {
      descuento = (precioTotal*75)/100;
    }
    if(cantidadBolsas>0)
    {
      descuento = precioTotal;
    }

    if(bandera==0)
    {
      tipoConMasCantidad = tipo;
      masBolsasTipo = cantidadBolsas;
      bandera = 1;
    }
    else
    {
      if(cantidadBolsas>masBolsasTipo)
      {
        tipoConMasCantidad = tipo;
        masBolsasTipo = cantidadBolsas;
      }

    }

    if(flag == 0)
    {
      bolsaMasCara = precioPorBolsa;
      tipoMasCaro = tipo;
      flag = 1;
    }
    else
    {
      if(precioPorBolsa>bolsaMasCara)
      {
        bolsaMasCara = precioPorBolsa;
        tipoMasCaro = tipo;
      }
    }
    confirmacion = prompt("desea seguir ingresando datos? s/n");
  }while(confirmacion=='s');

  precioDescuento = precioTotal - descuento;
  document.write("el total a pagar sin descuento es de: " + precioTotal);
  
  if(cantidadBolsas>30)
  {
    document.write("<br> el total a pagar co un descuento de 25% es de: " +precioDescuento);
  }
  else
  {
    if(cantidadBolsas>10)
    {
    document.write("<br> el total a pagar con un descuento de 15% es de: " + precioDescuento);
    }
  }
  document.write("<br> el tipo con mas cantidad de bolsas es de: " + tipoConMasCantidad);
  document.write("<br> el tipo mas caro es: " + tipoMasCaro);


}*/

function mostrar()
{
  let nombrePelicula;
  let precio;
  let cantidadEntradas;
  let tipo3D4D;
  let confirmacion;

  let bandera;
  bandera = 0;
  let nombrePeliculaMasCara;
  let precioPeliculaMasCara;

  let precioTotalDelDia;
  precioTotalDelDia = 0;

  let flag;
  flag = 0;
  let nombrePeliculaConMenosEntradas;
  let pocasEntradas;


  do{

    nombrePelicula = prompt("ingrese el nombre de la pelicula");

    do{
    precio = prompt("ingrese el precio de la pelicula");
    precio = parseInt(precio);
    }while(isNaN(precio));

    do{
      cantidadEntradas = prompt("ingrese la cantidad de entradas a comprar");
      cantidadEntradas = parseInt(cantidadEntradas);
    }while(isNaN(cantidadEntradas));

    do{
      tipo3D4D = prompt("ingrese el tipo de pelicula 3D/4D");
    }while(tipo3D4D!="3D" && tipo3D4D!="4D");




    if(tipo3D4D=="4D")
    {
      if(bandera==0)
      {
        nombrePeliculaMasCara = nombrePelicula;
        precioPeliculaMasCara = precio;
        bandera = 1;
      }
      else
      {
        if(precio>precioPeliculaMasCara)
        {
          nombrePeliculaMasCara = nombrePelicula;
          precioPeliculaMasCara = precio;
        }
      }
    }


    if(flag==0)
    {
      nombrePeliculaConMenosEntradas = nombrePelicula;
      pocasEntradas = cantidadEntradas;
      flag = 1;
    }
    else
    {
      if(cantidadEntradas<pocasEntradas)
      {
        nombrePeliculaConMenosEntradas = nombrePelicula;
        pocasEntradas = cantidadEntradas;
      }
    }

    precioTotalDelDia += precio;



    confirmacion = prompt("desea seguir ingresando datos? s/n");
  }while(confirmacion=='s');

  document.write("el nombre de la pelicula 4D mas cara es: " + nombrePeliculaMasCara);
  document.write("<br> el precio total de la venta del dia es de: " +precioTotalDelDia);
  document.write("<br> la pelicula con menos entradas vendidas es: " +nombrePeliculaConMenosEntradas);


}