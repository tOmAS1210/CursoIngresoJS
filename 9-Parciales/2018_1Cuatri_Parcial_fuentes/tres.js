function mostrar()
{
    let precio;
    let descuento;
    let total;

    precio = prompt("ingrese el precio");
    precio = parseInt(precio);
    descuento = prompt("ingrese el descuento");
    descuento = parseInt(descuento);

    total = precio - (descuento*precio)/100; 

    document.getElementById("elPrecioFinal").value = total;

}
