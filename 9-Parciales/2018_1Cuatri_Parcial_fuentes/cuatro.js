function mostrar()
{
    let numero1;
    let numero2;
    let resultado;
    let mensaje;

    numero1 = prompt("Ingrese un numero");     
    numero1 = parseInt(numero1);     
    numero2 = prompt("Ingrese otro numero");     
    numero2 = parseInt(numero2);

    if(numero1==numero2)
    {
        alert("" + numero1 + numero2);
    }
    else
    {
        if(numero1>numero2)
        {
            resultado = numero1 - numero2;
        }
        else
        {
            resultado = numero1 + numero2;
        }
        alert(resultado)
    }
    if(resultado>10)
    {
        resultado = "la suma es: " + resultado + " y supero el 10";
        alert(resultado);
    }

    

}