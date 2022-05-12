
    

    
        
        document.getElementById("tip").onclick=calculation;
     
    function calculation(){
        var number=document.getElementById("number").value;
        
        var number3=document.getElementById("myList").value;
        var finaltip=(number*number3)/100;
        var number2=document.getElementById("number2").value;
       var result=(finaltip/number2)
       document.getElementById("tip").innerHTML= result
       
    }