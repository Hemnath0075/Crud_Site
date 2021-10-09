var x=document.getElementById("present");
var y=document.getElementById("absent");
function Present(){
    if(x.style.display=="none"){
        x.style.display="block";
        y.style.display="none";
    }
    else if(x.style.display=="block"){
        x.style.display="block";
    }
    else{
        x.style.display="none";
    }
}
function Absent(){
    if(y.style.display=="none"){
        y.style.display="block";
        x.style.display="none";
    }
    else if(y.style.display=="block"){
        y.style.display="block";
    }
    else{
        y.style.display="none";
    }
}


