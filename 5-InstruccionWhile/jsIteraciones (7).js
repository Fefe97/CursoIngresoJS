function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(respuesta=="si")
	{
		numero = prompt(" Ingrese numero ");
		numero = parseInt(numero);
		respuesta = prompt(" Si quiere ingresar otro numero escriba #si ");
		contador = contador+1
		acumulador = acumulador + numero;

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN