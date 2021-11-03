

    function sorteia(){
        return Math.round(Math.random() * 10);
    }
   

    function sorteiaNumeros(quantidade){

        var segredo = [];
        var num = 1; 

            while (num <= quantidade){
            
                var numeroAleatorio = sorteia();

                if (numeroAleatorio !== 0){

                        var achou = false;
                    
                        for (var posicao = 0; posicao < segredo.length; posicao++){
                            if (segredo[posicao] == numeroAleatorio){
                                achou = true;
                                break;
                            } 
                        }   
                        if (achou == false){
                            segredo.push(numeroAleatorio);    
                            num++;
                        }
                    }    
                    
            }

        return segredo;
    }

 var segredo = sorteiaNumeros(4);

        console.log(segredo);

 var input = document.querySelector("input");
        input.focus();


    function verifica(){

var achou = false;
        for (var posicao = 0; posicao < segredo.length; posicao++){

            if (input.value == segredo[posicao]){
                alert("Você acertou!")
                achou = true;
                break;
            } 
        }
            if (achou == false){
                alert("Você errou!");
            }

        input.value = "";
        
        input.focus();
    
    } 


var button = document.querySelector("button");
    button.onclick = verifica;

