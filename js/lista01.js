

export function LISTA_A003(){

     function A004C(V){

        function acessarAPI(url) {
          let requisicao = new XMLHttpRequest()
          requisicao.open("GET", url, false)
          requisicao.send()
          return requisicao.responseText} 
      
        let dados;
        
        let vagas;
      
        let divDados = ""
      
          dados = acessarAPI("https://servicodados.ibge.gov.br/api/v3/agregados/1301/periodos/2010/variaveis/615?localidades=N8[all]")
      
          vagas = JSON.parse(dados)
          
         
          vagas.forEach(element => {
            
            
            divDados +='<tr class="AC'+V+'"><td>'+element.resultados[0].series[V].localidade["nome"]+'</td>'
            divDados +='<td>'+element.resultados[0].series[V].serie["2010"]+'</td>'
          })
      
          dados = acessarAPI("https://servicodados.ibge.gov.br/api/v3/agregados/1301/periodos/2010/variaveis/616?localidades=N8[all]")
      
          vagas = JSON.parse(dados)
          
      
          vagas.forEach(element => {
      
            divDados +='<td>'+element.resultados[0].series[V].serie["2010"]+'</td> '
            divDados +='<td>2010</td></tr>'
            
            
          })
           
          
      
      
          document.getElementById("Tabela_Messo").innerHTML += divDados
      
      }


      function A004L(){


        

        
        for(let i=0; i<137; i++){
            document.getElementById("A0"+i).checked=false
        }

        document.getElementById("Tabela_Messo").innerHTML = " "
        
        for(let i=0; i<137; i++){
            cha[i]=x
        }

      }


      
let V  
let cha =[];
let x=0;

for(let i=0; i<137; i++){
    cha[i]=x
}


document.getElementById('A0'+0).addEventListener('change', e=> { V=0; if(e.target.checked){ if(cha[0]==0){ A004C(V); cha[0]=1; }else{A004L();}}});
document.getElementById('A0'+1).addEventListener('change', e=> { V=1; if(e.target.checked){ if(cha[1]==0){ A004C(V); cha[1]=1; }else{A004L();}}});
document.getElementById('A0'+2).addEventListener('change', e=> { V=2; if(e.target.checked){ if(cha[2]==0){ A004C(V); cha[2]=1; }else{A004L();}}});
document.getElementById('A0'+3).addEventListener('change', e=> { V=3; if(e.target.checked){ if(cha[3]==0){ A004C(V); cha[3]=1; }else{A004L();}}});
document.getElementById('A0'+4).addEventListener('change', e=> { V=4; if(e.target.checked){ if(cha[4]==0){ A004C(V); cha[4]=1; }else{A004L();}}});
document.getElementById('A0'+5).addEventListener('change', e=> { V=5; if(e.target.checked){ if(cha[5]==0){ A004C(V); cha[5]=1; }else{A004L();}}});
document.getElementById('A0'+6).addEventListener('change', e=> { V=6; if(e.target.checked){ if(cha[6]==0){ A004C(V); cha[6]=1; }else{A004L();}}});
document.getElementById('A0'+7).addEventListener('change', e=> { V=7; if(e.target.checked){ if(cha[7]==0){ A004C(V); cha[7]=1; }else{A004L();}}});
document.getElementById('A0'+8).addEventListener('change', e=> { V=8; if(e.target.checked){ if(cha[8]==0){ A004C(V); cha[8]=1; }else{A004L();}}});
document.getElementById('A0'+9).addEventListener('change', e=> { V=9; if(e.target.checked){ if(cha[9]==0){ A004C(V); cha[9]=1; }else{A004L();}}});
document.getElementById('A0'+10).addEventListener('change', e=> { V=10; if(e.target.checked){ if(cha[10]==0){ A004C(V); cha[10]=1; }else{A004L();}}});
document.getElementById('A0'+11).addEventListener('change', e=> { V=11; if(e.target.checked){ if(cha[11]==0){ A004C(V); cha[11]=1; }else{A004L();}}});
document.getElementById('A0'+12).addEventListener('change', e=> { V=12; if(e.target.checked){ if(cha[12]==0){ A004C(V); cha[12]=1; }else{A004L();}}});
document.getElementById('A0'+13).addEventListener('change', e=> { V=13; if(e.target.checked){ if(cha[13]==0){ A004C(V); cha[13]=1; }else{A004L();}}});
document.getElementById('A0'+14).addEventListener('change', e=> { V=14; if(e.target.checked){ if(cha[14]==0){ A004C(V); cha[14]=1; }else{A004L();}}});
document.getElementById('A0'+15).addEventListener('change', e=> { V=15; if(e.target.checked){ if(cha[15]==0){ A004C(V); cha[15]=1; }else{A004L();}}});
document.getElementById('A0'+16).addEventListener('change', e=> { V=16; if(e.target.checked){ if(cha[16]==0){ A004C(V); cha[16]=1; }else{A004L();}}});
document.getElementById('A0'+17).addEventListener('change', e=> { V=17; if(e.target.checked){ if(cha[17]==0){ A004C(V); cha[17]=1; }else{A004L();}}});
document.getElementById('A0'+18).addEventListener('change', e=> { V=18; if(e.target.checked){ if(cha[18]==0){ A004C(V); cha[18]=1; }else{A004L();}}});
document.getElementById('A0'+19).addEventListener('change', e=> { V=19; if(e.target.checked){ if(cha[19]==0){ A004C(V); cha[19]=1; }else{A004L();}}});
document.getElementById('A0'+20).addEventListener('change', e=> { V=20; if(e.target.checked){ if(cha[20]==0){ A004C(V); cha[20]=1; }else{A004L();}}});
document.getElementById('A0'+21).addEventListener('change', e=> { V=21; if(e.target.checked){ if(cha[21]==0){ A004C(V); cha[21]=1; }else{A004L();}}});
document.getElementById('A0'+22).addEventListener('change', e=> { V=22; if(e.target.checked){ if(cha[22]==0){ A004C(V); cha[22]=1; }else{A004L();}}});
document.getElementById('A0'+23).addEventListener('change', e=> { V=23; if(e.target.checked){ if(cha[23]==0){ A004C(V); cha[23]=1; }else{A004L();}}});
document.getElementById('A0'+24).addEventListener('change', e=> { V=24; if(e.target.checked){ if(cha[24]==0){ A004C(V); cha[24]=1; }else{A004L();}}});
document.getElementById('A0'+25).addEventListener('change', e=> { V=25; if(e.target.checked){ if(cha[25]==0){ A004C(V); cha[25]=1; }else{A004L();}}});
document.getElementById('A0'+26).addEventListener('change', e=> { V=26; if(e.target.checked){ if(cha[26]==0){ A004C(V); cha[26]=1; }else{A004L();}}});
document.getElementById('A0'+27).addEventListener('change', e=> { V=27; if(e.target.checked){ if(cha[27]==0){ A004C(V); cha[27]=1; }else{A004L();}}});
document.getElementById('A0'+28).addEventListener('change', e=> { V=28; if(e.target.checked){ if(cha[28]==0){ A004C(V); cha[28]=1; }else{A004L();}}});
document.getElementById('A0'+29).addEventListener('change', e=> { V=29; if(e.target.checked){ if(cha[29]==0){ A004C(V); cha[29]=1; }else{A004L();}}});
document.getElementById('A0'+30).addEventListener('change', e=> { V=30; if(e.target.checked){ if(cha[30]==0){ A004C(V); cha[30]=1; }else{A004L();}}});
document.getElementById('A0'+31).addEventListener('change', e=> { V=31; if(e.target.checked){ if(cha[31]==0){ A004C(V); cha[31]=1; }else{A004L();}}});
document.getElementById('A0'+32).addEventListener('change', e=> { V=32; if(e.target.checked){ if(cha[32]==0){ A004C(V); cha[32]=1; }else{A004L();}}});
document.getElementById('A0'+33).addEventListener('change', e=> { V=33; if(e.target.checked){ if(cha[33]==0){ A004C(V); cha[33]=1; }else{A004L();}}});
document.getElementById('A0'+34).addEventListener('change', e=> { V=34; if(e.target.checked){ if(cha[34]==0){ A004C(V); cha[34]=1; }else{A004L();}}});
document.getElementById('A0'+35).addEventListener('change', e=> { V=35; if(e.target.checked){ if(cha[35]==0){ A004C(V); cha[35]=1; }else{A004L();}}});
document.getElementById('A0'+36).addEventListener('change', e=> { V=36; if(e.target.checked){ if(cha[36]==0){ A004C(V); cha[36]=1; }else{A004L();}}});
document.getElementById('A0'+37).addEventListener('change', e=> { V=37; if(e.target.checked){ if(cha[37]==0){ A004C(V); cha[37]=1; }else{A004L();}}});
document.getElementById('A0'+38).addEventListener('change', e=> { V=38; if(e.target.checked){ if(cha[38]==0){ A004C(V); cha[38]=1; }else{A004L();}}});
document.getElementById('A0'+39).addEventListener('change', e=> { V=39; if(e.target.checked){ if(cha[39]==0){ A004C(V); cha[39]=1; }else{A004L();}}});
document.getElementById('A0'+40).addEventListener('change', e=> { V=40; if(e.target.checked){ if(cha[40]==0){ A004C(V); cha[40]=1; }else{A004L();}}});
document.getElementById('A0'+41).addEventListener('change', e=> { V=41; if(e.target.checked){ if(cha[41]==0){ A004C(V); cha[41]=1; }else{A004L();}}});
document.getElementById('A0'+42).addEventListener('change', e=> { V=42; if(e.target.checked){ if(cha[42]==0){ A004C(V); cha[42]=1; }else{A004L();}}});
document.getElementById('A0'+43).addEventListener('change', e=> { V=43; if(e.target.checked){ if(cha[43]==0){ A004C(V); cha[43]=1; }else{A004L();}}});
document.getElementById('A0'+44).addEventListener('change', e=> { V=44; if(e.target.checked){ if(cha[44]==0){ A004C(V); cha[44]=1; }else{A004L();}}});
document.getElementById('A0'+45).addEventListener('change', e=> { V=45; if(e.target.checked){ if(cha[45]==0){ A004C(V); cha[45]=1; }else{A004L();}}});
document.getElementById('A0'+46).addEventListener('change', e=> { V=46; if(e.target.checked){ if(cha[46]==0){ A004C(V); cha[46]=1; }else{A004L();}}});
document.getElementById('A0'+47).addEventListener('change', e=> { V=47; if(e.target.checked){ if(cha[47]==0){ A004C(V); cha[47]=1; }else{A004L();}}});
document.getElementById('A0'+48).addEventListener('change', e=> { V=48; if(e.target.checked){ if(cha[48]==0){ A004C(V); cha[48]=1; }else{A004L();}}});
document.getElementById('A0'+49).addEventListener('change', e=> { V=49; if(e.target.checked){ if(cha[49]==0){ A004C(V); cha[49]=1; }else{A004L();}}});
document.getElementById('A0'+50).addEventListener('change', e=> { V=50; if(e.target.checked){ if(cha[50]==0){ A004C(V); cha[50]=1; }else{A004L();}}});
document.getElementById('A0'+51).addEventListener('change', e=> { V=51; if(e.target.checked){ if(cha[51]==0){ A004C(V); cha[51]=1; }else{A004L();}}});
document.getElementById('A0'+52).addEventListener('change', e=> { V=52; if(e.target.checked){ if(cha[52]==0){ A004C(V); cha[52]=1; }else{A004L();}}});
document.getElementById('A0'+53).addEventListener('change', e=> { V=53; if(e.target.checked){ if(cha[53]==0){ A004C(V); cha[53]=1; }else{A004L();}}});
document.getElementById('A0'+54).addEventListener('change', e=> { V=54; if(e.target.checked){ if(cha[54]==0){ A004C(V); cha[54]=1; }else{A004L();}}});
document.getElementById('A0'+55).addEventListener('change', e=> { V=55; if(e.target.checked){ if(cha[55]==0){ A004C(V); cha[55]=1; }else{A004L();}}});
document.getElementById('A0'+56).addEventListener('change', e=> { V=56; if(e.target.checked){ if(cha[56]==0){ A004C(V); cha[56]=1; }else{A004L();}}});
document.getElementById('A0'+57).addEventListener('change', e=> { V=57; if(e.target.checked){ if(cha[57]==0){ A004C(V); cha[57]=1; }else{A004L();}}});
document.getElementById('A0'+58).addEventListener('change', e=> { V=58; if(e.target.checked){ if(cha[58]==0){ A004C(V); cha[58]=1; }else{A004L();}}});
document.getElementById('A0'+59).addEventListener('change', e=> { V=59; if(e.target.checked){ if(cha[59]==0){ A004C(V); cha[59]=1; }else{A004L();}}});
document.getElementById('A0'+60).addEventListener('change', e=> { V=60; if(e.target.checked){ if(cha[60]==0){ A004C(V); cha[60]=1; }else{A004L();}}});
document.getElementById('A0'+61).addEventListener('change', e=> { V=61; if(e.target.checked){ if(cha[61]==0){ A004C(V); cha[61]=1; }else{A004L();}}});
document.getElementById('A0'+62).addEventListener('change', e=> { V=62; if(e.target.checked){ if(cha[62]==0){ A004C(V); cha[62]=1; }else{A004L();}}});
document.getElementById('A0'+63).addEventListener('change', e=> { V=63; if(e.target.checked){ if(cha[63]==0){ A004C(V); cha[63]=1; }else{A004L();}}});
document.getElementById('A0'+64).addEventListener('change', e=> { V=64; if(e.target.checked){ if(cha[64]==0){ A004C(V); cha[64]=1; }else{A004L();}}});
document.getElementById('A0'+65).addEventListener('change', e=> { V=65; if(e.target.checked){ if(cha[65]==0){ A004C(V); cha[65]=1; }else{A004L();}}});
document.getElementById('A0'+66).addEventListener('change', e=> { V=66; if(e.target.checked){ if(cha[66]==0){ A004C(V); cha[66]=1; }else{A004L();}}});
document.getElementById('A0'+67).addEventListener('change', e=> { V=67; if(e.target.checked){ if(cha[67]==0){ A004C(V); cha[67]=1; }else{A004L();}}});
document.getElementById('A0'+68).addEventListener('change', e=> { V=68; if(e.target.checked){ if(cha[68]==0){ A004C(V); cha[68]=1; }else{A004L();}}});
document.getElementById('A0'+69).addEventListener('change', e=> { V=69; if(e.target.checked){ if(cha[69]==0){ A004C(V); cha[69]=1; }else{A004L();}}});
document.getElementById('A0'+70).addEventListener('change', e=> { V=70; if(e.target.checked){ if(cha[70]==0){ A004C(V); cha[70]=1; }else{A004L();}}});
document.getElementById('A0'+71).addEventListener('change', e=> { V=71; if(e.target.checked){ if(cha[71]==0){ A004C(V); cha[71]=1; }else{A004L();}}});
document.getElementById('A0'+72).addEventListener('change', e=> { V=72; if(e.target.checked){ if(cha[72]==0){ A004C(V); cha[72]=1; }else{A004L();}}});
document.getElementById('A0'+73).addEventListener('change', e=> { V=73; if(e.target.checked){ if(cha[73]==0){ A004C(V); cha[73]=1; }else{A004L();}}});
document.getElementById('A0'+74).addEventListener('change', e=> { V=74; if(e.target.checked){ if(cha[74]==0){ A004C(V); cha[74]=1; }else{A004L();}}});
document.getElementById('A0'+75).addEventListener('change', e=> { V=75; if(e.target.checked){ if(cha[75]==0){ A004C(V); cha[75]=1; }else{A004L();}}});
document.getElementById('A0'+76).addEventListener('change', e=> { V=76; if(e.target.checked){ if(cha[76]==0){ A004C(V); cha[76]=1; }else{A004L();}}});
document.getElementById('A0'+77).addEventListener('change', e=> { V=77; if(e.target.checked){ if(cha[77]==0){ A004C(V); cha[77]=1; }else{A004L();}}});
document.getElementById('A0'+78).addEventListener('change', e=> { V=78; if(e.target.checked){ if(cha[78]==0){ A004C(V); cha[78]=1; }else{A004L();}}});
document.getElementById('A0'+79).addEventListener('change', e=> { V=79; if(e.target.checked){ if(cha[79]==0){ A004C(V); cha[79]=1; }else{A004L();}}});
document.getElementById('A0'+80).addEventListener('change', e=> { V=80; if(e.target.checked){ if(cha[80]==0){ A004C(V); cha[80]=1; }else{A004L();}}});
document.getElementById('A0'+81).addEventListener('change', e=> { V=81; if(e.target.checked){ if(cha[81]==0){ A004C(V); cha[81]=1; }else{A004L();}}});
document.getElementById('A0'+82).addEventListener('change', e=> { V=82; if(e.target.checked){ if(cha[82]==0){ A004C(V); cha[82]=1; }else{A004L();}}});
document.getElementById('A0'+83).addEventListener('change', e=> { V=83; if(e.target.checked){ if(cha[83]==0){ A004C(V); cha[83]=1; }else{A004L();}}});
document.getElementById('A0'+84).addEventListener('change', e=> { V=84; if(e.target.checked){ if(cha[84]==0){ A004C(V); cha[84]=1; }else{A004L();}}});
document.getElementById('A0'+85).addEventListener('change', e=> { V=85; if(e.target.checked){ if(cha[85]==0){ A004C(V); cha[85]=1; }else{A004L();}}});
document.getElementById('A0'+86).addEventListener('change', e=> { V=86; if(e.target.checked){ if(cha[86]==0){ A004C(V); cha[86]=1; }else{A004L();}}});
document.getElementById('A0'+87).addEventListener('change', e=> { V=87; if(e.target.checked){ if(cha[87]==0){ A004C(V); cha[87]=1; }else{A004L();}}});
document.getElementById('A0'+88).addEventListener('change', e=> { V=88; if(e.target.checked){ if(cha[88]==0){ A004C(V); cha[88]=1; }else{A004L();}}});
document.getElementById('A0'+89).addEventListener('change', e=> { V=89; if(e.target.checked){ if(cha[89]==0){ A004C(V); cha[89]=1; }else{A004L();}}});
document.getElementById('A0'+90).addEventListener('change', e=> { V=90; if(e.target.checked){ if(cha[90]==0){ A004C(V); cha[90]=1; }else{A004L();}}});
document.getElementById('A0'+91).addEventListener('change', e=> { V=91; if(e.target.checked){ if(cha[91]==0){ A004C(V); cha[91]=1; }else{A004L();}}});
document.getElementById('A0'+92).addEventListener('change', e=> { V=92; if(e.target.checked){ if(cha[92]==0){ A004C(V); cha[92]=1; }else{A004L();}}});
document.getElementById('A0'+93).addEventListener('change', e=> { V=93; if(e.target.checked){ if(cha[93]==0){ A004C(V); cha[93]=1; }else{A004L();}}});
document.getElementById('A0'+94).addEventListener('change', e=> { V=94; if(e.target.checked){ if(cha[94]==0){ A004C(V); cha[94]=1; }else{A004L();}}});
document.getElementById('A0'+95).addEventListener('change', e=> { V=95; if(e.target.checked){ if(cha[95]==0){ A004C(V); cha[95]=1; }else{A004L();}}});
document.getElementById('A0'+96).addEventListener('change', e=> { V=96; if(e.target.checked){ if(cha[96]==0){ A004C(V); cha[96]=1; }else{A004L();}}});
document.getElementById('A0'+97).addEventListener('change', e=> { V=97; if(e.target.checked){ if(cha[97]==0){ A004C(V); cha[97]=1; }else{A004L();}}});
document.getElementById('A0'+98).addEventListener('change', e=> { V=98; if(e.target.checked){ if(cha[98]==0){ A004C(V); cha[98]=1; }else{A004L();}}});
document.getElementById('A0'+99).addEventListener('change', e=> { V=99; if(e.target.checked){ if(cha[99]==0){ A004C(V); cha[99]=1; }else{A004L();}}});
document.getElementById('A0'+100).addEventListener('change', e=> { V=100; if(e.target.checked){ if(cha[100]==0){ A004C(V); cha[100]=1; }else{A004L();}}});
document.getElementById('A0'+101).addEventListener('change', e=> { V=101; if(e.target.checked){ if(cha[101]==0){ A004C(V); cha[101]=1; }else{A004L();}}});
document.getElementById('A0'+102).addEventListener('change', e=> { V=102; if(e.target.checked){ if(cha[102]==0){ A004C(V); cha[102]=1; }else{A004L();}}});
document.getElementById('A0'+103).addEventListener('change', e=> { V=103; if(e.target.checked){ if(cha[103]==0){ A004C(V); cha[103]=1; }else{A004L();}}});
document.getElementById('A0'+104).addEventListener('change', e=> { V=104; if(e.target.checked){ if(cha[104]==0){ A004C(V); cha[104]=1; }else{A004L();}}});
document.getElementById('A0'+105).addEventListener('change', e=> { V=105; if(e.target.checked){ if(cha[105]==0){ A004C(V); cha[105]=1; }else{A004L();}}});
document.getElementById('A0'+106).addEventListener('change', e=> { V=106; if(e.target.checked){ if(cha[106]==0){ A004C(V); cha[106]=1; }else{A004L();}}});
document.getElementById('A0'+107).addEventListener('change', e=> { V=107; if(e.target.checked){ if(cha[107]==0){ A004C(V); cha[107]=1; }else{A004L();}}});
document.getElementById('A0'+108).addEventListener('change', e=> { V=108; if(e.target.checked){ if(cha[108]==0){ A004C(V); cha[108]=1; }else{A004L();}}});
document.getElementById('A0'+109).addEventListener('change', e=> { V=109; if(e.target.checked){ if(cha[109]==0){ A004C(V); cha[109]=1; }else{A004L();}}});
document.getElementById('A0'+110).addEventListener('change', e=> { V=110; if(e.target.checked){ if(cha[110]==0){ A004C(V); cha[110]=1; }else{A004L();}}});
document.getElementById('A0'+111).addEventListener('change', e=> { V=111; if(e.target.checked){ if(cha[111]==0){ A004C(V); cha[111]=1; }else{A004L();}}});
document.getElementById('A0'+112).addEventListener('change', e=> { V=112; if(e.target.checked){ if(cha[112]==0){ A004C(V); cha[112]=1; }else{A004L();}}});
document.getElementById('A0'+113).addEventListener('change', e=> { V=113; if(e.target.checked){ if(cha[113]==0){ A004C(V); cha[113]=1; }else{A004L();}}});
document.getElementById('A0'+114).addEventListener('change', e=> { V=114; if(e.target.checked){ if(cha[114]==0){ A004C(V); cha[114]=1; }else{A004L();}}});
document.getElementById('A0'+115).addEventListener('change', e=> { V=115; if(e.target.checked){ if(cha[115]==0){ A004C(V); cha[115]=1; }else{A004L();}}});
document.getElementById('A0'+116).addEventListener('change', e=> { V=116; if(e.target.checked){ if(cha[116]==0){ A004C(V); cha[116]=1; }else{A004L();}}});
document.getElementById('A0'+117).addEventListener('change', e=> { V=117; if(e.target.checked){ if(cha[117]==0){ A004C(V); cha[117]=1; }else{A004L();}}});
document.getElementById('A0'+118).addEventListener('change', e=> { V=118; if(e.target.checked){ if(cha[118]==0){ A004C(V); cha[118]=1; }else{A004L();}}});
document.getElementById('A0'+119).addEventListener('change', e=> { V=119; if(e.target.checked){ if(cha[119]==0){ A004C(V); cha[119]=1; }else{A004L();}}});
document.getElementById('A0'+120).addEventListener('change', e=> { V=120; if(e.target.checked){ if(cha[120]==0){ A004C(V); cha[120]=1; }else{A004L();}}});
document.getElementById('A0'+121).addEventListener('change', e=> { V=121; if(e.target.checked){ if(cha[121]==0){ A004C(V); cha[121]=1; }else{A004L();}}});
document.getElementById('A0'+122).addEventListener('change', e=> { V=122; if(e.target.checked){ if(cha[122]==0){ A004C(V); cha[122]=1; }else{A004L();}}});
document.getElementById('A0'+123).addEventListener('change', e=> { V=123; if(e.target.checked){ if(cha[123]==0){ A004C(V); cha[123]=1; }else{A004L();}}});
document.getElementById('A0'+124).addEventListener('change', e=> { V=124; if(e.target.checked){ if(cha[124]==0){ A004C(V); cha[124]=1; }else{A004L();}}});
document.getElementById('A0'+125).addEventListener('change', e=> { V=125; if(e.target.checked){ if(cha[125]==0){ A004C(V); cha[125]=1; }else{A004L();}}});
document.getElementById('A0'+126).addEventListener('change', e=> { V=126; if(e.target.checked){ if(cha[126]==0){ A004C(V); cha[126]=1; }else{A004L();}}});
document.getElementById('A0'+127).addEventListener('change', e=> { V=127; if(e.target.checked){ if(cha[127]==0){ A004C(V); cha[127]=1; }else{A004L();}}});
document.getElementById('A0'+128).addEventListener('change', e=> { V=128; if(e.target.checked){ if(cha[128]==0){ A004C(V); cha[128]=1; }else{A004L();}}});
document.getElementById('A0'+129).addEventListener('change', e=> { V=129; if(e.target.checked){ if(cha[129]==0){ A004C(V); cha[129]=1; }else{A004L();}}});
document.getElementById('A0'+130).addEventListener('change', e=> { V=130; if(e.target.checked){ if(cha[130]==0){ A004C(V); cha[130]=1; }else{A004L();}}});
document.getElementById('A0'+131).addEventListener('change', e=> { V=131; if(e.target.checked){ if(cha[131]==0){ A004C(V); cha[131]=1; }else{A004L();}}});
document.getElementById('A0'+132).addEventListener('change', e=> { V=132; if(e.target.checked){ if(cha[132]==0){ A004C(V); cha[132]=1; }else{A004L();}}});
document.getElementById('A0'+133).addEventListener('change', e=> { V=133; if(e.target.checked){ if(cha[133]==0){ A004C(V); cha[133]=1; }else{A004L();}}});
document.getElementById('A0'+134).addEventListener('change', e=> { V=134; if(e.target.checked){ if(cha[134]==0){ A004C(V); cha[134]=1; }else{A004L();}}});
document.getElementById('A0'+135).addEventListener('change', e=> { V=135; if(e.target.checked){ if(cha[135]==0){ A004C(V); cha[135]=1; }else{A004L();}}});
document.getElementById('A0'+136).addEventListener('change', e=> { V=136; if(e.target.checked){ if(cha[136]==0){ A004C(V); cha[136]=1; }else{A004L();}}}); 
}