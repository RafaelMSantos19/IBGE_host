    
    for(var V=0; V<137; V++){
        var v=V.toString();
    document.getElementById('A0'+v).addEventListener("change", e=> { if(e.target.checked){
    document.getElementById('A'+v).style.display="table-row";
  }else{
    document.getElementById('A'+v).style.display="none"
  }}); }



    
    for(var V=0; V<5565; V++){


        var v=V.toString();
        console.log("document.getElementById('C0'+"+v+").addEventListener('change', e=> { if(e.target.checked){ document.getElementById('C'+"+v+").style.display='table-row'; }else{document.getElementById('C'+"+v+").style.display='none'}}); "); 
}

