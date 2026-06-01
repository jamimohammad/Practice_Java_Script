// 4.1 (Geometry: area of a pentagon) Write a program that prompts the user to enter 
// the length from the center of a pentagon to a vertex and computes the area of the 
// pentagon, as shown in the following figure. 
// Enter the length from the center to a vertex: 5.5
//  The area of the pentagon is 71.92

function show1() {
    var r = Number(prompt("Enter the number"));
    var s = 2 * r * Math.sin(Math.PI / 5);
    var area = (5 * s * s) / (4 * Math.tan(Math.PI / 5));

    console.log("Area " + area);
}

show1();
