// *8.15 (Geometry: same line?) Programming Exercise 6.39 gives a method for testing
// whether three points are on the same line.
//  Write the following method to test whether all the points in the array points are
// on the same line.
// public static boolean sameLine(double[][] points)
//  Write a program that prompts the user to enter five points and displays whether
// they are on the same line. Here are sample runs:
// Enter five points: 3.4 2 6.5 9.5 2.3 2.3 5.5 5 -5 4
// The five points are not on the same line
// Enter five points: 1 1 2 2 3 3 4 4 5 5
// The five points are on the same line

function sameLine(points) {
    let x0 = points[0][0];
    let y0 = points[0][1];

    let x1 = points[1][0];
    let y1 = points[1][1];

    for (let i = 2; i < points.length; i++) {
        let x2 = points[i][0];
        let y2 = points[i][1];

        let position = (x1 - x0) * (y2 - y0) - (x2 - x0) * (y1 - y0);

        if (position !== 0) {
            return false;
        }
    }

    return true;
}

let points = [];

for (let i = 0; i < 5; i++) {
    let x = Number(prompt(`Enter x for point ${i + 1}:`));
    let y = Number(prompt(`Enter y for point ${i + 1}:`));
    points.push([x, y]);
}

if (sameLine(points)) {
    console.log("The five points are on the same line");
} else {
    console.log("The five points are not on the same line");
}
