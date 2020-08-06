//this is a function that converts any number to time in hours and minutes
function convertToTime(num)
 { //rounding the number down to its nearest integer
  var hours = Math.floor(num / 60); 
//get the remainder which will be the minutes
  var minutes = num % 60;

  return hours + "hours ," + minutes + "minutes" ;         
} 

//call function to test
console.log(convertToTime(240));
