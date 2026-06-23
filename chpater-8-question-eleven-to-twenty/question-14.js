// **8.14 (Explore matrix) Write a program that prompts the user to enter the length of a
// square matrix, randomly fills in 0s and 1s into the matrix, prints the matrix, and
// finds the rows, columns, and diagonals with all 0s or 1s. Here is a sample run of
// the program:
// Enter the size for the matrix: 4
// 0111
// 0000
// 0100
// 1111
// All 0s on row 1
// All 1s on row 3
// No same numbers on a column
// No same numbers on the major diagonal
// No same numbers on the sub-diagonal

let size = Number(prompt("Enter the size for the matrix:"));

let matrix = [];

for (let i = 0; i < size; i++) {
    matrix[i] = [];

    let row = "";

    for (let j = 0; j < size; j++) {
        matrix[i][j] = Math.floor(Math.random() * 2);
        row += matrix[i][j];
    }

    console.log(row);
}

// Check rows
let rowfound = false;

for (let i = 0; i < size; i++) {
    let same = true;

    for (let j = 1; j < size; j++) {
        if (matrix[i][j] !== matrix[i][0]) {
            same = false;
            break;
        }
    }

    if (same) {
        console.log(`All ${matrix[i][0]}s on row ${i}`);
        rowfound = true;
    }
}

if (!rowfound) {
    console.log("No same numbers on a row");
}

// Check columns
let columnfound = false;

for (let j = 0; j < size; j++) {
    let same = true;

    for (let i = 1; i < size; i++) {
        if (matrix[i][j] !== matrix[0][j]) {
            same = false;
            break;
        }
    }

    if (same) {
        console.log(`All ${matrix[0][j]}s on column ${j}`);
        columnfound = true;
    }
}

if (!columnfound) {
    console.log("No same numbers on a column");
}

// Check major diagonal
let majorsame = true;

for (let i = 1; i < size; i++) {
    if (matrix[i][i] !== matrix[0][0]) {
        majorsame = false;
        break;
    }
}

if (majorsame) {
    console.log(`All ${matrix[0][0]}s on the major diagonal`);
} else {
    console.log("No same numbers on the major diagonal");
}

// Check sub-diagonal
let subsame = true;

for (let i = 1; i < size; i++) {
    if (matrix[i][size - 1 - i] !== matrix[0][size - 1]) {
        subsame = false;
        break;
    }
}

if (subsame) {
    console.log(`All ${matrix[0][size - 1]}s on the sub-diagonal`);
} else {
    console.log("No same numbers on the sub-diagonal");
}