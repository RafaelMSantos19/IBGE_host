    
    for(var V=0; V<137; V++){
        var v=V.toString();
    document.getElementById('A0'+v).addEventListener("change", e=> { if(e.target.checked){
    document.getElementById('A'+v).style.display="table-row";
  }else{
    document.getElementById('A'+v).style.display="none"
  }}); }



    
    for(var V=0; V<558; V++){


        var v=V.toString();
        console.log("document.getElementById('B0'+"+v+").addEventListener('change', e=> { if(e.target.checked){ document.getElementById('B'+"+v+").style.display='table-row'; }else{document.getElementById('B'+"+v+").style.display='none'}}); "); 
}

