function mostrar()
{
    let horario;

    horario = document.getElementById("laHora").value;
    horario = parseInt(horario);

    switch(horario)
    {
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            mensaje = "es de mañana";
        break;
        default:
            if(horario>24 || horario<0)
            {
                mensaje = "no es un horario valido";
            }
            else
            {
                if(horario>11 && horario<20)
                {
                    mensaje = "es de tarde";
                }
                else
                {
                    mensaje = "es de noche, a dormir";
                }
            }
        break;
    }
    alert(mensaje);
}
