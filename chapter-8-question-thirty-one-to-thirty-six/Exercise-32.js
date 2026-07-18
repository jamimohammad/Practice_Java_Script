// *8.32 (Geometry: rightmost lowest point) In computational geometry, often you need
// to find the rightmost lowest point in a set of points. Write the following method
// that returns the rightmost lowest point in a set of points.
// public static double[]
//  getRightmostLowestPoint(double[][] points)
//  Write a test program that prompts the user to enter the coordinates of six points
// and displays the rightmost lowest point. Here is a sample run

// Enter 6 points: 1.5 2.5 -3 4.5 5.6 -7 6.5 -7 8 1 10 2.5
// The rightmost lowest point is (6.5, -7.0)

function getRightmostLowestPoint(points) {
    let rightmostLowest = points[0];

    for (let i = 1; i < points.length; i++) {
        if (points[i][1] < rightmostLowest[1]) {
            rightmostLowest = points[i];
        } else if (
            points[i][1] === rightmostLowest[1] &&
            points[i][0] > rightmostLowest[0]
        ) {
            rightmostLowest = points[i];
        }
    }

    return rightmostLowest;
}

let points = [];

for (let i = 0; i < 6; i++) {
    let x = Number(prompt(`Enter x${i + 1}:`));
    let y = Number(prompt(`Enter y${i + 1}:`));

    points.push([x, y]);
}

let result = getRightmostLowestPoint(points);

console.log(`The rightmost lowest point is (${result[0]}, ${result[1]})`);
    
