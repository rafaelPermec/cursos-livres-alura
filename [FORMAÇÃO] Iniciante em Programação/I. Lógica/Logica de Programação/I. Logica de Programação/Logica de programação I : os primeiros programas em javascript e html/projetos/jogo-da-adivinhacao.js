
        function pulaLinha(){
                document.write("<br>");
        }

        function mostra(frase){
                document.write(frase);
        }
	function sorteia(n){
		return Math.round(Math.random() * n);
		
	}

	var numeroPensado = sorteia(10);
		console.log(numeroPensado);
	 	alert("Vamos jogar o jogo da adivinhação! Será que você consegue adivinhar o número que estou pensando?");
	var tentativas = 1;

	
	while (tentativas <= 3){
		var chute = parseInt(prompt("Já pensei. Agora digite o número de chute!"));
	
		if (chute === numeroPensado){	
			mostra("Você ACERTOU!");
			pulaLinha();
			break;
		} else if (chute > numeroPensado){
			mostra("Você ERROU! O numero pensado é menor do que seu chute!");
			pulaLinha();
		} else {
			mostra("Você ERROU! O numero pensado é maior do que seu chute!");
			pulaLinha();
		}

		tentativas++;
	}

