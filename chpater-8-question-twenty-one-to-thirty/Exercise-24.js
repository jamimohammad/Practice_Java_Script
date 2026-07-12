//  *8.24(Markov matrix) An n * n matrix is called a positive Markov matrix if each
// element is positive and the sum of the elements in each column is 1. Write the
// following method to check whether a matrix is a Markov matrix.
// public static boolean isMarkovMatrix(double[][] m)
//  Write a test program that prompts the user to enter a 3 * 3 matrix of double
// values and tests whether it is a Markov matrix. Here are sample runs:

// Enter a 3-by-3 matrix row by row:
// 0.15 0.875 0.375
// 0.55 0.005 0.225
// 0.30 0.12 0.4
// It is a Markov matrix
// Enter a 3-by-3 matrix row by row:
// 0.95 -0.875 0.375
// 0.65 0.005 0.225
// 0.30 0.22 -0.4
// It is not a Markov matrix

function markovmatrix(matrix) {

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] <= 0) {
                return false;
            }
        }
    }

    for (let j = 0; j < matrix[0].length; j++) {
        let sum = 0;

        for (let i = 0; i < matrix.length; i++) {
            sum += matrix[i][j];
        }

        if (sum !== 1) {
            return false;
        }
    }

    return true;
}

let matrix = [];

for (let i = 0; i < 3; i++) {
    let row = prompt(`Enter row ${i + 1} (Enter 3 numbers separated by spaces):`).split(" ").map(Number);matrix.push(row);
            
}

if (markovmatrix(matrix)) {
    console.log("It is a Markov matrix");
} else {
    console.log("It is not a Markov matrix");
}







// console.log(matrix)