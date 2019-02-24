function mostrar()
{
//tomo la edad  
	var edad;
	var mensaje;

	edad = parseInt(edad);
	edad = document.getElementById('edad').value;

	if(edad>17)
	{
		mensaje = (" No es adolescente ");
	}
	if(edad<13)
	{
		mensaje = (" No es adolescente ");
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN