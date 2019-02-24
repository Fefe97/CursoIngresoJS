function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	var mensaje;
	numeroRandom=Math.floor((Math.random() * 10) + 1);
	//console.log(numeroRandom);

	
	if(numeroRandom<4)
	{
		mensaje = (" Vamos, la proxima se puede " + numeroRandom);
	}
	else
	{
		mensaje =(" APROBÓ " + numeroRandom);
	}
	if(numeroRandom>8 && numeroRandom<11)
	{
		mensaje = (" EXCELENTE " + numeroRandom);
	}

	alert(mensaje);
	

}//FIN DE LA FUNCIÓN