
	function pulaLinha(){
	document.write("<br>");
	}

	function mostra(frase){
	document.write(frase);
	}


    var ano = 2021;
    var anoRafael = 1990;
    var anoPatricia = 1982;
    var anoRoberta = 1979;
		

      mostra("<h1>Quem nasceu em que ano?</h1>");
      mostra("Roberta nasceu em " + anoRoberta);
      pulaLinha();
      mostra("Patricia nasceu em " + anoPatricia);
      pulaLinha();
      mostra("Rafael nasceu em " + anoRafael);


      mostra("<h2>Diferença de Idades entre Roberta, Patricia e Rafael</h2>");
      mostra("Roberta tem " + (ano - anoRoberta) + " anos de idade.");
      pulaLinha();			
      mostra("Patricia tem " + (ano - anoPatricia) + " anos de idade.");
      pulaLinha();
         mostra("Rafael tem " + (ano - anoRafael) + " anos de idade.");

   pulaLinha();
   pulaLinha();

      mostra("A diferença de idade entre Roberta e Patricia é " + ((ano - anoRoberta) - (ano - anoPatricia)));
      pulaLinha();
         mostra("A diferença de idade entre Roberta e Rafael é " + ((ano - anoRoberta) - (ano - anoRafael)));
      pulaLinha();
      mostra("A diferença de idade entre Patricia e Rafael é " + ((ano - anoPatricia) - (ano - anoRafael)));  	 


  alert("Roberta e Patricia são velhas!");
	
