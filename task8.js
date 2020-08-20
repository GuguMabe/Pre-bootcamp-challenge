//this is a function that converts any number to time in hours and minutes
function convertToTime(num)
 { //rounding the number down to its nearest integer
  var hours = Math.floor(num / 60); 
//get the remainder which will be the minutes
  var minutes = num % 60;

    if (hours === 1 && minutes === 1){
    return hours + "hour, " + minutes + "minute" ;

    }else if(hours > 1 && minutes > 1){
    return hours + "hours, " + minutes + "minutes";

   }else if(hours > 1 && minutes===1){
    return hours + "hours, " + minutes + "minute";

   }else if (hours===1 && minutes > 1){
    return hours + "hour, " + minutes + "minutes";

   }else if (hours === 1 && minutes === 0) {
     return hours + "hour";

   }else if(hours > 1 && minutes === 0) {
     return hours + "hours";
  
   }else if(hours===0 && minutes === 1){
     return minutes + "minute";

   }else if (hours===0 && minutes > 1)
     return minutes + "minutes";
}
//call function to test
console.log(convertToTime(181));

