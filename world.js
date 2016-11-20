// JavaScript File
window.onload= function(){
    var lcountry= document.getElementById('lookup');
    lcountry.click= search();
    function search(){
        var fcountry= document.getElementById("country").value;
        var chk_all= document.getElementById("g_all");
        var url= '';
        var xhttp= new XMLHttpRequest();
        
        if(chk_all.checked){
            url= "world.php?all=true";
        }
        else if(fcountry== '' ){
            alert("fcountry");
            document.getElementById("result").innerHTML="Enter Country";
        }
        else{
            url="world.php?country="+ fcountry;
        }
         xhttp.onreadystatechange= resultz;
         xhttp.open('GET',url);
         xhttp.send();
         
        /*if(('#all').prop('checked')== true){
            url='world.php?all=true;';
            xhttp.onreadystatechange= resultz;
            xhttp.open('GET',url);
            xhttp.send();
        }
        else{
            url= 'world.php?c='+fcountry;
           
        }*/
    }
    
    function resultz(){
        if(this.readyState== XMLHttpRequest.DONE){
            if(this.status== 200){
                var res= this.responseText;
                document.getElementById("result").innerHTML= res;
            }
            else{
                document.getElementById("result").innerHTML="Problem Found"
            }
        }
    }
    
