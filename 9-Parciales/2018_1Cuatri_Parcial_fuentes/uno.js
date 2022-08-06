
function mostrar()
{
    let ancho;
    let largo;
    let perimetro;

    ancho = prompt("ingrese el ancho del rectangulo");
    ancho = parseInt(ancho);

    largo = prompt("ingrese el largo del rectangulo");
    largo = parseInt(largo);

    perimetro = (ancho + largo)*2;

    alert("el perimetro del rectangulo es de: " + perimetro);
}
