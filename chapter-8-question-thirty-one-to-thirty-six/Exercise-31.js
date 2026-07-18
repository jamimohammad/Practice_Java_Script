// *8.31 (Geometry: area of a triangle) Write a method that returns the area of a triangle
// using the following header:
// public static double getTriangleArea(double[][] points)
//  The points are stored in a 3-by-2 two-dimensional array points with points[0]
// [0] and points[0][1] for (x1, y1). The triangle area can be computed using the
// formula in Programming Exercise 2.19. The method returns 0 if the three points
// are on the same line. Write a program that prompts the user to enter three points of
// a triangle and displays the triangle's area. Here is a sample run of the program:
// Enter x1, y1, x2, y2, x3, y3: 2.5 2 5 -1.0 4.0 2.0
// The area of the triangle is 2.25
// Enter x1, y1, x2, y2, x3, y3: 2 2 4.5 4.5 6 6
// The three points are on the same line
 

function getAreaOfATriangle(points) {
    let x1 = points[0][0];
    let y1 = points[0][1];

    let x2 = points[1][0];
    let y2 = points[1][1];

    let x3 = points[2][0];
    let y3 = points[2][1];

    let side1 = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    let side2 = Math.sqrt((x2 - x3) ** 2 + (y2 - y3) ** 2);
    let side3 = Math.sqrt((x1 - x3) ** 2 + (y1 - y3) ** 2);

    let s = (side1 + side2 + side3) / 2;

    let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

    if (isNaN(area)) {
        return 0;
    }

    return area;
}

let x1 = Number(prompt("Enter x1:"));
let y1 = Number(prompt("Enter y1:"));

let x2 = Number(prompt("Enter x2:"));
let y2 = Number(prompt("Enter y2:"));

let x3 = Number(prompt("Enter x3:"));
let y3 = Number(prompt("Enter y3:"));

let points = [
    [x1, y1],
    [x2, y2],
    [x3, y3]
];

let area = getAreaOfATriangle(points);

console.log("The area of the triangle is " + area);
