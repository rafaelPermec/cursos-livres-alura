
	function pulaLinha(){
	document.write("<hr><br>");
	}

	function mostra(frase){
	document.write("<big>" + frase + "</big>");
	}

	var quantosAno = 2021 - 1500;
	
	mostra("<h1>Quantas gerações já tivemos desde o descobrimento do Brasil?</h1>");
	pulaLinha();
	mostra("<h2>" + "Já se passaram " + quantosAno + 
	" desde o descobrimento do Brasil!" + "</h2>");
	pulaLinha();
	mostra("Se, em média, um casal tem filhos ao atigir a idade de 28 anos," +
	" somos hoje a " +
	Math.round(quantosAno / 28) + "ª geração do Brasil..."); 
	 


