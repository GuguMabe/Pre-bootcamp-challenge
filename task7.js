//a function that converts temperature from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {

  var tempInC = celsius;

  return c2f = tempInC * 9 / 5 + 32 + "°F";}

  //testing the conversion of Celsius to Fahrenheit
  console.log(celsiusToFahrenheit(50));

  //a function that does vice versa
  function fahrenheitToCelsius(fahrenheit) {

    var tempInFahrenheit = fahrenheit;

    return f2c= (tempInFahrenheit - 32) * 5 / 9 + "°C";}

//testing the function
console.log(fahrenheitToCelsius(122))