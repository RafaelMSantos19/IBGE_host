export function LISTA_A004(){

    function A005C(V){

        function acessarAPI(url) {
          let requisicao = new XMLHttpRequest()
          requisicao.open("GET", url, false)
          requisicao.send()
          return requisicao.responseText} 
      
        let dados;
        
        let vagas;
      
        let divDados = ""
      
          dados = acessarAPI("https://servicodados.ibge.gov.br/api/v3/agregados/1301/periodos/2010/variaveis/615?localidades=N9[all]")
      
          vagas = JSON.parse(dados)
          
         
          vagas.forEach(element => {
            
            
            divDados +='<tr class="AC'+V+'"><td>'+element.resultados[0].series[V].localidade["nome"]+'</td>'
            divDados +='<td>'+element.resultados[0].series[V].serie["2010"]+'</td>'
          })
      
          dados = acessarAPI("https://servicodados.ibge.gov.br/api/v3/agregados/1301/periodos/2010/variaveis/616?localidades=N9[all]")
      
          vagas = JSON.parse(dados)
          
      
          vagas.forEach(element => {
      
            divDados +='<td>'+element.resultados[0].series[V].serie["2010"]+'</td> '
            divDados +='<td>2010</td></tr>'
            
            
          })
           
          
      
      
          document.getElementById("Tabela_Micro").innerHTML += divDados
      
      }


      function A005L(){


        

        
        for(let i=0; i<558; i++){
            document.getElementById("B0"+i).checked=false
        }

        document.getElementById("Tabela_Micro").innerHTML = " "
        
        for(let i=0; i<558; i++){
            cha[i]=x
        }

      }


      
let V  
let cha =[];
let x=0;

for(let i=0; i<558; i++){
    cha[i]=x
}



document.getElementById('B0'+0).addEventListener('change', e=> {V=0; if(e.target.checked){if(cha[0]==0){A005C(V); cha[0]=1}}else{A005L();}});
document.getElementById('B0'+1).addEventListener('change', e=> {V=1; if(e.target.checked){if(cha[1]==0){A005C(V); cha[1]=1}}else{A005L();}});
document.getElementById('B0'+2).addEventListener('change', e=> {V=2; if(e.target.checked){if(cha[2]==0){A005C(V); cha[2]=1}}else{A005L();}});
document.getElementById('B0'+3).addEventListener('change', e=> {V=3; if(e.target.checked){if(cha[3]==0){A005C(V); cha[3]=1}}else{A005L();}});
document.getElementById('B0'+4).addEventListener('change', e=> {V=4; if(e.target.checked){if(cha[4]==0){A005C(V); cha[4]=1}}else{A005L();}});
document.getElementById('B0'+5).addEventListener('change', e=> {V=5; if(e.target.checked){if(cha[5]==0){A005C(V); cha[5]=1}}else{A005L();}});
document.getElementById('B0'+6).addEventListener('change', e=> {V=6; if(e.target.checked){if(cha[6]==0){A005C(V); cha[6]=1}}else{A005L();}});
document.getElementById('B0'+7).addEventListener('change', e=> {V=7; if(e.target.checked){if(cha[7]==0){A005C(V); cha[7]=1}}else{A005L();}});
document.getElementById('B0'+8).addEventListener('change', e=> {V=8; if(e.target.checked){if(cha[8]==0){A005C(V); cha[8]=1}}else{A005L();}});
document.getElementById('B0'+9).addEventListener('change', e=> {V=9; if(e.target.checked){if(cha[9]==0){A005C(V); cha[9]=1}}else{A005L();}});
document.getElementById('B0'+10).addEventListener('change', e=> {V=10; if(e.target.checked){if(cha[10]==0){A005C(V); cha[10]=1}}else{A005L();}});
document.getElementById('B0'+11).addEventListener('change', e=> {V=11; if(e.target.checked){if(cha[11]==0){A005C(V); cha[11]=1}}else{A005L();}});
document.getElementById('B0'+12).addEventListener('change', e=> {V=12; if(e.target.checked){if(cha[12]==0){A005C(V); cha[12]=1}}else{A005L();}});
document.getElementById('B0'+13).addEventListener('change', e=> {V=13; if(e.target.checked){if(cha[13]==0){A005C(V); cha[13]=1}}else{A005L();}});
document.getElementById('B0'+14).addEventListener('change', e=> {V=14; if(e.target.checked){if(cha[14]==0){A005C(V); cha[14]=1}}else{A005L();}});
document.getElementById('B0'+15).addEventListener('change', e=> {V=15; if(e.target.checked){if(cha[15]==0){A005C(V); cha[15]=1}}else{A005L();}});
document.getElementById('B0'+16).addEventListener('change', e=> {V=16; if(e.target.checked){if(cha[16]==0){A005C(V); cha[16]=1}}else{A005L();}});
document.getElementById('B0'+17).addEventListener('change', e=> {V=17; if(e.target.checked){if(cha[17]==0){A005C(V); cha[17]=1}}else{A005L();}});
document.getElementById('B0'+18).addEventListener('change', e=> {V=18; if(e.target.checked){if(cha[18]==0){A005C(V); cha[18]=1}}else{A005L();}});
document.getElementById('B0'+19).addEventListener('change', e=> {V=19; if(e.target.checked){if(cha[19]==0){A005C(V); cha[19]=1}}else{A005L();}});
document.getElementById('B0'+20).addEventListener('change', e=> {V=20; if(e.target.checked){if(cha[20]==0){A005C(V); cha[20]=1}}else{A005L();}});
document.getElementById('B0'+21).addEventListener('change', e=> {V=21; if(e.target.checked){if(cha[21]==0){A005C(V); cha[21]=1}}else{A005L();}});
document.getElementById('B0'+22).addEventListener('change', e=> {V=22; if(e.target.checked){if(cha[22]==0){A005C(V); cha[22]=1}}else{A005L();}});
document.getElementById('B0'+23).addEventListener('change', e=> {V=23; if(e.target.checked){if(cha[23]==0){A005C(V); cha[23]=1}}else{A005L();}});
document.getElementById('B0'+24).addEventListener('change', e=> {V=24; if(e.target.checked){if(cha[24]==0){A005C(V); cha[24]=1}}else{A005L();}});
document.getElementById('B0'+25).addEventListener('change', e=> {V=25; if(e.target.checked){if(cha[25]==0){A005C(V); cha[25]=1}}else{A005L();}});
document.getElementById('B0'+26).addEventListener('change', e=> {V=26; if(e.target.checked){if(cha[26]==0){A005C(V); cha[26]=1}}else{A005L();}});
document.getElementById('B0'+27).addEventListener('change', e=> {V=27; if(e.target.checked){if(cha[27]==0){A005C(V); cha[27]=1}}else{A005L();}});
document.getElementById('B0'+28).addEventListener('change', e=> {V=28; if(e.target.checked){if(cha[28]==0){A005C(V); cha[28]=1}}else{A005L();}});
document.getElementById('B0'+29).addEventListener('change', e=> {V=29; if(e.target.checked){if(cha[29]==0){A005C(V); cha[29]=1}}else{A005L();}});
document.getElementById('B0'+30).addEventListener('change', e=> {V=30; if(e.target.checked){if(cha[30]==0){A005C(V); cha[30]=1}}else{A005L();}});
document.getElementById('B0'+31).addEventListener('change', e=> {V=31; if(e.target.checked){if(cha[31]==0){A005C(V); cha[31]=1}}else{A005L();}});
document.getElementById('B0'+32).addEventListener('change', e=> {V=32; if(e.target.checked){if(cha[32]==0){A005C(V); cha[32]=1}}else{A005L();}});
document.getElementById('B0'+33).addEventListener('change', e=> {V=33; if(e.target.checked){if(cha[33]==0){A005C(V); cha[33]=1}}else{A005L();}});
document.getElementById('B0'+34).addEventListener('change', e=> {V=34; if(e.target.checked){if(cha[34]==0){A005C(V); cha[34]=1}}else{A005L();}});
document.getElementById('B0'+35).addEventListener('change', e=> {V=35; if(e.target.checked){if(cha[35]==0){A005C(V); cha[35]=1}}else{A005L();}});
document.getElementById('B0'+36).addEventListener('change', e=> {V=36; if(e.target.checked){if(cha[36]==0){A005C(V); cha[36]=1}}else{A005L();}});
document.getElementById('B0'+37).addEventListener('change', e=> {V=37; if(e.target.checked){if(cha[37]==0){A005C(V); cha[37]=1}}else{A005L();}});
document.getElementById('B0'+38).addEventListener('change', e=> {V=38; if(e.target.checked){if(cha[38]==0){A005C(V); cha[38]=1}}else{A005L();}});
document.getElementById('B0'+39).addEventListener('change', e=> {V=39; if(e.target.checked){if(cha[39]==0){A005C(V); cha[39]=1}}else{A005L();}});
document.getElementById('B0'+40).addEventListener('change', e=> {V=40; if(e.target.checked){if(cha[40]==0){A005C(V); cha[40]=1}}else{A005L();}});
document.getElementById('B0'+41).addEventListener('change', e=> {V=41; if(e.target.checked){if(cha[41]==0){A005C(V); cha[41]=1}}else{A005L();}});
document.getElementById('B0'+42).addEventListener('change', e=> {V=42; if(e.target.checked){if(cha[42]==0){A005C(V); cha[42]=1}}else{A005L();}});
document.getElementById('B0'+43).addEventListener('change', e=> {V=43; if(e.target.checked){if(cha[43]==0){A005C(V); cha[43]=1}}else{A005L();}});
document.getElementById('B0'+44).addEventListener('change', e=> {V=44; if(e.target.checked){if(cha[44]==0){A005C(V); cha[44]=1}}else{A005L();}});
document.getElementById('B0'+45).addEventListener('change', e=> {V=45; if(e.target.checked){if(cha[45]==0){A005C(V); cha[45]=1}}else{A005L();}});
document.getElementById('B0'+46).addEventListener('change', e=> {V=46; if(e.target.checked){if(cha[46]==0){A005C(V); cha[46]=1}}else{A005L();}});
document.getElementById('B0'+47).addEventListener('change', e=> {V=47; if(e.target.checked){if(cha[47]==0){A005C(V); cha[47]=1}}else{A005L();}});
document.getElementById('B0'+48).addEventListener('change', e=> {V=48; if(e.target.checked){if(cha[48]==0){A005C(V); cha[48]=1}}else{A005L();}});
document.getElementById('B0'+49).addEventListener('change', e=> {V=49; if(e.target.checked){if(cha[49]==0){A005C(V); cha[49]=1}}else{A005L();}});
document.getElementById('B0'+50).addEventListener('change', e=> {V=50; if(e.target.checked){if(cha[50]==0){A005C(V); cha[50]=1}}else{A005L();}});
document.getElementById('B0'+51).addEventListener('change', e=> {V=51; if(e.target.checked){if(cha[51]==0){A005C(V); cha[51]=1}}else{A005L();}});
document.getElementById('B0'+52).addEventListener('change', e=> {V=52; if(e.target.checked){if(cha[52]==0){A005C(V); cha[52]=1}}else{A005L();}});
document.getElementById('B0'+53).addEventListener('change', e=> {V=53; if(e.target.checked){if(cha[53]==0){A005C(V); cha[53]=1}}else{A005L();}});
document.getElementById('B0'+54).addEventListener('change', e=> {V=54; if(e.target.checked){if(cha[54]==0){A005C(V); cha[54]=1}}else{A005L();}});
document.getElementById('B0'+55).addEventListener('change', e=> {V=55; if(e.target.checked){if(cha[55]==0){A005C(V); cha[55]=1}}else{A005L();}});
document.getElementById('B0'+56).addEventListener('change', e=> {V=56; if(e.target.checked){if(cha[56]==0){A005C(V); cha[56]=1}}else{A005L();}});
document.getElementById('B0'+57).addEventListener('change', e=> {V=57; if(e.target.checked){if(cha[57]==0){A005C(V); cha[57]=1}}else{A005L();}});
document.getElementById('B0'+58).addEventListener('change', e=> {V=58; if(e.target.checked){if(cha[58]==0){A005C(V); cha[58]=1}}else{A005L();}});
document.getElementById('B0'+59).addEventListener('change', e=> {V=59; if(e.target.checked){if(cha[59]==0){A005C(V); cha[59]=1}}else{A005L();}});
document.getElementById('B0'+60).addEventListener('change', e=> {V=60; if(e.target.checked){if(cha[60]==0){A005C(V); cha[60]=1}}else{A005L();}});
document.getElementById('B0'+61).addEventListener('change', e=> {V=61; if(e.target.checked){if(cha[61]==0){A005C(V); cha[61]=1}}else{A005L();}});
document.getElementById('B0'+62).addEventListener('change', e=> {V=62; if(e.target.checked){if(cha[62]==0){A005C(V); cha[62]=1}}else{A005L();}});
document.getElementById('B0'+63).addEventListener('change', e=> {V=63; if(e.target.checked){if(cha[63]==0){A005C(V); cha[63]=1}}else{A005L();}});
document.getElementById('B0'+64).addEventListener('change', e=> {V=64; if(e.target.checked){if(cha[64]==0){A005C(V); cha[64]=1}}else{A005L();}});
document.getElementById('B0'+65).addEventListener('change', e=> {V=65; if(e.target.checked){if(cha[65]==0){A005C(V); cha[65]=1}}else{A005L();}});
document.getElementById('B0'+66).addEventListener('change', e=> {V=66; if(e.target.checked){if(cha[66]==0){A005C(V); cha[66]=1}}else{A005L();}});
document.getElementById('B0'+67).addEventListener('change', e=> {V=67; if(e.target.checked){if(cha[67]==0){A005C(V); cha[67]=1}}else{A005L();}});
document.getElementById('B0'+68).addEventListener('change', e=> {V=68; if(e.target.checked){if(cha[68]==0){A005C(V); cha[68]=1}}else{A005L();}});
document.getElementById('B0'+69).addEventListener('change', e=> {V=69; if(e.target.checked){if(cha[69]==0){A005C(V); cha[69]=1}}else{A005L();}});
document.getElementById('B0'+70).addEventListener('change', e=> {V=70; if(e.target.checked){if(cha[70]==0){A005C(V); cha[70]=1}}else{A005L();}});
document.getElementById('B0'+71).addEventListener('change', e=> {V=71; if(e.target.checked){if(cha[71]==0){A005C(V); cha[71]=1}}else{A005L();}});
document.getElementById('B0'+72).addEventListener('change', e=> {V=72; if(e.target.checked){if(cha[72]==0){A005C(V); cha[72]=1}}else{A005L();}});
document.getElementById('B0'+73).addEventListener('change', e=> {V=73; if(e.target.checked){if(cha[73]==0){A005C(V); cha[73]=1}}else{A005L();}});
document.getElementById('B0'+74).addEventListener('change', e=> {V=74; if(e.target.checked){if(cha[74]==0){A005C(V); cha[74]=1}}else{A005L();}});
document.getElementById('B0'+75).addEventListener('change', e=> {V=75; if(e.target.checked){if(cha[75]==0){A005C(V); cha[75]=1}}else{A005L();}});
document.getElementById('B0'+76).addEventListener('change', e=> {V=76; if(e.target.checked){if(cha[76]==0){A005C(V); cha[76]=1}}else{A005L();}});
document.getElementById('B0'+77).addEventListener('change', e=> {V=77; if(e.target.checked){if(cha[77]==0){A005C(V); cha[77]=1}}else{A005L();}});
document.getElementById('B0'+78).addEventListener('change', e=> {V=78; if(e.target.checked){if(cha[78]==0){A005C(V); cha[78]=1}}else{A005L();}});
document.getElementById('B0'+79).addEventListener('change', e=> {V=79; if(e.target.checked){if(cha[79]==0){A005C(V); cha[79]=1}}else{A005L();}});
document.getElementById('B0'+80).addEventListener('change', e=> {V=80; if(e.target.checked){if(cha[80]==0){A005C(V); cha[80]=1}}else{A005L();}});
document.getElementById('B0'+81).addEventListener('change', e=> {V=81; if(e.target.checked){if(cha[81]==0){A005C(V); cha[81]=1}}else{A005L();}});
document.getElementById('B0'+82).addEventListener('change', e=> {V=82; if(e.target.checked){if(cha[82]==0){A005C(V); cha[82]=1}}else{A005L();}});
document.getElementById('B0'+83).addEventListener('change', e=> {V=83; if(e.target.checked){if(cha[83]==0){A005C(V); cha[83]=1}}else{A005L();}});
document.getElementById('B0'+84).addEventListener('change', e=> {V=84; if(e.target.checked){if(cha[84]==0){A005C(V); cha[84]=1}}else{A005L();}});
document.getElementById('B0'+85).addEventListener('change', e=> {V=85; if(e.target.checked){if(cha[85]==0){A005C(V); cha[85]=1}}else{A005L();}});
document.getElementById('B0'+86).addEventListener('change', e=> {V=86; if(e.target.checked){if(cha[86]==0){A005C(V); cha[86]=1}}else{A005L();}});
document.getElementById('B0'+87).addEventListener('change', e=> {V=87; if(e.target.checked){if(cha[87]==0){A005C(V); cha[87]=1}}else{A005L();}});
document.getElementById('B0'+88).addEventListener('change', e=> {V=88; if(e.target.checked){if(cha[88]==0){A005C(V); cha[88]=1}}else{A005L();}});
document.getElementById('B0'+89).addEventListener('change', e=> {V=89; if(e.target.checked){if(cha[89]==0){A005C(V); cha[89]=1}}else{A005L();}});
document.getElementById('B0'+90).addEventListener('change', e=> {V=90; if(e.target.checked){if(cha[90]==0){A005C(V); cha[90]=1}}else{A005L();}});
document.getElementById('B0'+91).addEventListener('change', e=> {V=91; if(e.target.checked){if(cha[91]==0){A005C(V); cha[91]=1}}else{A005L();}});
document.getElementById('B0'+92).addEventListener('change', e=> {V=92; if(e.target.checked){if(cha[92]==0){A005C(V); cha[92]=1}}else{A005L();}});
document.getElementById('B0'+93).addEventListener('change', e=> {V=93; if(e.target.checked){if(cha[93]==0){A005C(V); cha[93]=1}}else{A005L();}});
document.getElementById('B0'+94).addEventListener('change', e=> {V=94; if(e.target.checked){if(cha[94]==0){A005C(V); cha[94]=1}}else{A005L();}});
document.getElementById('B0'+95).addEventListener('change', e=> {V=95; if(e.target.checked){if(cha[95]==0){A005C(V); cha[95]=1}}else{A005L();}});
document.getElementById('B0'+96).addEventListener('change', e=> {V=96; if(e.target.checked){if(cha[96]==0){A005C(V); cha[96]=1}}else{A005L();}});
document.getElementById('B0'+97).addEventListener('change', e=> {V=97; if(e.target.checked){if(cha[97]==0){A005C(V); cha[97]=1}}else{A005L();}});
document.getElementById('B0'+98).addEventListener('change', e=> {V=98; if(e.target.checked){if(cha[98]==0){A005C(V); cha[98]=1}}else{A005L();}});
document.getElementById('B0'+99).addEventListener('change', e=> {V=99; if(e.target.checked){if(cha[99]==0){A005C(V); cha[99]=1}}else{A005L();}});
document.getElementById('B0'+100).addEventListener('change', e=> {V=100; if(e.target.checked){if(cha[100]==0){A005C(V); cha[100]=1}}else{A005L();}});
document.getElementById('B0'+101).addEventListener('change', e=> {V=101; if(e.target.checked){if(cha[101]==0){A005C(V); cha[101]=1}}else{A005L();}});
document.getElementById('B0'+102).addEventListener('change', e=> {V=102; if(e.target.checked){if(cha[102]==0){A005C(V); cha[102]=1}}else{A005L();}});
document.getElementById('B0'+103).addEventListener('change', e=> {V=103; if(e.target.checked){if(cha[103]==0){A005C(V); cha[103]=1}}else{A005L();}});
document.getElementById('B0'+104).addEventListener('change', e=> {V=104; if(e.target.checked){if(cha[104]==0){A005C(V); cha[104]=1}}else{A005L();}});
document.getElementById('B0'+105).addEventListener('change', e=> {V=105; if(e.target.checked){if(cha[105]==0){A005C(V); cha[105]=1}}else{A005L();}});
document.getElementById('B0'+106).addEventListener('change', e=> {V=106; if(e.target.checked){if(cha[106]==0){A005C(V); cha[106]=1}}else{A005L();}});
document.getElementById('B0'+107).addEventListener('change', e=> {V=107; if(e.target.checked){if(cha[107]==0){A005C(V); cha[107]=1}}else{A005L();}});
document.getElementById('B0'+108).addEventListener('change', e=> {V=108; if(e.target.checked){if(cha[108]==0){A005C(V); cha[108]=1}}else{A005L();}});
document.getElementById('B0'+109).addEventListener('change', e=> {V=109; if(e.target.checked){if(cha[109]==0){A005C(V); cha[109]=1}}else{A005L();}});
document.getElementById('B0'+110).addEventListener('change', e=> {V=110; if(e.target.checked){if(cha[110]==0){A005C(V); cha[110]=1}}else{A005L();}});
document.getElementById('B0'+111).addEventListener('change', e=> {V=111; if(e.target.checked){if(cha[111]==0){A005C(V); cha[111]=1}}else{A005L();}});
document.getElementById('B0'+112).addEventListener('change', e=> {V=112; if(e.target.checked){if(cha[112]==0){A005C(V); cha[112]=1}}else{A005L();}});
document.getElementById('B0'+113).addEventListener('change', e=> {V=113; if(e.target.checked){if(cha[113]==0){A005C(V); cha[113]=1}}else{A005L();}});
document.getElementById('B0'+114).addEventListener('change', e=> {V=114; if(e.target.checked){if(cha[114]==0){A005C(V); cha[114]=1}}else{A005L();}});
document.getElementById('B0'+115).addEventListener('change', e=> {V=115; if(e.target.checked){if(cha[115]==0){A005C(V); cha[115]=1}}else{A005L();}});
document.getElementById('B0'+116).addEventListener('change', e=> {V=116; if(e.target.checked){if(cha[116]==0){A005C(V); cha[116]=1}}else{A005L();}});
document.getElementById('B0'+117).addEventListener('change', e=> {V=117; if(e.target.checked){if(cha[117]==0){A005C(V); cha[117]=1}}else{A005L();}});
document.getElementById('B0'+118).addEventListener('change', e=> {V=118; if(e.target.checked){if(cha[118]==0){A005C(V); cha[118]=1}}else{A005L();}});
document.getElementById('B0'+119).addEventListener('change', e=> {V=119; if(e.target.checked){if(cha[119]==0){A005C(V); cha[119]=1}}else{A005L();}});
document.getElementById('B0'+120).addEventListener('change', e=> {V=120; if(e.target.checked){if(cha[120]==0){A005C(V); cha[120]=1}}else{A005L();}});
document.getElementById('B0'+121).addEventListener('change', e=> {V=121; if(e.target.checked){if(cha[121]==0){A005C(V); cha[121]=1}}else{A005L();}});
document.getElementById('B0'+122).addEventListener('change', e=> {V=122; if(e.target.checked){if(cha[122]==0){A005C(V); cha[122]=1}}else{A005L();}});
document.getElementById('B0'+123).addEventListener('change', e=> {V=123; if(e.target.checked){if(cha[123]==0){A005C(V); cha[123]=1}}else{A005L();}});
document.getElementById('B0'+124).addEventListener('change', e=> {V=124; if(e.target.checked){if(cha[124]==0){A005C(V); cha[124]=1}}else{A005L();}});
document.getElementById('B0'+125).addEventListener('change', e=> {V=125; if(e.target.checked){if(cha[125]==0){A005C(V); cha[125]=1}}else{A005L();}});
document.getElementById('B0'+126).addEventListener('change', e=> {V=126; if(e.target.checked){if(cha[126]==0){A005C(V); cha[126]=1}}else{A005L();}});
document.getElementById('B0'+127).addEventListener('change', e=> {V=127; if(e.target.checked){if(cha[127]==0){A005C(V); cha[127]=1}}else{A005L();}});
document.getElementById('B0'+128).addEventListener('change', e=> {V=128; if(e.target.checked){if(cha[128]==0){A005C(V); cha[128]=1}}else{A005L();}});
document.getElementById('B0'+129).addEventListener('change', e=> {V=129; if(e.target.checked){if(cha[129]==0){A005C(V); cha[129]=1}}else{A005L();}});
document.getElementById('B0'+130).addEventListener('change', e=> {V=130; if(e.target.checked){if(cha[130]==0){A005C(V); cha[130]=1}}else{A005L();}});
document.getElementById('B0'+131).addEventListener('change', e=> {V=131; if(e.target.checked){if(cha[131]==0){A005C(V); cha[131]=1}}else{A005L();}});
document.getElementById('B0'+132).addEventListener('change', e=> {V=132; if(e.target.checked){if(cha[132]==0){A005C(V); cha[132]=1}}else{A005L();}});
document.getElementById('B0'+133).addEventListener('change', e=> {V=133; if(e.target.checked){if(cha[133]==0){A005C(V); cha[133]=1}}else{A005L();}});
document.getElementById('B0'+134).addEventListener('change', e=> {V=134; if(e.target.checked){if(cha[134]==0){A005C(V); cha[134]=1}}else{A005L();}});
document.getElementById('B0'+135).addEventListener('change', e=> {V=135; if(e.target.checked){if(cha[135]==0){A005C(V); cha[135]=1}}else{A005L();}});
document.getElementById('B0'+136).addEventListener('change', e=> {V=136; if(e.target.checked){if(cha[136]==0){A005C(V); cha[136]=1}}else{A005L();}});
document.getElementById('B0'+137).addEventListener('change', e=> {V=137; if(e.target.checked){if(cha[137]==0){A005C(V); cha[137]=1}}else{A005L();}});
document.getElementById('B0'+138).addEventListener('change', e=> {V=138; if(e.target.checked){if(cha[138]==0){A005C(V); cha[138]=1}}else{A005L();}});
document.getElementById('B0'+139).addEventListener('change', e=> {V=139; if(e.target.checked){if(cha[139]==0){A005C(V); cha[139]=1}}else{A005L();}});
document.getElementById('B0'+140).addEventListener('change', e=> {V=140; if(e.target.checked){if(cha[140]==0){A005C(V); cha[140]=1}}else{A005L();}});
document.getElementById('B0'+141).addEventListener('change', e=> {V=141; if(e.target.checked){if(cha[141]==0){A005C(V); cha[141]=1}}else{A005L();}});
document.getElementById('B0'+142).addEventListener('change', e=> {V=142; if(e.target.checked){if(cha[142]==0){A005C(V); cha[142]=1}}else{A005L();}});
document.getElementById('B0'+143).addEventListener('change', e=> {V=143; if(e.target.checked){if(cha[143]==0){A005C(V); cha[143]=1}}else{A005L();}});
document.getElementById('B0'+144).addEventListener('change', e=> {V=144; if(e.target.checked){if(cha[144]==0){A005C(V); cha[144]=1}}else{A005L();}});
document.getElementById('B0'+145).addEventListener('change', e=> {V=145; if(e.target.checked){if(cha[145]==0){A005C(V); cha[145]=1}}else{A005L();}});
document.getElementById('B0'+146).addEventListener('change', e=> {V=146; if(e.target.checked){if(cha[146]==0){A005C(V); cha[146]=1}}else{A005L();}});
document.getElementById('B0'+147).addEventListener('change', e=> {V=147; if(e.target.checked){if(cha[147]==0){A005C(V); cha[147]=1}}else{A005L();}});
document.getElementById('B0'+148).addEventListener('change', e=> {V=148; if(e.target.checked){if(cha[148]==0){A005C(V); cha[148]=1}}else{A005L();}});
document.getElementById('B0'+149).addEventListener('change', e=> {V=149; if(e.target.checked){if(cha[149]==0){A005C(V); cha[149]=1}}else{A005L();}});
document.getElementById('B0'+150).addEventListener('change', e=> {V=150; if(e.target.checked){if(cha[150]==0){A005C(V); cha[150]=1}}else{A005L();}});
document.getElementById('B0'+151).addEventListener('change', e=> {V=151; if(e.target.checked){if(cha[151]==0){A005C(V); cha[151]=1}}else{A005L();}});
document.getElementById('B0'+152).addEventListener('change', e=> {V=152; if(e.target.checked){if(cha[152]==0){A005C(V); cha[152]=1}}else{A005L();}});
document.getElementById('B0'+153).addEventListener('change', e=> {V=153; if(e.target.checked){if(cha[153]==0){A005C(V); cha[153]=1}}else{A005L();}});
document.getElementById('B0'+154).addEventListener('change', e=> {V=154; if(e.target.checked){if(cha[154]==0){A005C(V); cha[154]=1}}else{A005L();}});
document.getElementById('B0'+155).addEventListener('change', e=> {V=155; if(e.target.checked){if(cha[155]==0){A005C(V); cha[155]=1}}else{A005L();}});
document.getElementById('B0'+156).addEventListener('change', e=> {V=156; if(e.target.checked){if(cha[156]==0){A005C(V); cha[156]=1}}else{A005L();}});
document.getElementById('B0'+157).addEventListener('change', e=> {V=157; if(e.target.checked){if(cha[157]==0){A005C(V); cha[157]=1}}else{A005L();}});
document.getElementById('B0'+158).addEventListener('change', e=> {V=158; if(e.target.checked){if(cha[158]==0){A005C(V); cha[158]=1}}else{A005L();}});
document.getElementById('B0'+159).addEventListener('change', e=> {V=159; if(e.target.checked){if(cha[159]==0){A005C(V); cha[159]=1}}else{A005L();}});
document.getElementById('B0'+160).addEventListener('change', e=> {V=160; if(e.target.checked){if(cha[160]==0){A005C(V); cha[160]=1}}else{A005L();}});
document.getElementById('B0'+161).addEventListener('change', e=> {V=161; if(e.target.checked){if(cha[161]==0){A005C(V); cha[161]=1}}else{A005L();}});
document.getElementById('B0'+162).addEventListener('change', e=> {V=162; if(e.target.checked){if(cha[162]==0){A005C(V); cha[162]=1}}else{A005L();}});
document.getElementById('B0'+163).addEventListener('change', e=> {V=163; if(e.target.checked){if(cha[163]==0){A005C(V); cha[163]=1}}else{A005L();}});
document.getElementById('B0'+164).addEventListener('change', e=> {V=164; if(e.target.checked){if(cha[164]==0){A005C(V); cha[164]=1}}else{A005L();}});
document.getElementById('B0'+165).addEventListener('change', e=> {V=165; if(e.target.checked){if(cha[165]==0){A005C(V); cha[165]=1}}else{A005L();}});
document.getElementById('B0'+166).addEventListener('change', e=> {V=166; if(e.target.checked){if(cha[166]==0){A005C(V); cha[166]=1}}else{A005L();}});
document.getElementById('B0'+167).addEventListener('change', e=> {V=167; if(e.target.checked){if(cha[167]==0){A005C(V); cha[167]=1}}else{A005L();}});
document.getElementById('B0'+168).addEventListener('change', e=> {V=168; if(e.target.checked){if(cha[168]==0){A005C(V); cha[168]=1}}else{A005L();}});
document.getElementById('B0'+169).addEventListener('change', e=> {V=169; if(e.target.checked){if(cha[169]==0){A005C(V); cha[169]=1}}else{A005L();}});
document.getElementById('B0'+170).addEventListener('change', e=> {V=170; if(e.target.checked){if(cha[170]==0){A005C(V); cha[170]=1}}else{A005L();}});
document.getElementById('B0'+171).addEventListener('change', e=> {V=171; if(e.target.checked){if(cha[171]==0){A005C(V); cha[171]=1}}else{A005L();}});
document.getElementById('B0'+172).addEventListener('change', e=> {V=172; if(e.target.checked){if(cha[172]==0){A005C(V); cha[172]=1}}else{A005L();}});
document.getElementById('B0'+173).addEventListener('change', e=> {V=173; if(e.target.checked){if(cha[173]==0){A005C(V); cha[173]=1}}else{A005L();}});
document.getElementById('B0'+174).addEventListener('change', e=> {V=174; if(e.target.checked){if(cha[174]==0){A005C(V); cha[174]=1}}else{A005L();}});
document.getElementById('B0'+175).addEventListener('change', e=> {V=175; if(e.target.checked){if(cha[175]==0){A005C(V); cha[175]=1}}else{A005L();}});
document.getElementById('B0'+176).addEventListener('change', e=> {V=176; if(e.target.checked){if(cha[176]==0){A005C(V); cha[176]=1}}else{A005L();}});
document.getElementById('B0'+177).addEventListener('change', e=> {V=177; if(e.target.checked){if(cha[177]==0){A005C(V); cha[177]=1}}else{A005L();}});
document.getElementById('B0'+178).addEventListener('change', e=> {V=178; if(e.target.checked){if(cha[178]==0){A005C(V); cha[178]=1}}else{A005L();}});
document.getElementById('B0'+179).addEventListener('change', e=> {V=179; if(e.target.checked){if(cha[179]==0){A005C(V); cha[179]=1}}else{A005L();}});
document.getElementById('B0'+180).addEventListener('change', e=> {V=180; if(e.target.checked){if(cha[180]==0){A005C(V); cha[180]=1}}else{A005L();}});
document.getElementById('B0'+181).addEventListener('change', e=> {V=181; if(e.target.checked){if(cha[181]==0){A005C(V); cha[181]=1}}else{A005L();}});
document.getElementById('B0'+182).addEventListener('change', e=> {V=182; if(e.target.checked){if(cha[182]==0){A005C(V); cha[182]=1}}else{A005L();}});
document.getElementById('B0'+183).addEventListener('change', e=> {V=183; if(e.target.checked){if(cha[183]==0){A005C(V); cha[183]=1}}else{A005L();}});
document.getElementById('B0'+184).addEventListener('change', e=> {V=184; if(e.target.checked){if(cha[184]==0){A005C(V); cha[184]=1}}else{A005L();}});
document.getElementById('B0'+185).addEventListener('change', e=> {V=185; if(e.target.checked){if(cha[185]==0){A005C(V); cha[185]=1}}else{A005L();}});
document.getElementById('B0'+186).addEventListener('change', e=> {V=186; if(e.target.checked){if(cha[186]==0){A005C(V); cha[186]=1}}else{A005L();}});
document.getElementById('B0'+187).addEventListener('change', e=> {V=187; if(e.target.checked){if(cha[187]==0){A005C(V); cha[187]=1}}else{A005L();}});
document.getElementById('B0'+188).addEventListener('change', e=> {V=188; if(e.target.checked){if(cha[188]==0){A005C(V); cha[188]=1}}else{A005L();}});
document.getElementById('B0'+189).addEventListener('change', e=> {V=189; if(e.target.checked){if(cha[189]==0){A005C(V); cha[189]=1}}else{A005L();}});
document.getElementById('B0'+190).addEventListener('change', e=> {V=190; if(e.target.checked){if(cha[190]==0){A005C(V); cha[190]=1}}else{A005L();}});
document.getElementById('B0'+191).addEventListener('change', e=> {V=191; if(e.target.checked){if(cha[191]==0){A005C(V); cha[191]=1}}else{A005L();}});
document.getElementById('B0'+192).addEventListener('change', e=> {V=192; if(e.target.checked){if(cha[192]==0){A005C(V); cha[192]=1}}else{A005L();}});
document.getElementById('B0'+193).addEventListener('change', e=> {V=193; if(e.target.checked){if(cha[193]==0){A005C(V); cha[193]=1}}else{A005L();}});
document.getElementById('B0'+194).addEventListener('change', e=> {V=194; if(e.target.checked){if(cha[194]==0){A005C(V); cha[194]=1}}else{A005L();}});
document.getElementById('B0'+195).addEventListener('change', e=> {V=195; if(e.target.checked){if(cha[195]==0){A005C(V); cha[195]=1}}else{A005L();}});
document.getElementById('B0'+196).addEventListener('change', e=> {V=196; if(e.target.checked){if(cha[196]==0){A005C(V); cha[196]=1}}else{A005L();}});
document.getElementById('B0'+197).addEventListener('change', e=> {V=197; if(e.target.checked){if(cha[197]==0){A005C(V); cha[197]=1}}else{A005L();}});
document.getElementById('B0'+198).addEventListener('change', e=> {V=198; if(e.target.checked){if(cha[198]==0){A005C(V); cha[198]=1}}else{A005L();}});
document.getElementById('B0'+199).addEventListener('change', e=> {V=199; if(e.target.checked){if(cha[199]==0){A005C(V); cha[199]=1}}else{A005L();}});
document.getElementById('B0'+200).addEventListener('change', e=> {V=200; if(e.target.checked){if(cha[200]==0){A005C(V); cha[200]=1}}else{A005L();}});
document.getElementById('B0'+201).addEventListener('change', e=> {V=201; if(e.target.checked){if(cha[201]==0){A005C(V); cha[201]=1}}else{A005L();}});
document.getElementById('B0'+202).addEventListener('change', e=> {V=202; if(e.target.checked){if(cha[202]==0){A005C(V); cha[202]=1}}else{A005L();}});
document.getElementById('B0'+203).addEventListener('change', e=> {V=203; if(e.target.checked){if(cha[203]==0){A005C(V); cha[203]=1}}else{A005L();}});
document.getElementById('B0'+204).addEventListener('change', e=> {V=204; if(e.target.checked){if(cha[204]==0){A005C(V); cha[204]=1}}else{A005L();}});
document.getElementById('B0'+205).addEventListener('change', e=> {V=205; if(e.target.checked){if(cha[205]==0){A005C(V); cha[205]=1}}else{A005L();}});
document.getElementById('B0'+206).addEventListener('change', e=> {V=206; if(e.target.checked){if(cha[206]==0){A005C(V); cha[206]=1}}else{A005L();}});
document.getElementById('B0'+207).addEventListener('change', e=> {V=207; if(e.target.checked){if(cha[207]==0){A005C(V); cha[207]=1}}else{A005L();}});
document.getElementById('B0'+208).addEventListener('change', e=> {V=208; if(e.target.checked){if(cha[208]==0){A005C(V); cha[208]=1}}else{A005L();}});
document.getElementById('B0'+209).addEventListener('change', e=> {V=209; if(e.target.checked){if(cha[209]==0){A005C(V); cha[209]=1}}else{A005L();}});
document.getElementById('B0'+210).addEventListener('change', e=> {V=210; if(e.target.checked){if(cha[210]==0){A005C(V); cha[210]=1}}else{A005L();}});
document.getElementById('B0'+211).addEventListener('change', e=> {V=211; if(e.target.checked){if(cha[211]==0){A005C(V); cha[211]=1}}else{A005L();}});
document.getElementById('B0'+212).addEventListener('change', e=> {V=212; if(e.target.checked){if(cha[212]==0){A005C(V); cha[212]=1}}else{A005L();}});
document.getElementById('B0'+213).addEventListener('change', e=> {V=213; if(e.target.checked){if(cha[213]==0){A005C(V); cha[213]=1}}else{A005L();}});
document.getElementById('B0'+214).addEventListener('change', e=> {V=214; if(e.target.checked){if(cha[214]==0){A005C(V); cha[214]=1}}else{A005L();}});
document.getElementById('B0'+215).addEventListener('change', e=> {V=215; if(e.target.checked){if(cha[215]==0){A005C(V); cha[215]=1}}else{A005L();}});
document.getElementById('B0'+216).addEventListener('change', e=> {V=216; if(e.target.checked){if(cha[216]==0){A005C(V); cha[216]=1}}else{A005L();}});
document.getElementById('B0'+217).addEventListener('change', e=> {V=217; if(e.target.checked){if(cha[217]==0){A005C(V); cha[217]=1}}else{A005L();}});
document.getElementById('B0'+218).addEventListener('change', e=> {V=218; if(e.target.checked){if(cha[218]==0){A005C(V); cha[218]=1}}else{A005L();}});
document.getElementById('B0'+219).addEventListener('change', e=> {V=219; if(e.target.checked){if(cha[219]==0){A005C(V); cha[219]=1}}else{A005L();}});
document.getElementById('B0'+220).addEventListener('change', e=> {V=220; if(e.target.checked){if(cha[220]==0){A005C(V); cha[220]=1}}else{A005L();}});
document.getElementById('B0'+221).addEventListener('change', e=> {V=221; if(e.target.checked){if(cha[221]==0){A005C(V); cha[221]=1}}else{A005L();}});
document.getElementById('B0'+222).addEventListener('change', e=> {V=222; if(e.target.checked){if(cha[222]==0){A005C(V); cha[222]=1}}else{A005L();}});
document.getElementById('B0'+223).addEventListener('change', e=> {V=223; if(e.target.checked){if(cha[223]==0){A005C(V); cha[223]=1}}else{A005L();}});
document.getElementById('B0'+224).addEventListener('change', e=> {V=224; if(e.target.checked){if(cha[224]==0){A005C(V); cha[224]=1}}else{A005L();}});
document.getElementById('B0'+225).addEventListener('change', e=> {V=225; if(e.target.checked){if(cha[225]==0){A005C(V); cha[225]=1}}else{A005L();}});
document.getElementById('B0'+226).addEventListener('change', e=> {V=226; if(e.target.checked){if(cha[226]==0){A005C(V); cha[226]=1}}else{A005L();}});
document.getElementById('B0'+227).addEventListener('change', e=> {V=227; if(e.target.checked){if(cha[227]==0){A005C(V); cha[227]=1}}else{A005L();}});
document.getElementById('B0'+228).addEventListener('change', e=> {V=228; if(e.target.checked){if(cha[228]==0){A005C(V); cha[228]=1}}else{A005L();}});
document.getElementById('B0'+229).addEventListener('change', e=> {V=229; if(e.target.checked){if(cha[229]==0){A005C(V); cha[229]=1}}else{A005L();}});
document.getElementById('B0'+230).addEventListener('change', e=> {V=230; if(e.target.checked){if(cha[230]==0){A005C(V); cha[230]=1}}else{A005L();}});
document.getElementById('B0'+231).addEventListener('change', e=> {V=231; if(e.target.checked){if(cha[231]==0){A005C(V); cha[231]=1}}else{A005L();}});
document.getElementById('B0'+232).addEventListener('change', e=> {V=232; if(e.target.checked){if(cha[232]==0){A005C(V); cha[232]=1}}else{A005L();}});
document.getElementById('B0'+233).addEventListener('change', e=> {V=233; if(e.target.checked){if(cha[233]==0){A005C(V); cha[233]=1}}else{A005L();}});
document.getElementById('B0'+234).addEventListener('change', e=> {V=234; if(e.target.checked){if(cha[234]==0){A005C(V); cha[234]=1}}else{A005L();}});
document.getElementById('B0'+235).addEventListener('change', e=> {V=235; if(e.target.checked){if(cha[235]==0){A005C(V); cha[235]=1}}else{A005L();}});
document.getElementById('B0'+236).addEventListener('change', e=> {V=236; if(e.target.checked){if(cha[236]==0){A005C(V); cha[236]=1}}else{A005L();}});
document.getElementById('B0'+237).addEventListener('change', e=> {V=237; if(e.target.checked){if(cha[237]==0){A005C(V); cha[237]=1}}else{A005L();}});
document.getElementById('B0'+238).addEventListener('change', e=> {V=238; if(e.target.checked){if(cha[238]==0){A005C(V); cha[238]=1}}else{A005L();}});
document.getElementById('B0'+239).addEventListener('change', e=> {V=239; if(e.target.checked){if(cha[239]==0){A005C(V); cha[239]=1}}else{A005L();}});
document.getElementById('B0'+240).addEventListener('change', e=> {V=240; if(e.target.checked){if(cha[240]==0){A005C(V); cha[240]=1}}else{A005L();}});
document.getElementById('B0'+241).addEventListener('change', e=> {V=241; if(e.target.checked){if(cha[241]==0){A005C(V); cha[241]=1}}else{A005L();}});
document.getElementById('B0'+242).addEventListener('change', e=> {V=242; if(e.target.checked){if(cha[242]==0){A005C(V); cha[242]=1}}else{A005L();}});
document.getElementById('B0'+243).addEventListener('change', e=> {V=243; if(e.target.checked){if(cha[243]==0){A005C(V); cha[243]=1}}else{A005L();}});
document.getElementById('B0'+244).addEventListener('change', e=> {V=244; if(e.target.checked){if(cha[244]==0){A005C(V); cha[244]=1}}else{A005L();}});
document.getElementById('B0'+245).addEventListener('change', e=> {V=245; if(e.target.checked){if(cha[245]==0){A005C(V); cha[245]=1}}else{A005L();}});
document.getElementById('B0'+246).addEventListener('change', e=> {V=246; if(e.target.checked){if(cha[246]==0){A005C(V); cha[246]=1}}else{A005L();}});
document.getElementById('B0'+247).addEventListener('change', e=> {V=247; if(e.target.checked){if(cha[247]==0){A005C(V); cha[247]=1}}else{A005L();}});
document.getElementById('B0'+248).addEventListener('change', e=> {V=248; if(e.target.checked){if(cha[248]==0){A005C(V); cha[248]=1}}else{A005L();}});
document.getElementById('B0'+249).addEventListener('change', e=> {V=249; if(e.target.checked){if(cha[249]==0){A005C(V); cha[249]=1}}else{A005L();}});
document.getElementById('B0'+250).addEventListener('change', e=> {V=250; if(e.target.checked){if(cha[250]==0){A005C(V); cha[250]=1}}else{A005L();}});
document.getElementById('B0'+251).addEventListener('change', e=> {V=251; if(e.target.checked){if(cha[251]==0){A005C(V); cha[251]=1}}else{A005L();}});
document.getElementById('B0'+252).addEventListener('change', e=> {V=252; if(e.target.checked){if(cha[252]==0){A005C(V); cha[252]=1}}else{A005L();}});
document.getElementById('B0'+253).addEventListener('change', e=> {V=253; if(e.target.checked){if(cha[253]==0){A005C(V); cha[253]=1}}else{A005L();}});
document.getElementById('B0'+254).addEventListener('change', e=> {V=254; if(e.target.checked){if(cha[254]==0){A005C(V); cha[254]=1}}else{A005L();}});
document.getElementById('B0'+255).addEventListener('change', e=> {V=255; if(e.target.checked){if(cha[255]==0){A005C(V); cha[255]=1}}else{A005L();}});
document.getElementById('B0'+256).addEventListener('change', e=> {V=256; if(e.target.checked){if(cha[256]==0){A005C(V); cha[256]=1}}else{A005L();}});
document.getElementById('B0'+257).addEventListener('change', e=> {V=257; if(e.target.checked){if(cha[257]==0){A005C(V); cha[257]=1}}else{A005L();}});
document.getElementById('B0'+258).addEventListener('change', e=> {V=258; if(e.target.checked){if(cha[258]==0){A005C(V); cha[258]=1}}else{A005L();}});
document.getElementById('B0'+259).addEventListener('change', e=> {V=259; if(e.target.checked){if(cha[259]==0){A005C(V); cha[259]=1}}else{A005L();}});
document.getElementById('B0'+260).addEventListener('change', e=> {V=260; if(e.target.checked){if(cha[260]==0){A005C(V); cha[260]=1}}else{A005L();}});
document.getElementById('B0'+261).addEventListener('change', e=> {V=261; if(e.target.checked){if(cha[261]==0){A005C(V); cha[261]=1}}else{A005L();}});
document.getElementById('B0'+262).addEventListener('change', e=> {V=262; if(e.target.checked){if(cha[262]==0){A005C(V); cha[262]=1}}else{A005L();}});
document.getElementById('B0'+263).addEventListener('change', e=> {V=263; if(e.target.checked){if(cha[263]==0){A005C(V); cha[263]=1}}else{A005L();}});
document.getElementById('B0'+264).addEventListener('change', e=> {V=264; if(e.target.checked){if(cha[264]==0){A005C(V); cha[264]=1}}else{A005L();}});
document.getElementById('B0'+265).addEventListener('change', e=> {V=265; if(e.target.checked){if(cha[265]==0){A005C(V); cha[265]=1}}else{A005L();}});
document.getElementById('B0'+266).addEventListener('change', e=> {V=266; if(e.target.checked){if(cha[266]==0){A005C(V); cha[266]=1}}else{A005L();}});
document.getElementById('B0'+267).addEventListener('change', e=> {V=267; if(e.target.checked){if(cha[267]==0){A005C(V); cha[267]=1}}else{A005L();}});
document.getElementById('B0'+268).addEventListener('change', e=> {V=268; if(e.target.checked){if(cha[268]==0){A005C(V); cha[268]=1}}else{A005L();}});
document.getElementById('B0'+269).addEventListener('change', e=> {V=269; if(e.target.checked){if(cha[269]==0){A005C(V); cha[269]=1}}else{A005L();}});
document.getElementById('B0'+270).addEventListener('change', e=> {V=270; if(e.target.checked){if(cha[270]==0){A005C(V); cha[270]=1}}else{A005L();}});
document.getElementById('B0'+271).addEventListener('change', e=> {V=271; if(e.target.checked){if(cha[271]==0){A005C(V); cha[271]=1}}else{A005L();}});
document.getElementById('B0'+272).addEventListener('change', e=> {V=272; if(e.target.checked){if(cha[272]==0){A005C(V); cha[272]=1}}else{A005L();}});
document.getElementById('B0'+273).addEventListener('change', e=> {V=273; if(e.target.checked){if(cha[273]==0){A005C(V); cha[273]=1}}else{A005L();}});
document.getElementById('B0'+274).addEventListener('change', e=> {V=274; if(e.target.checked){if(cha[274]==0){A005C(V); cha[274]=1}}else{A005L();}});
document.getElementById('B0'+275).addEventListener('change', e=> {V=275; if(e.target.checked){if(cha[275]==0){A005C(V); cha[275]=1}}else{A005L();}});
document.getElementById('B0'+276).addEventListener('change', e=> {V=276; if(e.target.checked){if(cha[276]==0){A005C(V); cha[276]=1}}else{A005L();}});
document.getElementById('B0'+277).addEventListener('change', e=> {V=277; if(e.target.checked){if(cha[277]==0){A005C(V); cha[277]=1}}else{A005L();}});
document.getElementById('B0'+278).addEventListener('change', e=> {V=278; if(e.target.checked){if(cha[278]==0){A005C(V); cha[278]=1}}else{A005L();}});
document.getElementById('B0'+279).addEventListener('change', e=> {V=279; if(e.target.checked){if(cha[279]==0){A005C(V); cha[279]=1}}else{A005L();}});
document.getElementById('B0'+280).addEventListener('change', e=> {V=280; if(e.target.checked){if(cha[280]==0){A005C(V); cha[280]=1}}else{A005L();}});
document.getElementById('B0'+281).addEventListener('change', e=> {V=281; if(e.target.checked){if(cha[281]==0){A005C(V); cha[281]=1}}else{A005L();}});
document.getElementById('B0'+282).addEventListener('change', e=> {V=282; if(e.target.checked){if(cha[282]==0){A005C(V); cha[282]=1}}else{A005L();}});
document.getElementById('B0'+283).addEventListener('change', e=> {V=283; if(e.target.checked){if(cha[283]==0){A005C(V); cha[283]=1}}else{A005L();}});
document.getElementById('B0'+284).addEventListener('change', e=> {V=284; if(e.target.checked){if(cha[284]==0){A005C(V); cha[284]=1}}else{A005L();}});
document.getElementById('B0'+285).addEventListener('change', e=> {V=285; if(e.target.checked){if(cha[285]==0){A005C(V); cha[285]=1}}else{A005L();}});
document.getElementById('B0'+286).addEventListener('change', e=> {V=286; if(e.target.checked){if(cha[286]==0){A005C(V); cha[286]=1}}else{A005L();}});
document.getElementById('B0'+287).addEventListener('change', e=> {V=287; if(e.target.checked){if(cha[287]==0){A005C(V); cha[287]=1}}else{A005L();}});
document.getElementById('B0'+288).addEventListener('change', e=> {V=288; if(e.target.checked){if(cha[288]==0){A005C(V); cha[288]=1}}else{A005L();}});
document.getElementById('B0'+289).addEventListener('change', e=> {V=289; if(e.target.checked){if(cha[289]==0){A005C(V); cha[289]=1}}else{A005L();}});
document.getElementById('B0'+290).addEventListener('change', e=> {V=290; if(e.target.checked){if(cha[290]==0){A005C(V); cha[290]=1}}else{A005L();}});
document.getElementById('B0'+291).addEventListener('change', e=> {V=291; if(e.target.checked){if(cha[291]==0){A005C(V); cha[291]=1}}else{A005L();}});
document.getElementById('B0'+292).addEventListener('change', e=> {V=292; if(e.target.checked){if(cha[292]==0){A005C(V); cha[292]=1}}else{A005L();}});
document.getElementById('B0'+293).addEventListener('change', e=> {V=293; if(e.target.checked){if(cha[293]==0){A005C(V); cha[293]=1}}else{A005L();}});
document.getElementById('B0'+294).addEventListener('change', e=> {V=294; if(e.target.checked){if(cha[294]==0){A005C(V); cha[294]=1}}else{A005L();}});
document.getElementById('B0'+295).addEventListener('change', e=> {V=295; if(e.target.checked){if(cha[295]==0){A005C(V); cha[295]=1}}else{A005L();}});
document.getElementById('B0'+296).addEventListener('change', e=> {V=296; if(e.target.checked){if(cha[296]==0){A005C(V); cha[296]=1}}else{A005L();}});
document.getElementById('B0'+297).addEventListener('change', e=> {V=297; if(e.target.checked){if(cha[297]==0){A005C(V); cha[297]=1}}else{A005L();}});
document.getElementById('B0'+298).addEventListener('change', e=> {V=298; if(e.target.checked){if(cha[298]==0){A005C(V); cha[298]=1}}else{A005L();}});
document.getElementById('B0'+299).addEventListener('change', e=> {V=299; if(e.target.checked){if(cha[299]==0){A005C(V); cha[299]=1}}else{A005L();}});
document.getElementById('B0'+300).addEventListener('change', e=> {V=300; if(e.target.checked){if(cha[300]==0){A005C(V); cha[300]=1}}else{A005L();}});
document.getElementById('B0'+301).addEventListener('change', e=> {V=301; if(e.target.checked){if(cha[301]==0){A005C(V); cha[301]=1}}else{A005L();}});
document.getElementById('B0'+302).addEventListener('change', e=> {V=302; if(e.target.checked){if(cha[302]==0){A005C(V); cha[302]=1}}else{A005L();}});
document.getElementById('B0'+303).addEventListener('change', e=> {V=303; if(e.target.checked){if(cha[303]==0){A005C(V); cha[303]=1}}else{A005L();}});
document.getElementById('B0'+304).addEventListener('change', e=> {V=304; if(e.target.checked){if(cha[304]==0){A005C(V); cha[304]=1}}else{A005L();}});
document.getElementById('B0'+305).addEventListener('change', e=> {V=305; if(e.target.checked){if(cha[305]==0){A005C(V); cha[305]=1}}else{A005L();}});
document.getElementById('B0'+306).addEventListener('change', e=> {V=306; if(e.target.checked){if(cha[306]==0){A005C(V); cha[306]=1}}else{A005L();}});
document.getElementById('B0'+307).addEventListener('change', e=> {V=307; if(e.target.checked){if(cha[307]==0){A005C(V); cha[307]=1}}else{A005L();}});
document.getElementById('B0'+308).addEventListener('change', e=> {V=308; if(e.target.checked){if(cha[308]==0){A005C(V); cha[308]=1}}else{A005L();}});
document.getElementById('B0'+309).addEventListener('change', e=> {V=309; if(e.target.checked){if(cha[309]==0){A005C(V); cha[309]=1}}else{A005L();}});
document.getElementById('B0'+310).addEventListener('change', e=> {V=310; if(e.target.checked){if(cha[310]==0){A005C(V); cha[310]=1}}else{A005L();}});
document.getElementById('B0'+311).addEventListener('change', e=> {V=311; if(e.target.checked){if(cha[311]==0){A005C(V); cha[311]=1}}else{A005L();}});
document.getElementById('B0'+312).addEventListener('change', e=> {V=312; if(e.target.checked){if(cha[312]==0){A005C(V); cha[312]=1}}else{A005L();}});
document.getElementById('B0'+313).addEventListener('change', e=> {V=313; if(e.target.checked){if(cha[313]==0){A005C(V); cha[313]=1}}else{A005L();}});
document.getElementById('B0'+314).addEventListener('change', e=> {V=314; if(e.target.checked){if(cha[314]==0){A005C(V); cha[314]=1}}else{A005L();}});
document.getElementById('B0'+315).addEventListener('change', e=> {V=315; if(e.target.checked){if(cha[315]==0){A005C(V); cha[315]=1}}else{A005L();}});
document.getElementById('B0'+316).addEventListener('change', e=> {V=316; if(e.target.checked){if(cha[316]==0){A005C(V); cha[316]=1}}else{A005L();}});
document.getElementById('B0'+317).addEventListener('change', e=> {V=317; if(e.target.checked){if(cha[317]==0){A005C(V); cha[317]=1}}else{A005L();}});
document.getElementById('B0'+318).addEventListener('change', e=> {V=318; if(e.target.checked){if(cha[318]==0){A005C(V); cha[318]=1}}else{A005L();}});
document.getElementById('B0'+319).addEventListener('change', e=> {V=319; if(e.target.checked){if(cha[319]==0){A005C(V); cha[319]=1}}else{A005L();}});
document.getElementById('B0'+320).addEventListener('change', e=> {V=320; if(e.target.checked){if(cha[320]==0){A005C(V); cha[320]=1}}else{A005L();}});
document.getElementById('B0'+321).addEventListener('change', e=> {V=321; if(e.target.checked){if(cha[321]==0){A005C(V); cha[321]=1}}else{A005L();}});
document.getElementById('B0'+322).addEventListener('change', e=> {V=322; if(e.target.checked){if(cha[322]==0){A005C(V); cha[322]=1}}else{A005L();}});
document.getElementById('B0'+323).addEventListener('change', e=> {V=323; if(e.target.checked){if(cha[323]==0){A005C(V); cha[323]=1}}else{A005L();}});
document.getElementById('B0'+324).addEventListener('change', e=> {V=324; if(e.target.checked){if(cha[324]==0){A005C(V); cha[324]=1}}else{A005L();}});
document.getElementById('B0'+325).addEventListener('change', e=> {V=325; if(e.target.checked){if(cha[325]==0){A005C(V); cha[325]=1}}else{A005L();}});
document.getElementById('B0'+326).addEventListener('change', e=> {V=326; if(e.target.checked){if(cha[326]==0){A005C(V); cha[326]=1}}else{A005L();}});
document.getElementById('B0'+327).addEventListener('change', e=> {V=327; if(e.target.checked){if(cha[327]==0){A005C(V); cha[327]=1}}else{A005L();}});
document.getElementById('B0'+328).addEventListener('change', e=> {V=328; if(e.target.checked){if(cha[328]==0){A005C(V); cha[328]=1}}else{A005L();}});
document.getElementById('B0'+329).addEventListener('change', e=> {V=329; if(e.target.checked){if(cha[329]==0){A005C(V); cha[329]=1}}else{A005L();}});
document.getElementById('B0'+330).addEventListener('change', e=> {V=330; if(e.target.checked){if(cha[330]==0){A005C(V); cha[330]=1}}else{A005L();}});
document.getElementById('B0'+331).addEventListener('change', e=> {V=331; if(e.target.checked){if(cha[331]==0){A005C(V); cha[331]=1}}else{A005L();}});
document.getElementById('B0'+332).addEventListener('change', e=> {V=332; if(e.target.checked){if(cha[332]==0){A005C(V); cha[332]=1}}else{A005L();}});
document.getElementById('B0'+333).addEventListener('change', e=> {V=333; if(e.target.checked){if(cha[333]==0){A005C(V); cha[333]=1}}else{A005L();}});
document.getElementById('B0'+334).addEventListener('change', e=> {V=334; if(e.target.checked){if(cha[334]==0){A005C(V); cha[334]=1}}else{A005L();}});
document.getElementById('B0'+335).addEventListener('change', e=> {V=335; if(e.target.checked){if(cha[335]==0){A005C(V); cha[335]=1}}else{A005L();}});
document.getElementById('B0'+336).addEventListener('change', e=> {V=336; if(e.target.checked){if(cha[336]==0){A005C(V); cha[336]=1}}else{A005L();}});
document.getElementById('B0'+337).addEventListener('change', e=> {V=337; if(e.target.checked){if(cha[337]==0){A005C(V); cha[337]=1}}else{A005L();}});
document.getElementById('B0'+338).addEventListener('change', e=> {V=338; if(e.target.checked){if(cha[338]==0){A005C(V); cha[338]=1}}else{A005L();}});
document.getElementById('B0'+339).addEventListener('change', e=> {V=339; if(e.target.checked){if(cha[339]==0){A005C(V); cha[339]=1}}else{A005L();}});
document.getElementById('B0'+340).addEventListener('change', e=> {V=340; if(e.target.checked){if(cha[340]==0){A005C(V); cha[340]=1}}else{A005L();}});
document.getElementById('B0'+341).addEventListener('change', e=> {V=341; if(e.target.checked){if(cha[341]==0){A005C(V); cha[341]=1}}else{A005L();}});
document.getElementById('B0'+342).addEventListener('change', e=> {V=342; if(e.target.checked){if(cha[342]==0){A005C(V); cha[342]=1}}else{A005L();}});
document.getElementById('B0'+343).addEventListener('change', e=> {V=343; if(e.target.checked){if(cha[343]==0){A005C(V); cha[343]=1}}else{A005L();}});
document.getElementById('B0'+344).addEventListener('change', e=> {V=344; if(e.target.checked){if(cha[344]==0){A005C(V); cha[344]=1}}else{A005L();}});
document.getElementById('B0'+345).addEventListener('change', e=> {V=345; if(e.target.checked){if(cha[345]==0){A005C(V); cha[345]=1}}else{A005L();}});
document.getElementById('B0'+346).addEventListener('change', e=> {V=346; if(e.target.checked){if(cha[346]==0){A005C(V); cha[346]=1}}else{A005L();}});
document.getElementById('B0'+347).addEventListener('change', e=> {V=347; if(e.target.checked){if(cha[347]==0){A005C(V); cha[347]=1}}else{A005L();}});
document.getElementById('B0'+348).addEventListener('change', e=> {V=348; if(e.target.checked){if(cha[348]==0){A005C(V); cha[348]=1}}else{A005L();}});
document.getElementById('B0'+349).addEventListener('change', e=> {V=349; if(e.target.checked){if(cha[349]==0){A005C(V); cha[349]=1}}else{A005L();}});
document.getElementById('B0'+350).addEventListener('change', e=> {V=350; if(e.target.checked){if(cha[350]==0){A005C(V); cha[350]=1}}else{A005L();}});
document.getElementById('B0'+351).addEventListener('change', e=> {V=351; if(e.target.checked){if(cha[351]==0){A005C(V); cha[351]=1}}else{A005L();}});
document.getElementById('B0'+352).addEventListener('change', e=> {V=352; if(e.target.checked){if(cha[352]==0){A005C(V); cha[352]=1}}else{A005L();}});
document.getElementById('B0'+353).addEventListener('change', e=> {V=353; if(e.target.checked){if(cha[353]==0){A005C(V); cha[353]=1}}else{A005L();}});
document.getElementById('B0'+354).addEventListener('change', e=> {V=354; if(e.target.checked){if(cha[354]==0){A005C(V); cha[354]=1}}else{A005L();}});
document.getElementById('B0'+355).addEventListener('change', e=> {V=355; if(e.target.checked){if(cha[355]==0){A005C(V); cha[355]=1}}else{A005L();}});
document.getElementById('B0'+356).addEventListener('change', e=> {V=356; if(e.target.checked){if(cha[356]==0){A005C(V); cha[356]=1}}else{A005L();}});
document.getElementById('B0'+357).addEventListener('change', e=> {V=357; if(e.target.checked){if(cha[357]==0){A005C(V); cha[357]=1}}else{A005L();}});
document.getElementById('B0'+358).addEventListener('change', e=> {V=358; if(e.target.checked){if(cha[358]==0){A005C(V); cha[358]=1}}else{A005L();}});
document.getElementById('B0'+359).addEventListener('change', e=> {V=359; if(e.target.checked){if(cha[359]==0){A005C(V); cha[359]=1}}else{A005L();}});
document.getElementById('B0'+360).addEventListener('change', e=> {V=360; if(e.target.checked){if(cha[360]==0){A005C(V); cha[360]=1}}else{A005L();}});
document.getElementById('B0'+361).addEventListener('change', e=> {V=361; if(e.target.checked){if(cha[361]==0){A005C(V); cha[361]=1}}else{A005L();}});
document.getElementById('B0'+362).addEventListener('change', e=> {V=362; if(e.target.checked){if(cha[362]==0){A005C(V); cha[362]=1}}else{A005L();}});
document.getElementById('B0'+363).addEventListener('change', e=> {V=363; if(e.target.checked){if(cha[363]==0){A005C(V); cha[363]=1}}else{A005L();}});
document.getElementById('B0'+364).addEventListener('change', e=> {V=364; if(e.target.checked){if(cha[364]==0){A005C(V); cha[364]=1}}else{A005L();}});
document.getElementById('B0'+365).addEventListener('change', e=> {V=365; if(e.target.checked){if(cha[365]==0){A005C(V); cha[365]=1}}else{A005L();}});
document.getElementById('B0'+366).addEventListener('change', e=> {V=366; if(e.target.checked){if(cha[366]==0){A005C(V); cha[366]=1}}else{A005L();}});
document.getElementById('B0'+367).addEventListener('change', e=> {V=367; if(e.target.checked){if(cha[367]==0){A005C(V); cha[367]=1}}else{A005L();}});
document.getElementById('B0'+368).addEventListener('change', e=> {V=368; if(e.target.checked){if(cha[368]==0){A005C(V); cha[368]=1}}else{A005L();}});
document.getElementById('B0'+369).addEventListener('change', e=> {V=369; if(e.target.checked){if(cha[369]==0){A005C(V); cha[369]=1}}else{A005L();}});
document.getElementById('B0'+370).addEventListener('change', e=> {V=370; if(e.target.checked){if(cha[370]==0){A005C(V); cha[370]=1}}else{A005L();}});
document.getElementById('B0'+371).addEventListener('change', e=> {V=371; if(e.target.checked){if(cha[371]==0){A005C(V); cha[371]=1}}else{A005L();}});
document.getElementById('B0'+372).addEventListener('change', e=> {V=372; if(e.target.checked){if(cha[372]==0){A005C(V); cha[372]=1}}else{A005L();}});
document.getElementById('B0'+373).addEventListener('change', e=> {V=373; if(e.target.checked){if(cha[373]==0){A005C(V); cha[373]=1}}else{A005L();}});
document.getElementById('B0'+374).addEventListener('change', e=> {V=374; if(e.target.checked){if(cha[374]==0){A005C(V); cha[374]=1}}else{A005L();}});
document.getElementById('B0'+375).addEventListener('change', e=> {V=375; if(e.target.checked){if(cha[375]==0){A005C(V); cha[375]=1}}else{A005L();}});
document.getElementById('B0'+376).addEventListener('change', e=> {V=376; if(e.target.checked){if(cha[376]==0){A005C(V); cha[376]=1}}else{A005L();}});
document.getElementById('B0'+377).addEventListener('change', e=> {V=377; if(e.target.checked){if(cha[377]==0){A005C(V); cha[377]=1}}else{A005L();}});
document.getElementById('B0'+378).addEventListener('change', e=> {V=378; if(e.target.checked){if(cha[378]==0){A005C(V); cha[378]=1}}else{A005L();}});
document.getElementById('B0'+379).addEventListener('change', e=> {V=379; if(e.target.checked){if(cha[379]==0){A005C(V); cha[379]=1}}else{A005L();}});
document.getElementById('B0'+380).addEventListener('change', e=> {V=380; if(e.target.checked){if(cha[380]==0){A005C(V); cha[380]=1}}else{A005L();}});
document.getElementById('B0'+381).addEventListener('change', e=> {V=381; if(e.target.checked){if(cha[381]==0){A005C(V); cha[381]=1}}else{A005L();}});
document.getElementById('B0'+382).addEventListener('change', e=> {V=382; if(e.target.checked){if(cha[382]==0){A005C(V); cha[382]=1}}else{A005L();}});
document.getElementById('B0'+383).addEventListener('change', e=> {V=383; if(e.target.checked){if(cha[383]==0){A005C(V); cha[383]=1}}else{A005L();}});
document.getElementById('B0'+384).addEventListener('change', e=> {V=384; if(e.target.checked){if(cha[384]==0){A005C(V); cha[384]=1}}else{A005L();}});
document.getElementById('B0'+385).addEventListener('change', e=> {V=385; if(e.target.checked){if(cha[385]==0){A005C(V); cha[385]=1}}else{A005L();}});
document.getElementById('B0'+386).addEventListener('change', e=> {V=386; if(e.target.checked){if(cha[386]==0){A005C(V); cha[386]=1}}else{A005L();}});
document.getElementById('B0'+387).addEventListener('change', e=> {V=387; if(e.target.checked){if(cha[387]==0){A005C(V); cha[387]=1}}else{A005L();}});
document.getElementById('B0'+388).addEventListener('change', e=> {V=388; if(e.target.checked){if(cha[388]==0){A005C(V); cha[388]=1}}else{A005L();}});
document.getElementById('B0'+389).addEventListener('change', e=> {V=389; if(e.target.checked){if(cha[389]==0){A005C(V); cha[389]=1}}else{A005L();}});
document.getElementById('B0'+390).addEventListener('change', e=> {V=390; if(e.target.checked){if(cha[390]==0){A005C(V); cha[390]=1}}else{A005L();}});
document.getElementById('B0'+391).addEventListener('change', e=> {V=391; if(e.target.checked){if(cha[391]==0){A005C(V); cha[391]=1}}else{A005L();}});
document.getElementById('B0'+392).addEventListener('change', e=> {V=392; if(e.target.checked){if(cha[392]==0){A005C(V); cha[392]=1}}else{A005L();}});
document.getElementById('B0'+393).addEventListener('change', e=> {V=393; if(e.target.checked){if(cha[393]==0){A005C(V); cha[393]=1}}else{A005L();}});
document.getElementById('B0'+394).addEventListener('change', e=> {V=394; if(e.target.checked){if(cha[394]==0){A005C(V); cha[394]=1}}else{A005L();}});
document.getElementById('B0'+395).addEventListener('change', e=> {V=395; if(e.target.checked){if(cha[395]==0){A005C(V); cha[395]=1}}else{A005L();}});
document.getElementById('B0'+396).addEventListener('change', e=> {V=396; if(e.target.checked){if(cha[396]==0){A005C(V); cha[396]=1}}else{A005L();}});
document.getElementById('B0'+397).addEventListener('change', e=> {V=397; if(e.target.checked){if(cha[397]==0){A005C(V); cha[397]=1}}else{A005L();}});
document.getElementById('B0'+398).addEventListener('change', e=> {V=398; if(e.target.checked){if(cha[398]==0){A005C(V); cha[398]=1}}else{A005L();}});
document.getElementById('B0'+399).addEventListener('change', e=> {V=399; if(e.target.checked){if(cha[399]==0){A005C(V); cha[399]=1}}else{A005L();}});
document.getElementById('B0'+400).addEventListener('change', e=> {V=400; if(e.target.checked){if(cha[400]==0){A005C(V); cha[400]=1}}else{A005L();}});
document.getElementById('B0'+401).addEventListener('change', e=> {V=401; if(e.target.checked){if(cha[401]==0){A005C(V); cha[401]=1}}else{A005L();}});
document.getElementById('B0'+402).addEventListener('change', e=> {V=402; if(e.target.checked){if(cha[402]==0){A005C(V); cha[402]=1}}else{A005L();}});
document.getElementById('B0'+403).addEventListener('change', e=> {V=403; if(e.target.checked){if(cha[403]==0){A005C(V); cha[403]=1}}else{A005L();}});
document.getElementById('B0'+404).addEventListener('change', e=> {V=404; if(e.target.checked){if(cha[404]==0){A005C(V); cha[404]=1}}else{A005L();}});
document.getElementById('B0'+405).addEventListener('change', e=> {V=405; if(e.target.checked){if(cha[405]==0){A005C(V); cha[405]=1}}else{A005L();}});
document.getElementById('B0'+406).addEventListener('change', e=> {V=406; if(e.target.checked){if(cha[406]==0){A005C(V); cha[406]=1}}else{A005L();}});
document.getElementById('B0'+407).addEventListener('change', e=> {V=407; if(e.target.checked){if(cha[407]==0){A005C(V); cha[407]=1}}else{A005L();}});
document.getElementById('B0'+408).addEventListener('change', e=> {V=408; if(e.target.checked){if(cha[408]==0){A005C(V); cha[408]=1}}else{A005L();}});
document.getElementById('B0'+409).addEventListener('change', e=> {V=409; if(e.target.checked){if(cha[409]==0){A005C(V); cha[409]=1}}else{A005L();}});
document.getElementById('B0'+410).addEventListener('change', e=> {V=410; if(e.target.checked){if(cha[410]==0){A005C(V); cha[410]=1}}else{A005L();}});
document.getElementById('B0'+411).addEventListener('change', e=> {V=411; if(e.target.checked){if(cha[411]==0){A005C(V); cha[411]=1}}else{A005L();}});
document.getElementById('B0'+412).addEventListener('change', e=> {V=412; if(e.target.checked){if(cha[412]==0){A005C(V); cha[412]=1}}else{A005L();}});
document.getElementById('B0'+413).addEventListener('change', e=> {V=413; if(e.target.checked){if(cha[413]==0){A005C(V); cha[413]=1}}else{A005L();}});
document.getElementById('B0'+414).addEventListener('change', e=> {V=414; if(e.target.checked){if(cha[414]==0){A005C(V); cha[414]=1}}else{A005L();}});
document.getElementById('B0'+415).addEventListener('change', e=> {V=415; if(e.target.checked){if(cha[415]==0){A005C(V); cha[415]=1}}else{A005L();}});
document.getElementById('B0'+416).addEventListener('change', e=> {V=416; if(e.target.checked){if(cha[416]==0){A005C(V); cha[416]=1}}else{A005L();}});
document.getElementById('B0'+417).addEventListener('change', e=> {V=417; if(e.target.checked){if(cha[417]==0){A005C(V); cha[417]=1}}else{A005L();}});
document.getElementById('B0'+418).addEventListener('change', e=> {V=418; if(e.target.checked){if(cha[418]==0){A005C(V); cha[418]=1}}else{A005L();}});
document.getElementById('B0'+419).addEventListener('change', e=> {V=419; if(e.target.checked){if(cha[419]==0){A005C(V); cha[419]=1}}else{A005L();}});
document.getElementById('B0'+420).addEventListener('change', e=> {V=420; if(e.target.checked){if(cha[420]==0){A005C(V); cha[420]=1}}else{A005L();}});
document.getElementById('B0'+421).addEventListener('change', e=> {V=421; if(e.target.checked){if(cha[421]==0){A005C(V); cha[421]=1}}else{A005L();}});
document.getElementById('B0'+422).addEventListener('change', e=> {V=422; if(e.target.checked){if(cha[422]==0){A005C(V); cha[422]=1}}else{A005L();}});
document.getElementById('B0'+423).addEventListener('change', e=> {V=423; if(e.target.checked){if(cha[423]==0){A005C(V); cha[423]=1}}else{A005L();}});
document.getElementById('B0'+424).addEventListener('change', e=> {V=424; if(e.target.checked){if(cha[424]==0){A005C(V); cha[424]=1}}else{A005L();}});
document.getElementById('B0'+425).addEventListener('change', e=> {V=425; if(e.target.checked){if(cha[425]==0){A005C(V); cha[425]=1}}else{A005L();}});
document.getElementById('B0'+426).addEventListener('change', e=> {V=426; if(e.target.checked){if(cha[426]==0){A005C(V); cha[426]=1}}else{A005L();}});
document.getElementById('B0'+427).addEventListener('change', e=> {V=427; if(e.target.checked){if(cha[427]==0){A005C(V); cha[427]=1}}else{A005L();}});
document.getElementById('B0'+428).addEventListener('change', e=> {V=428; if(e.target.checked){if(cha[428]==0){A005C(V); cha[428]=1}}else{A005L();}});
document.getElementById('B0'+429).addEventListener('change', e=> {V=429; if(e.target.checked){if(cha[429]==0){A005C(V); cha[429]=1}}else{A005L();}});
document.getElementById('B0'+430).addEventListener('change', e=> {V=430; if(e.target.checked){if(cha[430]==0){A005C(V); cha[430]=1}}else{A005L();}});
document.getElementById('B0'+431).addEventListener('change', e=> {V=431; if(e.target.checked){if(cha[431]==0){A005C(V); cha[431]=1}}else{A005L();}});
document.getElementById('B0'+432).addEventListener('change', e=> {V=432; if(e.target.checked){if(cha[432]==0){A005C(V); cha[432]=1}}else{A005L();}});
document.getElementById('B0'+433).addEventListener('change', e=> {V=433; if(e.target.checked){if(cha[433]==0){A005C(V); cha[433]=1}}else{A005L();}});
document.getElementById('B0'+434).addEventListener('change', e=> {V=434; if(e.target.checked){if(cha[434]==0){A005C(V); cha[434]=1}}else{A005L();}});
document.getElementById('B0'+435).addEventListener('change', e=> {V=435; if(e.target.checked){if(cha[435]==0){A005C(V); cha[435]=1}}else{A005L();}});
document.getElementById('B0'+436).addEventListener('change', e=> {V=436; if(e.target.checked){if(cha[436]==0){A005C(V); cha[436]=1}}else{A005L();}});
document.getElementById('B0'+437).addEventListener('change', e=> {V=437; if(e.target.checked){if(cha[437]==0){A005C(V); cha[437]=1}}else{A005L();}});
document.getElementById('B0'+438).addEventListener('change', e=> {V=438; if(e.target.checked){if(cha[438]==0){A005C(V); cha[438]=1}}else{A005L();}});
document.getElementById('B0'+439).addEventListener('change', e=> {V=439; if(e.target.checked){if(cha[439]==0){A005C(V); cha[439]=1}}else{A005L();}});
document.getElementById('B0'+440).addEventListener('change', e=> {V=440; if(e.target.checked){if(cha[440]==0){A005C(V); cha[440]=1}}else{A005L();}});
document.getElementById('B0'+441).addEventListener('change', e=> {V=441; if(e.target.checked){if(cha[441]==0){A005C(V); cha[441]=1}}else{A005L();}});
document.getElementById('B0'+442).addEventListener('change', e=> {V=442; if(e.target.checked){if(cha[442]==0){A005C(V); cha[442]=1}}else{A005L();}});
document.getElementById('B0'+443).addEventListener('change', e=> {V=443; if(e.target.checked){if(cha[443]==0){A005C(V); cha[443]=1}}else{A005L();}});
document.getElementById('B0'+444).addEventListener('change', e=> {V=444; if(e.target.checked){if(cha[444]==0){A005C(V); cha[444]=1}}else{A005L();}});
document.getElementById('B0'+445).addEventListener('change', e=> {V=445; if(e.target.checked){if(cha[445]==0){A005C(V); cha[445]=1}}else{A005L();}});
document.getElementById('B0'+446).addEventListener('change', e=> {V=446; if(e.target.checked){if(cha[446]==0){A005C(V); cha[446]=1}}else{A005L();}});
document.getElementById('B0'+447).addEventListener('change', e=> {V=447; if(e.target.checked){if(cha[447]==0){A005C(V); cha[447]=1}}else{A005L();}});
document.getElementById('B0'+448).addEventListener('change', e=> {V=448; if(e.target.checked){if(cha[448]==0){A005C(V); cha[448]=1}}else{A005L();}});
document.getElementById('B0'+449).addEventListener('change', e=> {V=449; if(e.target.checked){if(cha[449]==0){A005C(V); cha[449]=1}}else{A005L();}});
document.getElementById('B0'+450).addEventListener('change', e=> {V=450; if(e.target.checked){if(cha[450]==0){A005C(V); cha[450]=1}}else{A005L();}});
document.getElementById('B0'+451).addEventListener('change', e=> {V=451; if(e.target.checked){if(cha[451]==0){A005C(V); cha[451]=1}}else{A005L();}});
document.getElementById('B0'+452).addEventListener('change', e=> {V=452; if(e.target.checked){if(cha[452]==0){A005C(V); cha[452]=1}}else{A005L();}});
document.getElementById('B0'+453).addEventListener('change', e=> {V=453; if(e.target.checked){if(cha[453]==0){A005C(V); cha[453]=1}}else{A005L();}});
document.getElementById('B0'+454).addEventListener('change', e=> {V=454; if(e.target.checked){if(cha[454]==0){A005C(V); cha[454]=1}}else{A005L();}});
document.getElementById('B0'+455).addEventListener('change', e=> {V=455; if(e.target.checked){if(cha[455]==0){A005C(V); cha[455]=1}}else{A005L();}});
document.getElementById('B0'+456).addEventListener('change', e=> {V=456; if(e.target.checked){if(cha[456]==0){A005C(V); cha[456]=1}}else{A005L();}});
document.getElementById('B0'+457).addEventListener('change', e=> {V=457; if(e.target.checked){if(cha[457]==0){A005C(V); cha[457]=1}}else{A005L();}});
document.getElementById('B0'+458).addEventListener('change', e=> {V=458; if(e.target.checked){if(cha[458]==0){A005C(V); cha[458]=1}}else{A005L();}});
document.getElementById('B0'+459).addEventListener('change', e=> {V=459; if(e.target.checked){if(cha[459]==0){A005C(V); cha[459]=1}}else{A005L();}});
document.getElementById('B0'+460).addEventListener('change', e=> {V=460; if(e.target.checked){if(cha[460]==0){A005C(V); cha[460]=1}}else{A005L();}});
document.getElementById('B0'+461).addEventListener('change', e=> {V=461; if(e.target.checked){if(cha[461]==0){A005C(V); cha[461]=1}}else{A005L();}});
document.getElementById('B0'+462).addEventListener('change', e=> {V=462; if(e.target.checked){if(cha[462]==0){A005C(V); cha[462]=1}}else{A005L();}});
document.getElementById('B0'+463).addEventListener('change', e=> {V=463; if(e.target.checked){if(cha[463]==0){A005C(V); cha[463]=1}}else{A005L();}});
document.getElementById('B0'+464).addEventListener('change', e=> {V=464; if(e.target.checked){if(cha[464]==0){A005C(V); cha[464]=1}}else{A005L();}});
document.getElementById('B0'+465).addEventListener('change', e=> {V=465; if(e.target.checked){if(cha[465]==0){A005C(V); cha[465]=1}}else{A005L();}});
document.getElementById('B0'+466).addEventListener('change', e=> {V=466; if(e.target.checked){if(cha[466]==0){A005C(V); cha[466]=1}}else{A005L();}});
document.getElementById('B0'+467).addEventListener('change', e=> {V=467; if(e.target.checked){if(cha[467]==0){A005C(V); cha[467]=1}}else{A005L();}});
document.getElementById('B0'+468).addEventListener('change', e=> {V=468; if(e.target.checked){if(cha[468]==0){A005C(V); cha[468]=1}}else{A005L();}});
document.getElementById('B0'+469).addEventListener('change', e=> {V=469; if(e.target.checked){if(cha[469]==0){A005C(V); cha[469]=1}}else{A005L();}});
document.getElementById('B0'+470).addEventListener('change', e=> {V=470; if(e.target.checked){if(cha[470]==0){A005C(V); cha[470]=1}}else{A005L();}});
document.getElementById('B0'+471).addEventListener('change', e=> {V=471; if(e.target.checked){if(cha[471]==0){A005C(V); cha[471]=1}}else{A005L();}});
document.getElementById('B0'+472).addEventListener('change', e=> {V=472; if(e.target.checked){if(cha[472]==0){A005C(V); cha[472]=1}}else{A005L();}});
document.getElementById('B0'+473).addEventListener('change', e=> {V=473; if(e.target.checked){if(cha[473]==0){A005C(V); cha[473]=1}}else{A005L();}});
document.getElementById('B0'+474).addEventListener('change', e=> {V=474; if(e.target.checked){if(cha[474]==0){A005C(V); cha[474]=1}}else{A005L();}});
document.getElementById('B0'+475).addEventListener('change', e=> {V=475; if(e.target.checked){if(cha[475]==0){A005C(V); cha[475]=1}}else{A005L();}});
document.getElementById('B0'+476).addEventListener('change', e=> {V=476; if(e.target.checked){if(cha[476]==0){A005C(V); cha[476]=1}}else{A005L();}});
document.getElementById('B0'+477).addEventListener('change', e=> {V=477; if(e.target.checked){if(cha[477]==0){A005C(V); cha[477]=1}}else{A005L();}});
document.getElementById('B0'+478).addEventListener('change', e=> {V=478; if(e.target.checked){if(cha[478]==0){A005C(V); cha[478]=1}}else{A005L();}});
document.getElementById('B0'+479).addEventListener('change', e=> {V=479; if(e.target.checked){if(cha[479]==0){A005C(V); cha[479]=1}}else{A005L();}});
document.getElementById('B0'+480).addEventListener('change', e=> {V=480; if(e.target.checked){if(cha[480]==0){A005C(V); cha[480]=1}}else{A005L();}});
document.getElementById('B0'+481).addEventListener('change', e=> {V=481; if(e.target.checked){if(cha[481]==0){A005C(V); cha[481]=1}}else{A005L();}});
document.getElementById('B0'+482).addEventListener('change', e=> {V=482; if(e.target.checked){if(cha[482]==0){A005C(V); cha[482]=1}}else{A005L();}});
document.getElementById('B0'+483).addEventListener('change', e=> {V=483; if(e.target.checked){if(cha[483]==0){A005C(V); cha[483]=1}}else{A005L();}});
document.getElementById('B0'+484).addEventListener('change', e=> {V=484; if(e.target.checked){if(cha[484]==0){A005C(V); cha[484]=1}}else{A005L();}});
document.getElementById('B0'+485).addEventListener('change', e=> {V=485; if(e.target.checked){if(cha[485]==0){A005C(V); cha[485]=1}}else{A005L();}});
document.getElementById('B0'+486).addEventListener('change', e=> {V=486; if(e.target.checked){if(cha[486]==0){A005C(V); cha[486]=1}}else{A005L();}});
document.getElementById('B0'+487).addEventListener('change', e=> {V=487; if(e.target.checked){if(cha[487]==0){A005C(V); cha[487]=1}}else{A005L();}});
document.getElementById('B0'+488).addEventListener('change', e=> {V=488; if(e.target.checked){if(cha[488]==0){A005C(V); cha[488]=1}}else{A005L();}});
document.getElementById('B0'+489).addEventListener('change', e=> {V=489; if(e.target.checked){if(cha[489]==0){A005C(V); cha[489]=1}}else{A005L();}});
document.getElementById('B0'+490).addEventListener('change', e=> {V=490; if(e.target.checked){if(cha[490]==0){A005C(V); cha[490]=1}}else{A005L();}});
document.getElementById('B0'+491).addEventListener('change', e=> {V=491; if(e.target.checked){if(cha[491]==0){A005C(V); cha[491]=1}}else{A005L();}});
document.getElementById('B0'+492).addEventListener('change', e=> {V=492; if(e.target.checked){if(cha[492]==0){A005C(V); cha[492]=1}}else{A005L();}});
document.getElementById('B0'+493).addEventListener('change', e=> {V=493; if(e.target.checked){if(cha[493]==0){A005C(V); cha[493]=1}}else{A005L();}});
document.getElementById('B0'+494).addEventListener('change', e=> {V=494; if(e.target.checked){if(cha[494]==0){A005C(V); cha[494]=1}}else{A005L();}});
document.getElementById('B0'+495).addEventListener('change', e=> {V=495; if(e.target.checked){if(cha[495]==0){A005C(V); cha[495]=1}}else{A005L();}});
document.getElementById('B0'+496).addEventListener('change', e=> {V=496; if(e.target.checked){if(cha[496]==0){A005C(V); cha[496]=1}}else{A005L();}});
document.getElementById('B0'+497).addEventListener('change', e=> {V=497; if(e.target.checked){if(cha[497]==0){A005C(V); cha[497]=1}}else{A005L();}});
document.getElementById('B0'+498).addEventListener('change', e=> {V=498; if(e.target.checked){if(cha[498]==0){A005C(V); cha[498]=1}}else{A005L();}});
document.getElementById('B0'+499).addEventListener('change', e=> {V=499; if(e.target.checked){if(cha[499]==0){A005C(V); cha[499]=1}}else{A005L();}});
document.getElementById('B0'+500).addEventListener('change', e=> {V=500; if(e.target.checked){if(cha[500]==0){A005C(V); cha[500]=1}}else{A005L();}});
document.getElementById('B0'+501).addEventListener('change', e=> {V=501; if(e.target.checked){if(cha[501]==0){A005C(V); cha[501]=1}}else{A005L();}});
document.getElementById('B0'+502).addEventListener('change', e=> {V=502; if(e.target.checked){if(cha[502]==0){A005C(V); cha[502]=1}}else{A005L();}});
document.getElementById('B0'+503).addEventListener('change', e=> {V=503; if(e.target.checked){if(cha[503]==0){A005C(V); cha[503]=1}}else{A005L();}});
document.getElementById('B0'+504).addEventListener('change', e=> {V=504; if(e.target.checked){if(cha[504]==0){A005C(V); cha[504]=1}}else{A005L();}});
document.getElementById('B0'+505).addEventListener('change', e=> {V=505; if(e.target.checked){if(cha[505]==0){A005C(V); cha[505]=1}}else{A005L();}});
document.getElementById('B0'+506).addEventListener('change', e=> {V=506; if(e.target.checked){if(cha[506]==0){A005C(V); cha[506]=1}}else{A005L();}});
document.getElementById('B0'+507).addEventListener('change', e=> {V=507; if(e.target.checked){if(cha[507]==0){A005C(V); cha[507]=1}}else{A005L();}});
document.getElementById('B0'+508).addEventListener('change', e=> {V=508; if(e.target.checked){if(cha[508]==0){A005C(V); cha[508]=1}}else{A005L();}});
document.getElementById('B0'+509).addEventListener('change', e=> {V=509; if(e.target.checked){if(cha[509]==0){A005C(V); cha[509]=1}}else{A005L();}});
document.getElementById('B0'+510).addEventListener('change', e=> {V=510; if(e.target.checked){if(cha[510]==0){A005C(V); cha[510]=1}}else{A005L();}});
document.getElementById('B0'+511).addEventListener('change', e=> {V=511; if(e.target.checked){if(cha[511]==0){A005C(V); cha[511]=1}}else{A005L();}});
document.getElementById('B0'+512).addEventListener('change', e=> {V=512; if(e.target.checked){if(cha[512]==0){A005C(V); cha[512]=1}}else{A005L();}});
document.getElementById('B0'+513).addEventListener('change', e=> {V=513; if(e.target.checked){if(cha[513]==0){A005C(V); cha[513]=1}}else{A005L();}});
document.getElementById('B0'+514).addEventListener('change', e=> {V=514; if(e.target.checked){if(cha[514]==0){A005C(V); cha[514]=1}}else{A005L();}});
document.getElementById('B0'+515).addEventListener('change', e=> {V=515; if(e.target.checked){if(cha[515]==0){A005C(V); cha[515]=1}}else{A005L();}});
document.getElementById('B0'+516).addEventListener('change', e=> {V=516; if(e.target.checked){if(cha[516]==0){A005C(V); cha[516]=1}}else{A005L();}});
document.getElementById('B0'+517).addEventListener('change', e=> {V=517; if(e.target.checked){if(cha[517]==0){A005C(V); cha[517]=1}}else{A005L();}});
document.getElementById('B0'+518).addEventListener('change', e=> {V=518; if(e.target.checked){if(cha[518]==0){A005C(V); cha[518]=1}}else{A005L();}});
document.getElementById('B0'+519).addEventListener('change', e=> {V=519; if(e.target.checked){if(cha[519]==0){A005C(V); cha[519]=1}}else{A005L();}});
document.getElementById('B0'+520).addEventListener('change', e=> {V=520; if(e.target.checked){if(cha[520]==0){A005C(V); cha[520]=1}}else{A005L();}});
document.getElementById('B0'+521).addEventListener('change', e=> {V=521; if(e.target.checked){if(cha[521]==0){A005C(V); cha[521]=1}}else{A005L();}});
document.getElementById('B0'+522).addEventListener('change', e=> {V=522; if(e.target.checked){if(cha[522]==0){A005C(V); cha[522]=1}}else{A005L();}});
document.getElementById('B0'+523).addEventListener('change', e=> {V=523; if(e.target.checked){if(cha[523]==0){A005C(V); cha[523]=1}}else{A005L();}});
document.getElementById('B0'+524).addEventListener('change', e=> {V=524; if(e.target.checked){if(cha[524]==0){A005C(V); cha[524]=1}}else{A005L();}});
document.getElementById('B0'+525).addEventListener('change', e=> {V=525; if(e.target.checked){if(cha[525]==0){A005C(V); cha[525]=1}}else{A005L();}});
document.getElementById('B0'+526).addEventListener('change', e=> {V=526; if(e.target.checked){if(cha[526]==0){A005C(V); cha[526]=1}}else{A005L();}});
document.getElementById('B0'+527).addEventListener('change', e=> {V=527; if(e.target.checked){if(cha[527]==0){A005C(V); cha[527]=1}}else{A005L();}});
document.getElementById('B0'+528).addEventListener('change', e=> {V=528; if(e.target.checked){if(cha[528]==0){A005C(V); cha[528]=1}}else{A005L();}});
document.getElementById('B0'+529).addEventListener('change', e=> {V=529; if(e.target.checked){if(cha[529]==0){A005C(V); cha[529]=1}}else{A005L();}});
document.getElementById('B0'+530).addEventListener('change', e=> {V=530; if(e.target.checked){if(cha[530]==0){A005C(V); cha[530]=1}}else{A005L();}});
document.getElementById('B0'+531).addEventListener('change', e=> {V=531; if(e.target.checked){if(cha[531]==0){A005C(V); cha[531]=1}}else{A005L();}});
document.getElementById('B0'+532).addEventListener('change', e=> {V=532; if(e.target.checked){if(cha[532]==0){A005C(V); cha[532]=1}}else{A005L();}});
document.getElementById('B0'+533).addEventListener('change', e=> {V=533; if(e.target.checked){if(cha[533]==0){A005C(V); cha[533]=1}}else{A005L();}});
document.getElementById('B0'+534).addEventListener('change', e=> {V=534; if(e.target.checked){if(cha[534]==0){A005C(V); cha[534]=1}}else{A005L();}});
document.getElementById('B0'+535).addEventListener('change', e=> {V=535; if(e.target.checked){if(cha[535]==0){A005C(V); cha[535]=1}}else{A005L();}});
document.getElementById('B0'+536).addEventListener('change', e=> {V=536; if(e.target.checked){if(cha[536]==0){A005C(V); cha[536]=1}}else{A005L();}});
document.getElementById('B0'+537).addEventListener('change', e=> {V=537; if(e.target.checked){if(cha[537]==0){A005C(V); cha[537]=1}}else{A005L();}});
document.getElementById('B0'+538).addEventListener('change', e=> {V=538; if(e.target.checked){if(cha[538]==0){A005C(V); cha[538]=1}}else{A005L();}});
document.getElementById('B0'+539).addEventListener('change', e=> {V=539; if(e.target.checked){if(cha[539]==0){A005C(V); cha[539]=1}}else{A005L();}});
document.getElementById('B0'+540).addEventListener('change', e=> {V=540; if(e.target.checked){if(cha[540]==0){A005C(V); cha[540]=1}}else{A005L();}});
document.getElementById('B0'+541).addEventListener('change', e=> {V=541; if(e.target.checked){if(cha[541]==0){A005C(V); cha[541]=1}}else{A005L();}});
document.getElementById('B0'+542).addEventListener('change', e=> {V=542; if(e.target.checked){if(cha[542]==0){A005C(V); cha[542]=1}}else{A005L();}});
document.getElementById('B0'+543).addEventListener('change', e=> {V=543; if(e.target.checked){if(cha[543]==0){A005C(V); cha[543]=1}}else{A005L();}});
document.getElementById('B0'+544).addEventListener('change', e=> {V=544; if(e.target.checked){if(cha[544]==0){A005C(V); cha[544]=1}}else{A005L();}});
document.getElementById('B0'+545).addEventListener('change', e=> {V=545; if(e.target.checked){if(cha[545]==0){A005C(V); cha[545]=1}}else{A005L();}});
document.getElementById('B0'+546).addEventListener('change', e=> {V=546; if(e.target.checked){if(cha[546]==0){A005C(V); cha[546]=1}}else{A005L();}});
document.getElementById('B0'+547).addEventListener('change', e=> {V=547; if(e.target.checked){if(cha[547]==0){A005C(V); cha[547]=1}}else{A005L();}});
document.getElementById('B0'+548).addEventListener('change', e=> {V=548; if(e.target.checked){if(cha[548]==0){A005C(V); cha[548]=1}}else{A005L();}});
document.getElementById('B0'+549).addEventListener('change', e=> {V=549; if(e.target.checked){if(cha[549]==0){A005C(V); cha[549]=1}}else{A005L();}});
document.getElementById('B0'+550).addEventListener('change', e=> {V=550; if(e.target.checked){if(cha[550]==0){A005C(V); cha[550]=1}}else{A005L();}});
document.getElementById('B0'+551).addEventListener('change', e=> {V=551; if(e.target.checked){if(cha[551]==0){A005C(V); cha[551]=1}}else{A005L();}});
document.getElementById('B0'+552).addEventListener('change', e=> {V=552; if(e.target.checked){if(cha[552]==0){A005C(V); cha[552]=1}}else{A005L();}});
document.getElementById('B0'+553).addEventListener('change', e=> {V=553; if(e.target.checked){if(cha[553]==0){A005C(V); cha[553]=1}}else{A005L();}});
document.getElementById('B0'+554).addEventListener('change', e=> {V=554; if(e.target.checked){if(cha[554]==0){A005C(V); cha[554]=1}}else{A005L();}});
document.getElementById('B0'+555).addEventListener('change', e=> {V=555; if(e.target.checked){if(cha[555]==0){A005C(V); cha[555]=1}}else{A005L();}});
document.getElementById('B0'+556).addEventListener('change', e=> {V=556; if(e.target.checked){if(cha[556]==0){A005C(V); cha[556]=1}}else{A005L();}});
document.getElementById('B0'+557).addEventListener('change', e=> {V=557; if(e.target.checked){if(cha[557]==0){A005C(V); cha[557]=1}}else{A005L();}});

        



}