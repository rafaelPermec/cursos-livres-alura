

        function pulaLinha(){
                document.write("<br>");
        }

        function mostra(frase){
                document.write(frase);
                pulaLinha();
        }

        var quantosFamiliares = parseInt(prompt("Quantos familiares você tem?"));
        var n = 1;
        var totalIdades = 0;
        
        
        while (n <= quantosFamiliares){

            var idade = parseInt(prompt("Informe a idade do seu familiar:"));
            totalIdades += idade;
            n++;
        }

        mostra("<h1>Qual é a média das idades de todos os sues familiares?</h1>");
    var mediaIdades = totalIdades / quantosFamiliares;
    mostra("A média das idades de todos os familiares é " + mediaIdades);

    mostra("FIM");
    
