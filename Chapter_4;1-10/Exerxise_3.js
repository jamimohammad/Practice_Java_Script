// (Geometry: area of a hexagon) The area of a hexagon can be computed using the 
// following formula (s is the length of a side):

function all (){
let s = Number(prompt('enter a number'))
let multipliction = 6 * s ** 2

let math1 = Math.tan(Math.PI / 6) * 4
let area = multipliction / math1
console.log(area)
}
all()
