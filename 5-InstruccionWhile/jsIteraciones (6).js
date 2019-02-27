function mostrar()
{

	var numero;
	var contador;
	var acumulador;

	contador = 0
	acumulador = 0

	while(contador<5)
	{
		numero = prompt(" Ingrese 5 numeros ");
		numero = parseInt(numero);
		contador = contador+1
		acumulador = acumulador + numero;
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN