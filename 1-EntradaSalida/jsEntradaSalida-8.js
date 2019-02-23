/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numero;
	var numerodos;
	var resto;

	numero = document.getElementById('numeroDividendo').value;
	numerodos = document.getElementById("numeroDivisor").value;

	numero = parseInt(numero);
	numerodos = parseInt(numerodos);
	resto = numero % numerodos;

	alert(" El resto es " + resto);
	
}
