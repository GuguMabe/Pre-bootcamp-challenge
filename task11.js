// a function that takes in 2 strings and outputs the common characters
function spotCommonCharacters(str1,str2) {
    var first = str1;
    var second = str2;
    var result =[];
    for (var i = 0; i < first.length; i++){
        if(second.indexOf(first[i]) !== -1 && result.indexOf(first[i]) === -1) {
             result.push(first[i]); }
        
    }
    return result.join("");
}
console.log(spotCommonCharacters("Gugulethu","Culolethu"));

