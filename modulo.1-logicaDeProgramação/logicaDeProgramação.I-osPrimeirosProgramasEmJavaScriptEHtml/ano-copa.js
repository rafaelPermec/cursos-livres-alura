
        function pulaLinha(){
                document.write("<br>");
        }

        function mostra(frase){
                document.write(frase);
        }


	var anoCopa = 1930;
	var limite = parseInt(prompt("Em qual ano você está?"));

	mostra("<h1>Quais foram os anos de Copa do Mundo?</h1>");

	while (anoCopa <= limite) {
		mostra("Teve copa em " + anoCopa);
		anoCopa = anoCopa + 4;
		pulaLinha();
	}


	mostra("Não vai ter copa!");



