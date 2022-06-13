export function A001(estado){


    function acessarAPI(url) {
      let requisicao = new XMLHttpRequest()
      requisicao.open("GET", url, false)
      requisicao.send()
      return requisicao.responseText
    } // fim do acessarAPI
    //function carregarDadosAPI() {
      let dados = acessarAPI(
          "https://servicodados.ibge.gov.br/api/v3/agregados/1301/periodos/2010/variaveis/615?localidades=N3["+estado+"]"
          
      )
      let vagas = JSON.parse(dados)
      console.log(vagas)
     
      let divDados = ""
      vagas.forEach(element => {
          // funcao anonima para tratar a resposta da API
          divDados += '<img src="https://servicodados.ibge.gov.br/api/v3/malhas/estados/'+estado+'?formato=image/svg+xml&qualidade=maxima">'
          divDados += '<ul>'
          divDados += '<li> Estado:    <text>'+element.resultados[0].series[0].localidade.nome+'</text> </li>'
          divDados += '<li> Area Territorial:  <text>'+element.resultados[0].series[0].serie["2010"]+' km²</text> </li>'
          
          
      }) // fim do foreach

      dados = acessarAPI(
        "https://servicodados.ibge.gov.br/api/v3/agregados/1301/periodos/2010/variaveis/616?localidades=N3["+estado+"]"
        
      )
  
      vagas = JSON.parse(dados)
      console.log(vagas)
  
      vagas.forEach(element => {
  
        divDados += '<li> Densidade Demografica: <text>'+ element.resultados[0].series[0].serie["2010"] +' hab/km²</text> </li>'
        divDados += '</ul>'
  
      })

      document.getElementById("card").innerHTML = divDados
    
    //} // fim do carregarDadosAPI
    
    }

export function A002(){
  function acessarAPI(url) {
    let requisicao = new XMLHttpRequest()
    requisicao.open("GET", url, false)
    requisicao.send()
    return requisicao.responseText
  } // fim do acessarAPI
  //function carregarDadosAPI() {
    let dados = acessarAPI(
        "https://servicodados.ibge.gov.br/api/v3/agregados/1301/periodos/2010/variaveis/615?localidades=N1[all]"
        
    )
  
    let vagas = JSON.parse(dados)
    console.log(vagas)
   
    let divDados = ""
    vagas.forEach(element => {
        // funcao anonima para tratar a resposta da API
        divDados += '<li>'
        divDados += '<img src="https://www.ibge.gov.br/modules/mod_quick_facts/css/images/area.png"> '
        divDados += '<b>Área Territorial:  </b>  <text>'+ element.resultados[0].series[0].serie["2010"] +' km²</text>'
        divDados += '</li>'
        

        
        
        
    }) // fim do foreach

    dados = acessarAPI(
      "https://servicodados.ibge.gov.br/api/v3/agregados/1301/periodos/2010/variaveis/616?localidades=N1[all]"
      
    )

    vagas = JSON.parse(dados)
    console.log(vagas)

    vagas.forEach(element => {

        divDados += '<li>'
        divDados += '<img src="https://www.ibge.gov.br/modules/mod_quick_facts/css/images/densidade.png"> '
        divDados += '<b>Densidade demográfica:  </b>  <text>'+element.resultados[0].series[0].serie["2010"]+' hab/km² </text>'
        divDados += '</li>'

    })

    



    document.getElementById("dados").innerHTML = divDados
  
  //} // fim do carregarDadosAPI

}








export function A003(estado) {
  function acessarAPI(url) {
    let requisicao = new XMLHttpRequest()
    requisicao.open("GET", url, false)
    requisicao.send()
    return requisicao.responseText
  } // fim do acessarAPI
  //function carregarDadosAPI() {
    let dados = acessarAPI(
        "https://servicodados.ibge.gov.br/api/v3/agregados/1301/periodos/2010/variaveis/615?localidades=N2["+estado+"]"
        
    )
  
    let vagas = JSON.parse(dados)
    console.log(vagas)
   
    let divDados = ""
    vagas.forEach(element => {
        // funcao anonima para tratar a resposta da API
        divDados += '<br> <h2><b>Grande Região:</b></h2> <h3 style="color:black;">'+element.resultados[0].series[0].localidade["nome"]+'</h3>'
        divDados += '<li>'
        divDados += '<img src="https://www.ibge.gov.br/modules/mod_quick_facts/css/images/area.png"> '
        divDados += '<b>Área Territorial:  </b>  <text>'+ element.resultados[0].series[0].serie["2010"] +' km²</text>'
        divDados += '</li>'
        
        
        
        
    }) // fim do foreach

    dados = acessarAPI(
      "https://servicodados.ibge.gov.br/api/v3/agregados/1301/periodos/2010/variaveis/616?localidades=N2["+estado+"]"
      
    )

    vagas = JSON.parse(dados)
    console.log(vagas)

    vagas.forEach(element => {

        divDados += '<li>'
        divDados += '<img src="https://www.ibge.gov.br/modules/mod_quick_facts/css/images/densidade.png"> '
        divDados += '<b>Densidade demográfica:  </b>  <text>'+element.resultados[0].series[0].serie["2010"]+' hab/km² </text>'
        divDados += '</li>'

    })

    



    document.getElementById("dados2").innerHTML = divDados;
    
  

}

export function A004(){

  function acessarAPI(url) {
    let requisicao = new XMLHttpRequest()
    requisicao.open("GET", url, false)
    requisicao.send()
    return requisicao.responseText
  } // fim do acessarAPI
  //function carregarDadosAPI() {
    let dados = acessarAPI(
        "https://servicodados.ibge.gov.br/api/v3/agregados/1301/periodos/2010/variaveis/616?localidades=N8[all]"
        
    )
  
    let vagas = JSON.parse(dados)
    console.log(vagas)
   
    let divDados = ""
    vagas.forEach(element => {
        
        divDados += '<table id="tabela">'
        divDados += '<thead>'
        divDados += '<tr> <td> Messorregião </td> </tr>' 
        divDados += '</thead>'
        divDados += '<tbody> <tr> <td>'
        divDados += '<div class="scroll"> '
 
      for(var V=0; V<137; V++){

        divDados += '<label> <input type="checkbox" name="variavel">  -'+element.resultados[0].series[V].localidade["nome"]+' </label>'

      }
        divDados += '</div> </td> </tr> </tbody> </table>'
        
        
        
        
    }) // fim do foreach


    document.getElementById("Lista_Messo").innerHTML = divDados


   
}


export function A005(){

  function acessarAPI(url) {
    let requisicao = new XMLHttpRequest()
    requisicao.open("GET", url, false)
    requisicao.send()
    return requisicao.responseText
  } // fim do acessarAPI
  //function carregarDadosAPI() {
    let dados = acessarAPI(
        "https://servicodados.ibge.gov.br/api/v3/agregados/1301/periodos/2010/variaveis/616?localidades=N9[all]"
        
    )
  
    let vagas = JSON.parse(dados)
    console.log(vagas)
   
    let divDados = ""
    vagas.forEach(element => {
        
        divDados += '<table id="tabela">'
        divDados += '<thead>'
        divDados += '<tr> <td> Microrregião </td> </tr>' 
        divDados += '</thead>'
        divDados += '<tbody> <tr> <td>'
        divDados += '<div class="scroll"> '
 
      for(var V=0; V<557; V++){

        divDados += '<label> <input type="checkbox" name="variavel">  -'+element.resultados[0].series[V].localidade["nome"]+' </label>'

      }
        divDados += '</div> </td> </tr> </tbody> </table>'
        
        
        
        
    }) // fim do foreach


    document.getElementById("Lista_Micro").innerHTML = divDados


   
}