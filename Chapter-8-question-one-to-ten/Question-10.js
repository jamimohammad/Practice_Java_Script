// *8.10 (Largest row and column) Write a program that randomly fills in 0s and 1s into
// a 4-by-4 matrix, prints the matrix, and finds the first row and column with the
// most 1s. Here is a sample run of the program:
// 0011
// 0011
// 1101
// 1010
// The largest row index: 2
// The largest column index: 2

let matrix = [];

for (let i = 0; i < 4; i++) {
    matrix[i] = [];

    for (let j = 0; j < 4; j++) {
        matrix[i][j] = Math.floor(Math.random() * 2);
    }
}

for (let i = 0; i < 4; i++) {
    console.log(matrix[i].join(""));
}

let largestrow = 0;
let maxrow = 0;
 
for (let i = 0; i < 4; i++) {
    let count = 0;

    for (let j = 0; j < 4; j++) {
        if (matrix[i][j] === 1) {
            count++;
        }
    }

    if (count > maxrow) {
        maxrow = count;
        largestrow = i;
    } 
}

let largestcolumn = 0;
let maxcolumn = 0;

for (let j = 0; j < 4; j++) {
    let count = 0;

    for (let i = 0; i < 4; i++) {
        if (matrix[i][j] === 1) {
            count++;
        }
    }

    if (count > maxcolumn) {
        maxcolumn = count;
        largestcolumn = j;
    }
}

console.log("The largest row index: " + largestrow);
console.log("The largest column index: " + largestcolumn);