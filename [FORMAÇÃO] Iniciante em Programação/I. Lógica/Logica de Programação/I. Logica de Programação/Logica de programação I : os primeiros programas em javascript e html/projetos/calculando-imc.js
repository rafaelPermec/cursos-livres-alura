
	function pulaLinha(){
		document.write("<br>");
	}

	function mostra(frase){
		document.write(frase);
	}
	function calculaIMC(peso, altura) {
		var imc = peso / (altura * altura);
		return imc;
	}



 	mostra("<h1>Essa é a minha calculadora de IMC!</h1>");
	
	var seuNome = prompt("Qual o seu nome?");
	var alturaInformado = prompt( seuNome + ", informe sua altura!")  ;
	var pesoInformado = prompt( seuNome + ", informe seu Peso!") ;


	mostra("<h3>" + seuNome + ": </h3>");
	pulaLinha();
	mostra("O seu IMC calculado é de " +  
	Math.round(calculaIMC(pesoInformado, alturaInformado)) + "!");
	pulaLinha();

	if (parseInt(calculaIMC(pesoInformado, alturaInformado)) < 18.5){
	mostra("Você esta abaixo do recomendado!");
	} else if (parseInt(calculaIMC(pesoInformado, alturaInformado)) > 35){
	mostra("Você esta acima do recomendado!");
	} else {
	mostra("Seu IMC esta excelente!");
	}


