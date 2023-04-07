// Exponential Recusion Activity

function recursive (x,y) {
    if (y === 0) return 1;
    let output = (x *= recursive(x,y-1))
        console.log (output)
        return output
    }
    // console.log(recursive(2,5));
    // console.log(recursive(7,3));
   // console.log(recursive(12,2));
    console.log(recursive(9,4));

    // iterative 

    function iterative (x,y) {
        let output = x;
        for (let x = 2; x < 5; x++){
            console.log (x,y)
        }
    }