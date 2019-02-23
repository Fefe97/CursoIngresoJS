/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
	var aumento;
	var sueldoAumento;

	importe = document.getElementById('sueldo').value;
	//resultado = document.getElementById("resultado").value;

	importe = parseInt(importe);
	aumento = importe *0.1;
	sueldoAumento = importe + aumento;
	document.getElementById("resultado").value = sueldoAumento;

	
}
