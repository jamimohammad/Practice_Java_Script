// *8.30 (Geometry: intersecting point) Write a method that returns the intersecting point of
// two lines. The intersecting point of the two lines can be found by using the formula
// shown in Programming Exercise 3.25. Assume that (x1, y1) and (x2, y2) are the
// two points on line 1 and (x3, y3) and (x4, y4) are on line 2. The method header is
// public static double[] getIntersectingPoint(double[][] points)
//  The points are stored in a 4-by-2 two-dimensional array points with
// (points[0][0], points[0][1]) for (x1, y1). The method returns the intersecting point or null if the two lines are parallel. Write a program that prompts
// the user to enter four points and displays the intersecting point. See Programming Exercise 3.25 for a sample run.

function getareaofatriangle(points) {
    let x1 = points[0][0];
    let y1 = points[0][1];

    let x2 = points[1][0];
    let y2 = points[1][1];

    let x3 = points[2][0];
    let y3 = points[2][1];

    let x4 = points[3][0];
    let y4 = points[3][1];

    let a = y1 - y2;
    let b = -(x1 - x2);
    let c = y3 - y4;
    let d = -(x3 - x4);

    let e = a * x1 + b * y1;
    let f = c * x3 + d * y3;

    let denominator = a * d - b * c;

    if (denominator === 0) {
        return null;
    }

    let x = (e * d - b * f) / denominator;
    let y = (a * f - e * c) / denominator;

    return [x, y];
}

let x1 = Number(prompt("Enter x1:"));
let y1 = Number(prompt("Enter y1:"));

let x2 = Number(prompt("Enter x2:"));
let y2 = Number(prompt("Enter y2:"));

let x3 = Number(prompt("Enter x3:"));
let y3 = Number(prompt("Enter y3:"));

let x4 = Number(prompt("Enter x4:"));
let y4 = Number(prompt("Enter y4:"));

let points = [
    [x1, y1],
    [x2, y2],
    [x3, y3],
    [x4, y4]
];

let result = getareaofatriangle(points);

if (result === null) {
    console.log("The two lines are parallel.");
} else {
    console.log(`The intersecting point is (${result[0]}, ${result[1]})`);
}