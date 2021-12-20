

		//Ao declarar uma função, é convenção colocar seu nome como um verbo ou ação.

	function pulaLinha(){

	  document.write("<br> <br>");
	  alert("Fui programado em javascript, dentro da função pularLinha!");
	}

	function mostra(frase){

	  document.write(frase)	  
	}
		//A função pode chamar outra função!

	
	mostra("<h1>Olá Mundo!</h1>");

	var ano = 2021;
    document.write("Flávio nasceu em " + (ano - 39) + ".");
    document.write("<br>" + "Joaquim nasceu em " + (ano - 20) + ".");

	 ano = 2025;

    document.write("<br>" + "Barney nasceu em " + (ano - 41) + ", se for o ano de  2025!");
	
	var idadeFlavio = 39;
	var idadeJoaquim = 20;
	var idadeBarney = 41;
	var media = (idadeFlavio + idadeJoaquim + idadeBarney)/3
	
	pulaLinha();

    document.write(" A média das idades é " + Math.round(media));
	
	pulaLinha();

	document.write("A idade de Flávio é " + idadeFlavio);
	document.write("<br> A idade de Joaquim é " + idadeJoaquim);
	document.write("<br> A idade de Barney é " + idadeBarney);
	
	pulaLinha();

	mostra("Você está vendo o resultado da função de que eu criei! : mostra();")

