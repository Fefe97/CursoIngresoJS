/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero;
	var numerodos;
	var suma;

	numero = document.getElementById('numeroUno').value;
	numerodos = document.getElementById("numeroDos").value;

	numero = parseInt(numero);
	numerodos = parseInt(numerodos);

	suma = numero + numerodos

	alert(" La suma es " + suma);
}

function restar()
{
	var numero;
	var numerodos;
	var resta;

	numero = document.getElementById('numeroUno').value;
	numerodos = document.getElementById("numeroDos").value;

	numero = parseInt(numero);
	numerodos = parseInt(numerodos);

	resta = numero - numerodos

	alert(" La resta es " + resta);	
}

function multiplicar()
{ 
	var numero;
	var numerodos;
	var multiplicar;

	numero = document.getElementById('numeroUno').value;
	numerodos = document.getElementById("numeroDos").value;

	numero = parseInt(numero);
	numerodos = parseInt(numerodos);

	multiplicar = numero * numerodos

	alert(" La multiplicacion es " + multiplicar);
}
	
function dividir()
{
	var numero;
	var numerodos;
	var dividir;

	numero = document.getElementById('numeroUno').value;
	numerodos = document.getElementById("numeroDos").value;

	numero = parseInt(numero);
	numerodos = parseInt(numerodos);

	dividir = numero / numerodos

	alert(" La division es " + dividir);
}