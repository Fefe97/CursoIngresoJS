function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta='si';

	while(respuesta=="si")
	{
		numero = prompt(" Ingrese numero ");
		numero = parseInt(numero);
		respuesta = prompt(" ¿Quiere ingresar otro numero? ");

		if(numero>0)
		{
			positivo = positivo + numero;
		}
		else
		{
			negativo = negativo * numero;
		}
		negativo=negativo;//esta linea es para que no muestre "NaN" en caso de no ingresar valores negativos		
		//respuesta = prompt(" ¿Quiere ingresar otro numero? ");
	}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN