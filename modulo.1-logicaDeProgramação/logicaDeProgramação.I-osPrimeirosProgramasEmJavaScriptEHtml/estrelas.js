
        function pulaLinha(){
                document.write("<br>");
        }

        function mostra(frase){
                document.write(frase);
        }

for (var linha =1; linha <= 6; linha++){
    for(var coluna = 1; coluna <= 10; coluna++){
        document.write("*");
            if(coluna += 2){
               document.write(" "); 
            }
    }    
    pulaLinha();
}
