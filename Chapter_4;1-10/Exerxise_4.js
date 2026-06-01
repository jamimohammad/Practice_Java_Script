// (Geometry: area of a hexagon) The area of a hexagon can be computed using the 
// following formula (s is the length of a side):

function all(n, s) {
    let multipliction1 = n * s ** 2;
    let math2 = Math.tan(Math.PI / n) * 4;
    let area = multipliction1 / math2;
    return area;
}

let sides = Number(prompt('Enter number of sides'));
let length1 = Number(prompt('Enter length '));

console.log("Area: " + all(sides, length1));
