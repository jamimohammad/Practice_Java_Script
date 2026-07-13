// *8.27 (Column sorting) Implement the following method to sort the columns in a  
// twodimensional array. A new array is returned and the original array is intact.
// public static double[][] sortColumns(double[][] m)
//  Write a test program that prompts the user to enter a 3 * 3 matrix of double
// values and displays a new column-sorted matrix. Here is a sample run:

// Enter a 3-by-3 matrix row by row:
// 0.15 0.875 0.375
// 0.55 0.005 0.225
// 0.30 0.12 0.4
// The column-sorted array is
// 0.15 0.0050 0.225
// 0.3 0.12 0.375
// 0.55 0.875 0.4

function sortColumns(matrix) {
    let newmatrix = [];

    for (let i = 0; i < matrix.length; i++) {
        newmatrix[i] = matrix[i].slice();
    }

    for (let j = 0; j < newmatrix[0].length; j++) {

        let column = [];

        for (let i = 0; i < newmatrix.length; i++) {
            column.push(newmatrix[i][j]);
        }

        column.sort((a, b) => a - b);

        for (let i = 0; i < newmatrix.length; i++) {
            newmatrix[i][j] = column[i];
        }
    }

    return newmatrix;
}

let matrix = [];

for (let i = 0; i < 3; i++) {
    matrix[i] = prompt("Enter row " + (i + 1)).split(" ").map(Number);
}

let sorted = sortColumns(matrix);

console.log("The column-sorted array is");  

for (let i = 0; i < sorted.length; i++) {
    console.log(sorted[i].join(" "));
}