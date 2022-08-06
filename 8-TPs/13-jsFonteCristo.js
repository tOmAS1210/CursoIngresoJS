/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares()
{
 	let numero;
    let numPar;
    let i;
    
    numPar = 0
    
        numero = document.getElementById("txtIdNumero").value;
        numero = parseInt(numero);

    for(i=0; i<numero; i++)
    {
        if((i%2)==0)
        {
            //console.log("los numeros pares son: " + i + "<br>"); codigo para probar que funciona;
            numPar++;
        }
    }
    document.write("la cantidad de numeros pares es: " + numPar);
}

function NumerosImpares()
{
    let numero;
    let i;
    let numImpar;

    numero = document.getElementById("txtIdNumero").value;
    numero = parseInt(numero);
    numImpar=0;

    for(i=0; i<numero; i++)
    {
        if((i%2)!=0)
        {
            //document.write("los numeros impares son: " + i + "<br>");
            numImpar++;
        }
    }
    document.write("la cantidad de numeros impares es de: " + numImpar);
}

function NumerosDivisibles()
{
    let numero;
    let i;
    let divtotales;

    numero = document.getElementById("txtIdNumero").value;
    numero = parseInt(numero);
    divtotales = 0;

    for(i=0; i<100; i++)
    {
        if((numero%i)==0)
        {
            //document.write("los numeros divisibles son: " + i +"<br>");
            divtotales++;
        }
    }
    document.write("la cantidad de divisibles es de: " + divtotales);
}

function VerificarPrimo()
{
    let numero;
    let i;
    let bandera;

    numero = document.getElementById("txtIdNumero").value;
    numero = parseInt(numero);
    bandera = 0;

    for(i=2; i<numero; i++)
    {
        if((numero%i)==0)
        {
            //document.write(numero + " no es un numero primo");
            bandera = 1;
            break;
        }
    }
    if(bandera==0)
    {
        document.write(numero + " esto es un numero primo");
    }
}

function NumerosPrimos()
{
    let numero;
    let i;
    let j;
    let cantPrimos;
    let primos;

    numero = document.getElementById("txtIdNumero").value;
    numero = parseInt(numero);
    cantPrimos = 0;

    for(i=2; i<=numero; i++)
    {
        primos = 0;
        for(j=1; j<=i; j++)
        {
            if((i%j)==0)
            {
              primos++;
            }
        }
        if(primos==2)
        {
            cantPrimos++;
        }
    }
    document.write("la cantidad de numeros primos es de: " + cantPrimos);
}//no anda :(((((((((((((((((((((((((((;


/*if((numero%i)!=0)
        {
            cantPrimos++
        }*/