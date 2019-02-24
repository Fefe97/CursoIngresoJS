function mostrar()
{
//tomo la edad  
	var edad;
	var mensaje;

	edad = parseInt(edad);
	edad = document.getElementById('edad').value;

	if(edad<18)
	{
		//mensaje = (" Usted es menor de edad ");
		alert(" Usted es menor de edad ");
	}
	else
	{
		alert(" Usted es mayor de edad ");

		//mensaje = (" Usted es mayor de edad ");
	}

	//alert(mensaje);

}//FIN DE LA FUNCIÓN