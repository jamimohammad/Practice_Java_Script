// *8.29 (Algebra: solve linear equations) Write a method that solves the following
// 2 * 2 system of linear equations:
// a00x + a01y = b0
// a10x + a11y = b1
// x = b0a11 - b1a01
// a00a11 - a01a10
// y = b1a00 - b0a10
// a00a11 - a01a10
//  The method header is
// public static double[] linearEquation(double[][] a, double[] b)
//  The method returns null if a00a11 - a01a10 is 0. Write a test program that
// prompts the user to enter a00, a01, a10, a11, b0, and b1, and displays the result. If
// a00a11 - a01a10 is 0, report that “The equation has no solution.” A sample run is
// similar to Programming Exercise 3.3.

function linearEquation(a, b) {
    let determinant = a[0][0] * a[1][1] - a[0][1] * a[1][0];

    if (determinant === 0) {
        return null;
    }

    let x = (b[0] * a[1][1] - b[1] * a[0][1]) / determinant;
    let y = (b[1] * a[0][0] - b[0] * a[1][0]) / determinant;

    return [x, y];
}

let a00 = Number(prompt("Enter a00:"));
let a01 = Number(prompt("Enter a01:"));
let a10 = Number(prompt("Enter a10:"));
let a11 = Number(prompt("Enter a11:"));
let b0 = Number(prompt("Enter b0:"));
let b1 = Number(prompt("Enter b1:"));


let a = [
    [a00, a01],
    [a10, a11]
];

let b = [b0, b1];


let result = linearEquation(a, b);


if (result === null) {
    console.log("The equation has no solution.");
} else {
    console.log(`x = ${result[0]}`);
    console.log(`y = ${result[1]}`);
}