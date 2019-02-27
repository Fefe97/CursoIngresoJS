function mostrar()
{
	//declarar contadores y variables 
	var contador;
	var respuesta;
	var numero;
	var negativo;
	var positivo;
	var contadorNegativos;
	var contadorPositivos;
	var contadorCeros;
	var contadorPares;
	var resto;
	var promedioPostivo;
	var promedioNegativo;
	var diferencia;

	respuesta = "si";
	positivo = 0;
	negativo = 0;
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPares= 0;

	while(respuesta=="si")
	{

		numero = prompt(" Ingrese numero ");
		numero = parseInt(numero);
		respuesta = prompt(" ¿Quieres ingresar otro numero?");
	
		if(numero>0)
		{
			positivo = positivo + numero;
			contadorPositivos = contadorPositivos+1;
		}
		else
		{
			if(numero<0)
			{
				negativo = negativo + numero;
				contadorNegativos = contadorNegativos+1;
			}
			else
			{
				contadorCeros=contadorCeros+1;
			}		
		}

		resto=numero%2;

		if(resto==0)
		{
			contadorPares=contadorPares+1;
		}	
	}

	promedioPostivo = positivo/contadorPositivos;
	promedioNegativo = negativo/contadorNegativos;
	diferencia = positivo + negativo;

	/*document.write(" Suma de los positivos " + positivo);*/

	document.write(" Suma de los negativos: " + negativo + "<br>"+
			" Suma de los positivos: " + positivo + "<br>"+
			" Cantidad de positivos: " + contadorPositivos + "<br>"+
			" Cantidad de negativos: " + contadorNegativos + "<br>"+
			" Cantidad de ceros: " + contadorCeros + "<br>"+
			" Cantidad de numeros pares: " + contadorPares + "<br>"+
			" Promedio de positivos: " + promedioPostivo + "<br>"+
			" Promedio de negativos: " + promedioNegativo + "<br>"+
			" Diferencia entre positivos y negativos: " + diferencia + "<br>");

}//FIN DE LA FUNCIÓN