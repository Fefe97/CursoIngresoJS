function mostrar()
{
	var numero;
	var minimo;
	var maximo;
	var contador=0;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		numero = prompt(" Ingrese numero ");
		numero = parseInt(numero);
		respuesta = prompt(" ¿Quiere ingresar otro numero?");

		if(contador==0)
		{
			maximo = numero;
			minimo = numero;
		}
		else
		{
			if(numero<minimo)
			{
				minimo = numero;
			}
			if(numero>maximo)
			{
				maximo = numero;
			}
		}
		contador = contador+1;
	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;




}//FIN DE LA FUNCIÓN