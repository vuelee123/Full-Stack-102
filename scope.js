// Scope Activity

function outer(){
        var a= {Makeup:"foundation"};
        var b= {Brand:"Lancome"};
        console.log(a,b);
    
        function inner(a,b){ 
        var a= {Makeup:"blush"};
        var b= {Brand:"Fenty Beauty"};
        console.log(a,b);
        }
    
        inner(a,b);{
        var b= {Brand:"Rare Beauty"};
        console.log(a,b);    
    }
    
    
    }
    outer();