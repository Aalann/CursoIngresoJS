/*
Rodriguez Alan, Division Z, E/S 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;

	 numeroUno = document.getElementById("txtIdNumeroUno").value;
	 numeroUno = parseInt(numeroUno);

	 numeroDos = document.getElementById("txtIdNumeroDos").value;
	 numeroDos = parseInt(numeroDos);

	suma = numeroUno + numeroDos;

	alert("El resultado de la operacion es" + " " + suma);	
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroUno = parseInt(numeroUno);

	numeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroDos = parseInt(numeroDos);

	resta = numeroUno - numeroDos;

	alert("El resultado de la operacion es" + " " + resta);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplicacion;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroUno = parseInt(numeroUno);

	numeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroDos = parseInt(numeroDos);

	multiplicacion = numeroUno * numeroDos;

	alert("El resultado de la operacion es" + " " + multiplicacion);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var division;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroUno = parseInt(numeroUno);

	numeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroDos = parseInt(numeroDos);

	division = numeroUno / numeroDos;

    alert("El resultado de la operacion es" + " " + division);
}

