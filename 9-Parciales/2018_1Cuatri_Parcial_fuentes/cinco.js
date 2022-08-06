function mostrar()
{
    let planeta;
    let mensaje;

    planeta = prompt("ingrese un planeta del sistema solar");

    switch(planeta)
    {
        case "mercurio":
        case "venus":
            mensaje = "aca hace mas calor";
        break
        case "tierra":
            mensaje = "aca vivimos";
        break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            mensaje = "aca hace mas frio";
        break;
        default:
            mensaje = "ya no es un planeta valido";
        break;
    }    
    alert(mensaje);//pluton ya es invalido;
}