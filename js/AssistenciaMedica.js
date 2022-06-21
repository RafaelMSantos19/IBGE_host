export function C001(estado){


    function acessarAPI(url) {
      let requisicao = new XMLHttpRequest()
      requisicao.open("GET", url, false)
      requisicao.send()
      return requisicao.responseText
    } // fim do acessarAPI
    //function carregarDadosAPI() {
      let dados = acessarAPI(
          "https://servicodados.ibge.gov.br/api/v3/agregados/211/periodos/2005/variaveis/1665?localidades=N3["+estado+"]"
          
      )
      let vagas = JSON.parse(dados)
      
     
      let divDados = ""
      vagas.forEach(element => {
          // funcao anonima para tratar a resposta da API
          divDados += '<img src="https://servicodados.ibge.gov.br/api/v3/malhas/estados/'+estado+'?formato=image/svg+xml&qualidade=maxima">'
          divDados += '<ul>'
          divDados += '<li> Estado:    <text>'+element.resultados[0].series[0].localidade.nome+'</text> </li>'
          divDados += '<li> Unidades:  <text>'+element.resultados[0].series[0].serie["2005"]+'</text> </li>'
          
      }) // fim do foreach
      document.getElementById("card").innerHTML = divDados
    
    //} // fim do carregarDadosAPI
    
    }

export function C002(){
  function acessarAPI(url) {
    let requisicao = new XMLHttpRequest()
    requisicao.open("GET", url, false)
    requisicao.send()
    return requisicao.responseText
  } // fim do acessarAPI
  //function carregarDadosAPI() {
    let dados = acessarAPI(
        "https://servicodados.ibge.gov.br/api/v3/agregados/215/periodos/2005/variaveis/1665?localidades=N1[all]&classificacao=1162[0]|2555[0]"
        
    )
  
    let vagas = JSON.parse(dados)
    console.log(vagas)
   
    let divDados = ""
    vagas.forEach(element => {
        // funcao anonima para tratar a resposta da API
        divDados += '<li>'
        divDados += '<img src="https://www.ibge.gov.br/modules/mod_quick_facts/css/images/mortalidade.png"> '
        divDados += '<b>Estabelecimentos de saúde:  </b>  <text>'+ element.resultados[0].series[0].serie["2005"] +' '+element.unidade+'</text>'
        divDados += '</li>'
        
        
        
        
    }) // fim do foreach

    document.getElementById("dados").innerHTML = divDados
  
  //} // fim do carregarDadosAPI

}

export function C003(estado) {
  function acessarAPI(url) {
    let requisicao = new XMLHttpRequest()
    requisicao.open("GET", url, false)
    requisicao.send()
    return requisicao.responseText
  } // fim do acessarAPI
  //function carregarDadosAPI() {
    let dados = acessarAPI(
        "https://servicodados.ibge.gov.br/api/v3/agregados/211/periodos/2005/variaveis/1665?localidades=N2["+estado+"]"
        
    )
  
    let vagas = JSON.parse(dados)
    
   
    let divDados = ""
    vagas.forEach(element => {
        // funcao anonima para tratar a resposta da API
        divDados += '<br> <h2><b>Grande Região:</b></h2> <h3 style="color:black;">'+element.resultados[0].series[0].localidade["nome"]+'</h3>'
        divDados += '<li>'
        divDados += '<img src="https://www.ibge.gov.br/modules/mod_quick_facts/css/images/mortalidade.png"> '
        divDados += '<b>Área Territorial:  </b>  <text>'+ element.resultados[0].series[0].serie["2005"] +' Unidades</text>'
        divDados += '</li>'
        
        
        
        
    }) // fim do foreach


    



    document.getElementById("dados2").innerHTML = divDados;
    
  

}


export function C004(){


  
  

   let divDados = '<h1>Sem dados de Messoregião, Microregião e Municipio</h1>'


      

      document.getElementById("Lista_Messo").innerHTML = divDados;

}