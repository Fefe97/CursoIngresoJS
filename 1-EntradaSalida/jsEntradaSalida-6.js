/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero;
	var numerodos;
	var suma;

	numero = document.getElementById('numeroUno').value;
	numerodos = document.getElementById("numeroDos").value;

	numero = parseInt(numero);
	numerodos = parseInt(numerodos);

	//numero = document.getElementById('numeroUno').value;
	//numerodos = document.getElementById("numeroDos").value;

	suma = numero + numerodos;
	alert(" La suma de los numeros es " + suma );

}

