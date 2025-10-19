// 4.4 (Geometry: area of a hexagon) The area of a hexagon can be computed using the 
// following formula (s is the length of a side):

var s = Number(prompt('enter a number'))
var multipliction = 6 * s ** 2

var math1 = Math.tan(Math.PI / 6) * 4
var area = multipliction / math1

console.log(area)
