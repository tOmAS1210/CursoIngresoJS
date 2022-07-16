/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() 
{
    let precioLampara;
    let cantidadLamparas;
    let precioBruto;
    let descuento;
    let precioDescuento;
    let marcaLampara;
    
    
    precioLampara = 35;
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);
    precioBruto = cantidadLamparas * precioLampara;
    
    marcaLampara = document.getElementById("Marca").value;

    
    if(cantidadLamparas>5)//A
    {
        descuento = (precioBruto *50) / 100;
    }
    else if(cantidadLamparas == 5)//B
    {   
        if(marcaLampara == "ArgentinaLuz")
        {
        descuento = (precioBruto *40) / 100;
        }
        else//B
        {
        descuento = (precioBruto *30) / 100;
        }
    }
    else if(cantidadLamparas == 4)//C
    {
        if(marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas")
        {
        descuento = (precioBruto *25) / 100;
        }
        else//C
        {
        descuento = (precioBruto *20) / 100;
        }
    }
    else if(cantidadLamparas == 3)//D correcto
    {   
        if(marcaLampara == "ArgentinaLuz")
        {
            descuento = (precioBruto *15) / 100;
        }
        else if(marcaLampara == "FelipeLamparas")//D
        {
            descuento = (precioBruto *10) / 100;
        }
        else//D
        {
            descuento = (precioBruto *5) / 100;//D
        }
        
    }

    precioDescuento = precioBruto - descuento;
    document.getElementById("txtIdprecioDescuento").value = precioDescuento;

    if(precioBruto>120)//E
    {
        precioDescuento = (precioDescuento *10) /100;
        document.getElementById("txtIdprecioDescuento").value = "Usted pagó " + precioDescuento + "$ de impuestos";
    }    
}