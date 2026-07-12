// // *8.25 (Row sorting) Implement the following method to sort the rows in a twodimensional array. A new array is returned and the original array is intact.
// // public static double[][] sortRows(double[][] m)
// //  Write a test program that prompts the user to enter a 3 * 3 matrix of double
// // values and displays a new row-sorted matrix. Here is a sample run:

// // Enter a 3-by-3 matrix row by row:
// // 0.15 0.875 0.375
// // 0.55 0.005 0.225
// // 0.30 0.12 0.4
// // The row-sorted array is
// // 0.15 0.375 0.875
// // 0.005 0.225 0.55                                                                      
// // 0.12 0.30 0.4

function sortrows(matrix) {
    let newmatrix = [];

    for (let i = 0; i < matrix.length; i++) {
        newmatrix[i] = matrix[i].slice(); 
        newmatrix[i].sort((a, b) => a - b);
    }

    return newmatrix;
}

let matrix = [];

for (let i = 0; i < 3; i++) {
    matrix[i] = prompt("Enter row " + (i + 1)).split(" ").map(Number);
}

let sorted = sortrows(matrix);

console.log("The row-sorted array is");

for (let i = 0; i < sorted.length; i++) {
    console.log(sorted[i].join(" "));
}
