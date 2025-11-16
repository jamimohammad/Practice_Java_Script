// (Geometry: area of a hexagon) The area of a hexagon can be computed using the 
// following formula (s is the length of a side):

function all(n, s) {
    var multipliction1 = n * s ** 2;
    var math2 = Math.tan(Math.PI / n) * 4;
    var area = multipliction1 / math2;
    return area;
}

var n = Number(prompt('Enter number of sides'));
var s = Number(prompt('Enter length '));

console.log("Area: " + all(n, s));
