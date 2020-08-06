function isThereSixtyFive(num1,num2){
   
    if(num1 === 65 || num2 === 65 ) {
        return("true");

    }
    if(num1 + num2 === 65){
       return("true");
    }

    return("false");

}

console.log(isThereSixtyFive(10,5));