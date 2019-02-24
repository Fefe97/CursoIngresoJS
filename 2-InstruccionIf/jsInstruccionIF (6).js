function mostrar()
{
//tomo la edad  
	var edad;
	var mensaje;

	edad = document.getElementById('edad').value;
	edad = parseInt(edad);
	//edad = document.getElementById('edad');

	if(edad>17)
	{
		mensaje = (" Usted es mayor de edad ");
	}
	if(edad<13)
	{
		mensaje = (" Usted es niño ");
	}
	if(edad>12 && edad<18)
	{
		mensaje = (" Usted es adolescente ");
	}

    
	alert(mensaje);




}//FIN DE LA FUNCIÓN