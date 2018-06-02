var operandoa;
var operandob;
var operacion;

function init(){
	//Variables
	var resultado = document.getElementById("display");
	var reset = document.getElementById("on");
	var suma = document.getElementById("mas");
	var resta = document.getElementById("menos");
	var multiplicacion = document.getElementById("por");
	var division = document.getElementById("dividido");
	var igual = document.getElementById("igual");

	var punto = document.getElementById("punto");
	var signo = document.getElementById("sign");

	var uno = document.getElementById("1");
	var dos = document.getElementById("2");
	var tres = document.getElementById("3");
	var cuatro = document.getElementById("4");
	var cinco = document.getElementById("5");
	var seis = document.getElementById("6");
	var siete = document.getElementById("7");
	var ocho = document.getElementById("8");
	var nueve = document.getElementById("9");
	var cero = document.getElementById("0");

	var raiz = document.getElementById("raiz");

	//Eventos
	uno.onclick = function(e){
		uno.style.transform = "scale(0.8)";
    	setInterval(textnormal, 150);
    	function textnormal(){
			uno.style.transform = "scale(1)";
		}
		condiCero()
		if (resultado.textContent.length<8){
			resultado.textContent = resultado.textContent + "1";
		}
	}
	dos.onclick = function(e){
		dos.style.transform = "scale(0.8)";
    	setInterval(textnormal, 150);
    	function textnormal(){
			dos.style.transform = "scale(1)";
		}
		condiCero()
		if (resultado.textContent.length<8){
			resultado.textContent = resultado.textContent + "2";
		}
	}
	tres.onclick = function(e){
		tres.style.transform = "scale(0.8)";
    	setInterval(textnormal, 150);
    	function textnormal(){
			tres.style.transform = "scale(1)";
		}
		condiCero()
		if (resultado.textContent.length<8){
			resultado.textContent = resultado.textContent + "3";
		}
	}
	cuatro.onclick = function(e){
		cuatro.style.transform = "scale(0.8)";
    	setInterval(textnormal, 150);
    	function textnormal(){
			cuatro.style.transform = "scale(1)";
		}
		condiCero()
		if (resultado.textContent.length<8){
			resultado.textContent = resultado.textContent + "4";
		}
	}
	cinco.onclick = function(e){
		cinco.style.transform = "scale(0.8)";
    	setInterval(textnormal, 150);
    	function textnormal(){
			cinco.style.transform = "scale(1)";
		}
		condiCero()
		if (resultado.textContent.length<8){
			resultado.textContent = resultado.textContent + "5";
		}
	}
	seis.onclick = function(e){
		seis.style.transform = "scale(0.8)";
    	setInterval(textnormal, 150);
    	function textnormal(){
			seis.style.transform = "scale(1)";
		}
		condiCero()
		if (resultado.textContent.length<8){
			resultado.textContent = resultado.textContent + "6";
		}
	}
	siete.onclick = function(e){
		siete.style.transform = "scale(0.8)";
    	setInterval(textnormal, 150);
    	function textnormal(){
			siete.style.transform = "scale(1)";
		}
		condiCero()
		if (resultado.textContent.length<8){
			resultado.textContent = resultado.textContent + "7";
		}
	}
	ocho.onclick = function(e){
		ocho.style.transform = "scale(0.8)";
    	setInterval(textnormal, 150);
    	function textnormal(){
			ocho.style.transform = "scale(1)";
		}
		condiCero()
		if (resultado.textContent.length<8){
			resultado.textContent = resultado.textContent + "8";
		}
	}
	nueve.onclick = function(e){
		nueve.style.transform = "scale(0.8)";
    	setInterval(textnormal, 150);
    	function textnormal(){
			nueve.style.transform = "scale(1)";
		}
		condiCero()
		if (resultado.textContent.length<8){
			resultado.textContent = resultado.textContent + "9";
		}
	}
	cero.onclick = function(e){
		cero.style.transform = "scale(0.8)";
    	setInterval(textnormal, 150);
    	function textnormal(){
			cero.style.transform = "scale(1)";
		}
		condiCero()
		if (resultado.textContent.length<8){
			resultado.textContent = resultado.textContent + "0";
		}
	}
	punto.onclick = function(e){
		punto.style.transform = "scale(0.8)";
    	setInterval(textnormal, 150);
    	function textnormal(){
			punto.style.transform = "scale(1)";
		}
		condiPunto()
	}
	signo.onclick = function(e){
		signo.style.transform = "scale(0.8)";
    	setInterval(textnormal, 150);
    	function textnormal(){
			signo.style.transform = "scale(1)";
		}
		condiSigno()
	}

	reset.onclick = function(e){
		reset.style.transform = "scale(0.8)";
    	setInterval(textnormal, 150);
    	function textnormal(){
			reset.style.transform = "scale(1)";
		}
		resetear();
	}

	// se realiza con 3 variables.
	suma.onclick = function(e){
		suma.style.transform = "scale(0.8)";
    	setInterval(textnormal, 150);
    	function textnormal(){
			suma.style.transform = "scale(1)";
		}
		operandoa = resultado.textContent;
		operacion = "+";
		limpiar();
	}
	resta.onclick = function(e){
		resta.style.transform = "scale(0.8)";
    	setInterval(textnormal, 150);
    	function textnormal(){
			resta.style.transform = "scale(1)";
		}
		operandoa = resultado.textContent;
		operacion = "-";
		limpiar();
	}
	multiplicacion.onclick = function(e){
		multiplicacion.style.transform = "scale(0.8)";
    	setInterval(textnormal, 150);
    	function textnormal(){
			multiplicacion.style.transform = "scale(1)";
		}
		operandoa = resultado.textContent;
		operacion = "*";
		limpiar();
	}
	division.onclick = function(e){
		division.style.transform = "scale(0.8)";
    	setInterval(textnormal, 150);
    	function textnormal(){
			division.style.transform = "scale(1)";
		}
		operandoa = resultado.textContent;
		operacion = "/";
		limpiar();
	}
	igual.onclick = function(e){
		igual.style.transform = "scale(0.8)";
    	setInterval(textnormal, 150);
    	function textnormal(){
			igual.style.transform = "scale(1)";
		}
		operandob = resultado.textContent;
		resolver();
	}
	raiz.onclick = function(e){
		raiz.style.transform = "scale(0.8)";
    	setInterval(textnormal, 150);
    	function textnormal(){
			raiz.style.transform = "scale(1)";
		}
	}
}

// Condiciones del cero.
function condiCero(){
	if (display.textContent == "0" ){
		limpiar()
	}
}

// Condiciones del punto.
function condiPunto(){
	if (! this.verificarPunto()) {
		display.innerHTML = display.innerHTML+".";
	}
}
function verificarPunto() {
	if (display.innerHTML.indexOf('.')<0) {
	return false;
	} else return true;
}

// Condiciones del signo.
function condiSigno(){
	if (! this.verificarSigno()) {
		if (display.textContent !== "0") {
			display.innerHTML = "-" + display.innerHTML;
		}
	}
	else{
		display.innerHTML = display.innerHTML.substring(1);
	}
}
function verificarSigno() {
	if (display.innerHTML.indexOf('-')<0) {
	return false;
	} else return true;
}


function limpiar(){
	display.textContent = "";
}

function resetear(){
	display.textContent = 0;
	// operandoa = 0;
	// operandob = 0;
	// operacion = "";
}

function resolver(){
	var res = 0;
	var length = 8;
	switch(operacion){
		case "+":
			res = parseFloat(operandoa) + parseFloat(operandob);
			break;

		case "-":
			res = parseFloat(operandoa) - parseFloat(operandob);
			break;

		case "*":
			res = parseFloat(operandoa) * parseFloat(operandob);
			break;

		case "/":
			res = parseFloat(operandoa) / parseFloat(operandob);
			break;
	}
	resetear();
	var trimmedResult = String(res).substring(0, length);
	display.textContent = trimmedResult;
}

