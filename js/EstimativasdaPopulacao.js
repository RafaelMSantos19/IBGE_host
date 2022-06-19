export function B001(estado){


    function acessarAPI(url) {
      let requisicao = new XMLHttpRequest()
      requisicao.open("GET", url, false)
      requisicao.send()
      return requisicao.responseText
    } // fim do acessarAPI
    //function carregarDadosAPI() {
      let dados = acessarAPI(
          "https://servicodados.ibge.gov.br/api/v3/agregados/6579/periodos/2021/variaveis/9324?localidades=N3["+estado+"]"
          
      )
      
      let vagas = JSON.parse(dados)
      console.log(vagas)
     
      let divDados = ""
      vagas.forEach(element => {
          // funcao anonima para tratar a resposta da API
          divDados += '<img src="https://servicodados.ibge.gov.br/api/v3/malhas/estados/'+ estado +'?formato=image/svg+xml&qualidade=maxima">'
          divDados += '<ul>'
          divDados += '<li> Estado:    <text>'+ element.resultados[0].series[0].localidade.nome +'</text> </li>'
          divDados += '<li> População estimada:  <text>'+ element.resultados[0].series[0].serie["2021"] +' '+element.unidade+'</text> </li>'
          divDados += '</ul>'
          
      }) // fim do foreach
      document.getElementById("card").innerHTML = divDados
    
    //} // fim do carregarDadosAPI
    
    }

export function B002(){
  function acessarAPI(url) {
    let requisicao = new XMLHttpRequest()
    requisicao.open("GET", url, false)
    requisicao.send()
    return requisicao.responseText
  } // fim do acessarAPI
  //function carregarDadosAPI() {
    let dados = acessarAPI(
        "https://servicodados.ibge.gov.br/api/v3/agregados/6579/periodos/2021/variaveis/9324?localidades=N1[all]"
        
    )
  
    let vagas = JSON.parse(dados)
    console.log(vagas)
   
    let divDados = ""
    vagas.forEach(element => {
        // funcao anonima para tratar a resposta da API
        divDados += '<li>'
        divDados += '<img src="https://www.ibge.gov.br/modules/mod_quick_facts/css/images/populacao.png">'
        divDados += '<b>População estimada:  </b>  <text>'+ element.resultados[0].series[0].serie["2021"] +' '+ element.unidade +'</text>'
        divDados += '</li>'
        
        
        
        
    }) // fim do foreach

    document.getElementById("dados").innerHTML = divDados
  
  //} // fim do carregarDadosAPI

}

export function B003(estado) {
  function acessarAPI(url) {
    let requisicao = new XMLHttpRequest()
    requisicao.open("GET", url, false)
    requisicao.send()
    return requisicao.responseText
  } // fim do acessarAPI
  //function carregarDadosAPI() {
    let dados = acessarAPI(
        "https://servicodados.ibge.gov.br/api/v3/agregados/6579/periodos/2021/variaveis/9324?localidades=N2["+estado+"]"
        
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


    



    document.getElementById("dados2").innerHTML = divDados;
    
  

}

export function A004(){

  function acessarAPI(url) {
    let requisicao = new XMLHttpRequest()
    requisicao.open("GET", url, false)
    requisicao.send()
    return requisicao.responseText} // fim do acessarAPI
  //function carregarDadosAPI() {
    let dados = acessarAPI(
        "https://servicodados.ibge.gov.br/api/v3/agregados/1301/periodos/2010/variaveis/615?localidades=N8[all]"
        
    )
  
    let vagas = JSON.parse(dados)
    
   
    let divDados = ""
    vagas.forEach(element => {
        
        divDados += '<table id="tabela">'
        divDados += '<thead>'
        divDados += '<tr> <td> Messorregião </td> </tr>' 
        divDados += '</thead>'
        divDados += '<tbody> <tr> <td>'
        divDados += '<div class="scroll"> '
 
      for(var V=0; V<137; V++){

        divDados += '<label> <input type="checkbox" id="A0'+V+'" >  -'+element.resultados[0].series[V].localidade["nome"]+' </label>'

      }
        divDados += '</div> </td> </tr> </tbody> </table>'
        divDados +='<div class="Mostra_Messo_Micro"> <table><thead> '
        divDados +='<tr> <th>Nome</th>  <th>Km²</th> <th>Hab/Km²</th> <th>Ano do dado</th> </tr> </thead>'
        divDados +='<tbody id="Tabela_Messo">  </tbody></table>'


        
        
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
 
      for(var V=0; V<558; V++){

        divDados += '<label> <input type="checkbox" id="B0'+V+'">  -'+element.resultados[0].series[V].localidade["nome"]+' </label>'

      }
        divDados += '</div> </td> </tr> </tbody> </table>'
        divDados +='<div class="Mostra_Messo_Micro"> <table> '
        divDados +='<tr> <th>Nome</th>  <th>Km²</th> <th>Hab/Km²</th> <th>Ano do dado</th> </tr>'
        divDados +='<tbody id="Tabela_Micro">  </tbody></table>'
           
        
    }) // fim do foreach


    document.getElementById("Lista_Micro").innerHTML = divDados


   
}

export function A006(){

  function acessarAPI(url) {
    let requisicao = new XMLHttpRequest()
    requisicao.open("GET", url, false)
    requisicao.send()
    return requisicao.responseText
  } // fim do acessarAPI
  //function carregarDadosAPI() {
    let dados = acessarAPI(
        "https://servicodados.ibge.gov.br/api/v3/agregados/1301/periodos/2010/variaveis/616?localidades=N6[all]"
        
    )
  
    let vagas = JSON.parse(dados)
    console.log(vagas)
   
    let divDados = ""
    vagas.forEach(element => {
        
        divDados += '<table id="tabela">'
        divDados += '<thead>'
        divDados += '<tr> <td> Municipio </td> </tr>' 
        divDados += '</thead>'
        divDados += '<tbody> <tr> <td>'
        divDados += '<div class="scroll"> '

        for(var V=0; V<50; V++){
        
          divDados += '<label> <input type="checkbox" id="C0'+V+'">  -'+element.resultados[0].series[V].localidade["nome"]+' </label>'
  
        }
          divDados += '</div> </td> </tr> </tbody> </table>'
          divDados +='<div class="Mostra_Messo_Micro"> <table> '
          divDados +='<tr> <th>Nome</th>  <th>Km²</th> <th>Hab/Km²</th> <th>Ano do dado</th> </tr>'
          divDados +='<tbody id="Tabela_Municipio">  </tbody></table>'
             
          
      }) 
      


  document.getElementById("Lista_Municipio").innerHTML = divDados;  
}

