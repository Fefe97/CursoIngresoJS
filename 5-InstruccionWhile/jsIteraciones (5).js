function mostrar()
{

	var sexo = prompt("ingrese f ó m .");

		while(sexo!="f" && sexo!="m")
		{
			sexo = prompt(" Ingrese nuevamente ");
		}



	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN