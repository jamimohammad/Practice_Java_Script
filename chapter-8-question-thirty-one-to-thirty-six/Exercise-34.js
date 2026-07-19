// **8.34 (Largest block) Given a square matrix with the elements 0 or 1, write a program
// to find a maximum square submatrix whose elements are all 1s. Your program
// should prompt the user to enter the number of rows in the matrix. The program
// then displays the location of the first element in the maximum square submatrix
// and the number of the rows in the submatrix. Here is a sample run:
// Enter the number of rows in the matrix: 5
// Enter the matrix row by row:
// 1 0 1 0 1
// 1 1 1 0 1
// 1 0 1 1 1
// 1 0 1 1 1
// 1 0 1 1 1
// The maximum square submatrix is at (2, 2) with size 3
// Your program should implement and use the following method to find the maximum square submatrix:
// public static int[] findLargestBlock(int[][] m)
//  The return value is an array that consists of three values. The first two values are
// the row and column indices for the first element in the submatrix, and the third
// value is the number of the rows in the submatrix.

let user = Number(prompt("Enter the number of rows in the matrix:"));

let matrix = [];

for (let i = 0; i < user; i++) {
    matrix[i] = prompt().split(" ").map(Number);
}

function findLargestBlock(m) {
    let maxsize = 0;
    let maxrow = 0;
    let maxcol = 0;

    for (let row = 0; row < m.length; row++) {
        for (let col = 0; col < m[row].length; col++) {

            if (m[row][col] === 1) {

                let size = 1;
                let expand = true;

                while (expand && row + size < m.length && col + size < m[0].length) {


                    for (let j = col; j <= col + size; j++) {
                        if (m[row + size][j] === 0) {
                            expand = false;
                            break;
                        }
                    }

                    if (expand) {
                        for (let i = row; i <= row + size; i++) {
                            if (m[i][col + size] === 0) {
                                expand = false;
                                break;
                            }
                        }
                    }

                    if (expand) {
                        size++;
                    }
                }

                if (size > maxsize) {
                    maxsize = size;
                    maxrow = row;
                    maxcol = col;
                }
            }
        }
    }

    return [maxrow, maxcol, maxsize];
}

let result = findLargestBlock(matrix);

console.log(`The maximum square submatrix is at (${result[0]}, ${result[1]}) with size ${result[2]}`);