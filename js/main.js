import { A002, A004, A005, A006, } from './Censodemográfico.js';
import { B002, B006 } from './EstimativasdaPopulacao.js';
import { C002 } from './AssistenciaMedica.js';
import { buttao } from './Escolherestado.js';
import { LISTA_A003 } from './lista01.js';
import { LISTA_A004 } from './lista02.js';
import { LISTA_A005 } from './lista03.js';
import { LISTA_B005 } from './lista04.js';
 


document.getElementById('select').addEventListener('change',escolha);


function escolha(){
    let e= document.getElementById('select').value;
    console.log(e);
    


    if(e=='Z'){
        console.log('O valor Z esta pegando!')
        document.getElementById("card").innerHTML = ' '
        document.getElementById("dados").innerHTML = ' '
    }
    if(e=='A'){
        console.log('O valor A esta pegando!')
        document.getElementById("card").innerHTML = ' '
        document.getElementById("dados2").innerHTML = ' '
        A002();
        A004();
        LISTA_A003();
        A005();
        LISTA_A004();
        A006();
        LISTA_A005();
        buttao();
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        document.getElementById("card").innerHTML = ' '
        document.getElementById("dados2").innerHTML = ' '
        B002();
        B006();
        LISTA_B005();
        buttao();
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        document.getElementById("card").innerHTML = ' '
        document.getElementById("dados2").innerHTML = ' '
        C002();
        buttao();
        
    }
}






