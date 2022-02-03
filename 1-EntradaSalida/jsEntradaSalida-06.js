/*
Rodriguez Alan, Division Z, E/S 06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

	 alert("el resultado de la suma es" + " " + suma);
}

