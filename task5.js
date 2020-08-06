//this a function that takes the values of 3 sides of a triangle and outputs the area of the triangle
//I used herons formula
//first work out the semi-perimeter s
 function areaOfTriangle( x, y, z ) {
    const s = (x + y + z) / 2
    return Math.sqrt( s * (s - x) * (s - y) * (s - z) )
  }
  
  console.log(areaOfTriangle(3,4,5));