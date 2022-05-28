import { A002 } from './Censodemográfico.js';
import { B002 } from './EstimativasdaPopulacao.js';
import { C002 } from './AssistenciaMedica.js';
import { buttao } from './Escolherestado.js';
 


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
        buttao();
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        document.getElementById("card").innerHTML = ' '
        document.getElementById("dados2").innerHTML = ' '
        B002();
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






