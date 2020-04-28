var rect = require("./Rectangle.js")
 
function solverect(l,b){
    console.log("Solving rectangle with l = "+l+" and b = "+b);

    if(l <= 0 || b<= 0){
        console.log("The value should be greater than zero l = "+l+ " and b = "+b);
    }
    else{
        console.log("The area of rectangle is = " +rect.area(l,b));
        console.log("The perimeter of rectangle is = " +rect.perimeter(l,b));
    }
}

solverect(2,4);
solverect(3,5);
solverect(0,5);
solverect(-1,-2);