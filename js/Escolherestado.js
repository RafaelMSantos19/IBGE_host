import { B001 } from "./EstimativasdaPopulacao.js";
import { A001 } from './Censodemográfico.js';
import { C001 } from './AssistenciaMedica.js';

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
        A001(14);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(14);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(14);
        
    }

    

    apertado();

}


document.getElementById('RR').addEventListener('click',roraima);


const acre = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(12);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(12);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(12);
        
    }

    

    apertado();

}



document.getElementById('AC').addEventListener('click',acre);


const para = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(15);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(15);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(15);
        
    }

    

    apertado();

}


document.getElementById('PA').addEventListener('click',para);


const amazonas = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(13);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(13);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(13);
        
    }

    

    apertado();

}


document.getElementById('AM').addEventListener('click',amazonas);

const rondonia = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(11);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(11);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(11);
        
    }

    

    apertado();

}


document.getElementById('RO').addEventListener('click',rondonia);


const amapa = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(16);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(16);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(16);
        
    }

    

    apertado();

}


document.getElementById('AP').addEventListener('click',amapa);





const maranhao = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(21);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(21);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(21);
        
    }

    

    apertado();

}


document.getElementById('MA').addEventListener('click',maranhao);


const piaui = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(22);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(22);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(22);
        
    }

    

    apertado();

}


document.getElementById('PI').addEventListener('click',piaui);


const tocantis = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(17);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(17);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(17);
        
    }

    

    apertado();

}


document.getElementById('TO').addEventListener('click',tocantis);

const ceara = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(23);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(23);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(23);
        
    }

    

    apertado();

}


document.getElementById('CE').addEventListener('click',ceara);

const riograndenorte = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(24);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(24);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(24);
        
    }

    

    apertado();

}


document.getElementById('RN').addEventListener('click',riograndenorte);

const paraiba = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(25);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(25);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(25);
        
    }

    

    apertado();

}


document.getElementById('PB').addEventListener('click',paraiba);

const pernanbuco = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(26);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(26);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(26);
        
    }

    

    apertado();

}


document.getElementById('PE').addEventListener('click',pernanbuco);

const alagoas = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(27);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(27);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(27);
        
    }

    

    apertado();

}


document.getElementById('AL').addEventListener('click',alagoas);

const sergipe = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(28);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(28);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(28);
        
    }

    

    apertado();

}


document.getElementById('SE').addEventListener('click',sergipe);

const bahia = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(29);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(29);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(29);
        
    }

    

    apertado();

}


document.getElementById('BA').addEventListener('click',bahia);

const parana = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(41);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(41);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(41);
        
    }

    

    apertado();

}


document.getElementById('PR').addEventListener('click',parana);

const santacatarina = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(42);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(42);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(42);
        
    }

    

    apertado();

}


document.getElementById('SC').addEventListener('click',santacatarina);

const riograndesul = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(43);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(43);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(43);
        
    }

    

    apertado();

}


document.getElementById('RS').addEventListener('click',riograndesul);


const matogrossosul = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(50);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(50);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(50);
        
    }

    

    apertado();

}


document.getElementById('MS').addEventListener('click',matogrossosul);


const matogrosso = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(51);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(51);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(51);
        
    }

    

    apertado();

}


document.getElementById('MT').addEventListener('click',matogrosso);

const goiais = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(52);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(52);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(52);
        
    }

    

    apertado();

}


document.getElementById('GO').addEventListener('click',goiais);

const distritofederal = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(53);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(53);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(53);
        
    }

    

    apertado();

}


document.getElementById('DF').addEventListener('click',distritofederal);

const minasgerais = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(31);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(31);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(31);
        
    }

    

    apertado();

}


document.getElementById('MG').addEventListener('click',minasgerais);

const espiritosanto = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(32);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(32);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(32);
        
    }

    

    apertado();

}


document.getElementById('ES').addEventListener('click',espiritosanto);

const riodejaneiro = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(33);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(33);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(33);
        
    }

    

    apertado();

}


document.getElementById('RJ').addEventListener('click',riodejaneiro);

const saopaulo = async() =>{

    let e= document.getElementById('select').value;
    console.log(e);
    

    if(e=='A'){
        console.log('O valor A esta pegando!')
        A001(35);
    }
    if(e=='B'){
        console.log('O valor B esta pegando!')
        B001(35);
    }
    if(e=='C'){
        console.log('O valor C esta pegando!')
        C001(35);
        
    }

    

    apertado();

}


document.getElementById('SP').addEventListener('click',saopaulo);





}