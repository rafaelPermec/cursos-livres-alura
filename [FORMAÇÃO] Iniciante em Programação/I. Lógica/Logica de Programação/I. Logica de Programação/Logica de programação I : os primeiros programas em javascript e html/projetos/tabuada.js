
        function pulaLinha(){
                document.write("<br>");
        }

        function mostra(frase){
                document.write(frase);
                pulaLinha();
        }

    var n = parseInt(prompt("Digite o número que você quer a tabuada:")); 

    mostra("<h1>A tabuada de " + n + " é:</h1>")

    for(var multiplicador = 1; multiplicador <= 10; multiplicador++){
        mostra(n * multiplicador);
    }

