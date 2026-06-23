// 6.35 (Geometry: area of a pentagon) The area of a pentagon can be computed using the 
// following formula:
// Area = 5 * s2
// 4 * tan¢p
// 5 ≤
// Write a method that returns the area of a pentagon using the following header:
// public static double area(double side)
// Write a main method that prompts the user to enter the side of a pentagon and 
// displays its area. Here is a sample run:
// Enter the side: 5.5
// The area of the pentagon is 52.04444136781625

function area(s){

var multipliction = 5 * s ** 2
var math = Math.tan(Math.PI / 5) * 4
return multipliction / math
}

var side = Number(prompt('Enter the side:'))
console.log('The area of the polygon is    '+ area(side))