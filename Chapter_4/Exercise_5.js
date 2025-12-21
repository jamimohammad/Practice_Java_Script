// 4.5(Geometry: area of a regular polygon) A regular polygon is an n-sided polygon in 
// which all sides are of the same length and all angles have the same degree (i.e., the 
// polygon is both equilateral and equiangular). The formula for computing the area 
// of a regular polygon is

var n = Number(prompt('enter a number'))
var s = Number(prompt('enter a number'))

var multipliction1 = n * s ** 2
var math2 = Math.tan(Math.PI / n) * 4
var area = multipliction1 / math2

console.log(area)