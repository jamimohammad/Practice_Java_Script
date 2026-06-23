// *6.36 (Geometry: area of a regular polygon) A regular polygon is an n-sided polygon 
// in which all sides are of the same length and all angles have the same degree (i.e., 
// the polygon is both equilateral and equiangular). The formula for computing the 
// area of a regular polygon is
// Area = n * s2
// 4 * tan¢p
// n ≤
// Write a method that returns the area of a regular polygon using the following header:
// public static double area(int n, double side)
// Write a main method that prompts the user to enter the number of sides and the 
// side of a regular polygon and displays its area. Here is a sample run:
// Enter the number of sides: 5
// Enter the side: 6.5
// The area of the polygon is 72.69017017488385

function area(n,s){

var multipliction = n * s ** 2
var math = Math.tan(Math.PI / n) * 4
return multipliction / math
}

var numberofsides = Number(prompt('Enter the number of sides:'))
var side = Number(prompt('Enter the side:'))
console.log('The area of the polygon is    '+ area(numberofsides,side))