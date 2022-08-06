function mostrar()
{
    let numero;
    let letra;
    let pares;
    let impares;
    let ceros;
    let promediopositivos;
    let i;
    let confirmacion;



    pares=0;
    impares=0;
    ceros=0;
    promediopositivos=0;

    do{
        numero = prompt("ingrese un numero");
        numero = parseInt(numero);
        letra = prompt("ingrese una letra");
        
        while(isNaN(numero) || numero>100 || numero<-100)
        {   
            numero = prompt("error. ingrese un numero");
            numero = parseInt(numero);
        }
        if((numero%2)==0)
        {
            pares++
        }
        else
        {
            if((numero%2)!=0)
            {
                impares++
            }
        }
        if(numero==0)
            {
                ceros++;
            }
        
        i++
        promediopositivos += numero;


        confirmacion = prompt("quiere seguir ingresando datos? s/n");
    }while(confirmacion == `s`);

    promediopositivos = promediopositivos/i

    document.write("la cantidad de numeros pares es de: " + pares);
    document.write("<br> la cantidad de numeros impares es de: " + impares);
    document.write("<br> la cantidad de ceros es de: " + ceros);
    document.write("<br> el promedio de los positivos es de: " + promediopositivos);
}
