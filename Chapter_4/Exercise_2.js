//(Geometry: great circle distance) The great circle distance is the distance between 
// two points on the surface of a sphere. Let (x1, y1) and (x2, y2) be the geographi
// cal latitude and longitude of two points. The great circle distance between the two 
// points can be computed using the following formula:

const radius = 6371.01
var x1 = Number(prompt('enter a number'))
var y1 = Number(prompt('enter a number'))
var x2 = Number(prompt('enter a number'))
var y2 = Number(prompt('enter a number'))

x1 = x1 * Math.PI / 180;
y1 = y1 * Math.PI / 180;
x2 = x2 * Math.PI / 180;
y2 = y2 * Math.PI / 180;


var d = radius * Math.acos(Math.sin(x1)  * Math.sin(x2) + Math.cos(x1) * Math.cos(x2) * Math.cos(y1 - y2))
console.log (d)