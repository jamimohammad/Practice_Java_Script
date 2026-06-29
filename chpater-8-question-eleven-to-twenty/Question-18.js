// **8.18 (Pattern recognition: four consecutive equal numbers) Write the following
// method that tests whether a two-dimensional array has four consecutive numbers of the same value, either horizontally, vertically, or diagonally.
// public static boolean isConsecutiveFour(int[][] values) 
// Write a test program that prompts the user to enter the number of rows and columns of a two-dimensional array and then the values in the array and displays
// true if the array contains four consecutive numbers with the same value. Otherwise, display false. Here are some examples of the true cases:

// 0 1 0 3 1 6 1
// 0 1 6 8 6 0 1
// 5 6 2 1 8 2 9
// 6 5 6 1 1 9 1
// 1 3 6 1 4 0 7
// 3 3 3 3 4 0 7

// 0 1 0 3 1 6 1
// 0 1 6 8 6 0 1
// 5 5 2 1 8 2 9
// 6 5 6 1 1 9 1
// 1 5 6 1 4 0 7
// 3 5 3 3 4 0 7

// 0 1 0 3 1 6 1
// 0 1 6 8 6 0 1
// 5 6 2 1 6 2 9
// 6 5 6 6 1 9 1
// 1 3 6 1 4 0 7
// 3 6 3 3 4 0 7

// 0 1 0 3 1 6 1
// 0 1 6 8 6 0 1
// 9 6 2 1 8 2 9
// 6 9 6 1 1 9 1
// 1 3 9 1 4 0 7
// 3 3 3 9 4 0 7

let rows = Number(prompt("Enter the number of rows"));
let columns = Number(prompt("Enter the number of columns"));

let array = [];

for (let i = 0; i < rows; i++) {
    array[i] = [];

    for (let j = 0; j < columns; j++) {
        array[i][j] = Number(prompt(`Enter element [${i}][${j}]:`));
    }
}

function isconsecutivefour(values) {
    let rows = values.length;
    let columns = values[0].length;

    // Horizontal 
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j <= columns - 4; j++) {
            let current = values[i][j];

            if (
                current === values[i][j + 1] &&
                current === values[i][j + 2] &&
                current === values[i][j + 3]
            ) {
                return true;
            }
        }
    }

    // Vertical 
    for (let i = 0; i <= rows - 4; i++) {
        for (let j = 0; j < columns; j++) {
            let current = values[i][j];

            if (
                current === values[i + 1][j] &&
                current === values[i + 2][j] &&
                current === values[i + 3][j]
            ) {
                return true;
            }
        }
    }

    // Diagonal 
    for (let i = 0; i <= rows - 4; i++) {
        for (let j = 0; j <= columns - 4; j++) {
            let current = values[i][j];

            if (
                current === values[i + 1][j + 1] &&
                current === values[i + 2][j + 2] &&
                current === values[i + 3][j + 3]
            ) {
                return true;
            }
        }
    }

    // Diagonal 
    for (let i = 0; i <= rows - 4; i++) {
        for (let j = 3; j < columns; j++) {
            let current = values[i][j];

            if (
                current === values[i + 1][j - 1] &&
                current === values[i + 2][j - 2] &&
                current === values[i + 3][j - 3]
            ) {
                return true;
            }
        }
    }

    return false;
}

console.log(array);

console.log("Result:");
console.log(isconsecutivefour(array));