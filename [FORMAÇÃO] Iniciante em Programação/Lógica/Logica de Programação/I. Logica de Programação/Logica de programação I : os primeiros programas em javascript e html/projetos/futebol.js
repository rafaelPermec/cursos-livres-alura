
        function pulaLinha(){
                document.write("<br>");
        }

        function mostra(frase){
                document.write(frase);
        }
	
	var time = prompt("Qual o seu time?");
	alert("Use somente números a partir daqui!")
	var posicao = prompt("Qual a posição do seu time?");
	var vitorias = prompt("Qual o número de vitorias do seu time?");
	var empates = prompt("Qual o número de empates do seu time?");

	var pontos = parseInt(vitorias) * 3 + parseInt(empates);

	mostra("<h1>O " + time + " no campeonato brasileiro tem:</h1>");
	mostra("<p>O " + time + " está na " + posicao + "º da tabela com " + pontos + " pontos!</p>" );
	pulaLinha();

	if (pontos < 28){
	mostra("Seu time esta pior do que no ano passado!");
	pulaLinha();
	} else if (pontos === 28){
	mostra("Seu time esta igual ao ano passado!");
	pulaLinha();
	} else {
	mostra("Seu time esta melhor do que no ano passado!");
	pulaLinha();
	}

