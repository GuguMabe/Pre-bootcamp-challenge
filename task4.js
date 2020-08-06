function isThereThree(num1,num2){
    let sum = num1 + num2;
    if(
        (num1 == 3 && sum.toString().indexOf("3") > -1 === true) ||
        (num2 == 3 && sum.toString().indexOf("3") > -1 === true)
    ){
        return true;
    }else{
        return false;

    }
}
console.log(isThereThree(4,45));