// 4.1 (Geometry: area of a pentagon) Write a program that prompts the user to enter 
// the length from the center of a pentagon to a vertex and computes the area of the 
// pentagon, as shown in the following figure. 

var r = Number(prompt('enter a number'))
var s = 2 * r * Math.sin(Math.PI /5)
var tavan = (s ** 2) * 5 / (Math.tan(Math.PI / 5) * 4)

console.log (tavan)