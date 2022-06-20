import { B001,B003 } from "./EstimativasdaPopulacao.js";
import { A001,A003 } from './Censodemográfico.js';
import { C001,C003 } from './AssistenciaMedica.js';

export function buttao(){

function apertado(){
    //document.getElementById("card").style.display = "inline-flex";
    
    console.log('fui apertado!');

}



const ativado = async() =>{


    apertado();

}

const roraima = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(14);A003(1);
        
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(14); B003(1);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(14); C003(1);
        
    }

    

    apertado();

}


document.getElementById('RR').addEventListener('click',roraima);


const acre = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);

    
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(12);A003(1);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(12); B003(1);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(12); C003(1);
        
    }

    

    apertado();

}



document.getElementById('AC').addEventListener('click',acre);


const para = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    
    var estado = 15;

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(estado);A003(1);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(15); B003(1);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(15); C003(1);
        
    }

    

    apertado();

}


document.getElementById('PA').addEventListener('click',para);


const amazonas = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(13);A003(1);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(13); B003(1);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(13); C003(1);
        
    }

    

    apertado();

}


document.getElementById('AM').addEventListener('click',amazonas);

const rondonia = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(11);A003(1);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(11); B003(1);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(11); C003(1);
        
    }

    

    apertado();

}


document.getElementById('RO').addEventListener('click',rondonia);


const amapa = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(16);A003(1);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(16); B003(1);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(16); C003(1);
        
    }

    

    apertado();

}


document.getElementById('AP').addEventListener('click',amapa);





const maranhao = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(21);A003(2);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(21); B003(2);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(21); C003(2);
        
    }

    

    apertado();

}


document.getElementById('MA').addEventListener('click',maranhao);


const piaui = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(22);A003(2);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(22); B003(2);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(22); C003(2);
        
    }

    

    apertado();

}


document.getElementById('PI').addEventListener('click',piaui);


const tocantis = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(17);A003(1);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(17); B003(1);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(17); C003(1);
        
    }

    

    apertado();

}


document.getElementById('TO').addEventListener('click',tocantis);

const ceara = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(23);A003(2);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(23); B003(2);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(23); C003(2);
        
    }

    

    apertado();

}


document.getElementById('CE').addEventListener('click',ceara);

const riograndenorte = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(24);A003(2);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(24); B003(2);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(24); C003(2);
        
    }

    

    apertado();

}


document.getElementById('RN').addEventListener('click',riograndenorte);

const paraiba = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(25);A003(2);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(25); B003(2);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(25); C003(2);
        
    }

    

    apertado();

}


document.getElementById('PB').addEventListener('click',paraiba);

const pernanbuco = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(26);A003(2);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(26); B003(2);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(26); C003(2);
        
    }

    

    apertado();

}


document.getElementById('PE').addEventListener('click',pernanbuco);

const alagoas = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(27);A003(2);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(27); B003(2);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(27); C003(2);
        
    }

    

    apertado();

}


document.getElementById('AL').addEventListener('click',alagoas);

const sergipe = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(28);A003(2);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(28); B003(2);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(28); C003(2);
        
    }

    

    apertado();

}


document.getElementById('SE').addEventListener('click',sergipe);

const bahia = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(29);A003(2);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(29); B003(2);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(29); C003(2);
        
    }

    

    apertado();

}


document.getElementById('BA').addEventListener('click',bahia);

const parana = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(41);A003(4);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(41); B003(4);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(41); C003(4);
        
    }

    

    apertado();

}


document.getElementById('PR').addEventListener('click',parana);

const santacatarina = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(42);A003(4);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(42); B003(4);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(42); C003(4);
        
    }

    

    apertado();

}


document.getElementById('SC').addEventListener('click',santacatarina);

const riograndesul = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(43);A003(4);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(43); B003(4);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(43); C003(4);
        
    }

    

    apertado();

}


document.getElementById('RS').addEventListener('click',riograndesul);


const matogrossosul = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(50);A003(5);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(50); B003(5);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(50); C003(5);
        
    }

    

    apertado();

}


document.getElementById('MS').addEventListener('click',matogrossosul);


const matogrosso = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(51);A003(5);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(51); B003(5);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(51); C003(5);
        
    }

    

    apertado();

}


document.getElementById('MT').addEventListener('click',matogrosso);

const goiais = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(52);A003(5);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(52); B003(5);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(52); C003(5);
        
    }

    

    apertado();

}


document.getElementById('GO').addEventListener('click',goiais);

const distritofederal = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(53);A003(5);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(53); B003(5);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(53); C003(5);
        
    }

    

    apertado();

}


document.getElementById('DF').addEventListener('click',distritofederal);

const minasgerais = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(31);A003(3);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(31); B003(3);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(31); C003(3);
        
    }

    

    apertado();

}


document.getElementById('MG').addEventListener('click',minasgerais);

const espiritosanto = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(32);A003(3);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(32);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(32); C003(3);
        
    }

    

    apertado();

}


document.getElementById('ES').addEventListener('click',espiritosanto);

const riodejaneiro = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(33);A003(3);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(33); B003(3);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(33); C003(3);
        
    }

    

    apertado();

}


document.getElementById('RJ').addEventListener('click',riodejaneiro);

const saopaulo = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(35);A003(3);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(35); B003(3);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(35); C003(3);
        
    }

    

    apertado();

}


document.getElementById('SP').addEventListener('click',saopaulo);





}