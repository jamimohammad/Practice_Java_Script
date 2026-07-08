// *8.22 (Game: find the flipped cell) Suppose you are given a 6-by-6 matrix filled with
// 0s and 1s. All rows and all columns have an even number of 1s. Let the user flip
// one cell (i.e., flip from 1 to 0 or from 0 to 1) and write a program to find which
// cell was flipped. Your program should prompt the user to enter a 6-by-6 array
// with 0s and 1s and find the first row r and first column c where the even number
// of the 1s property is violated (i.e., the number of 1s is not even). The flipped cell
// is at (r, c). Here is a sample run:

// Enter a 6-by-6 matrix row by row:
// 1 1 1 0 1 1
// 1 1 1 1 0 0
// 0 1 0 1 1 1
// 1 1 1 1 1 1
// 0 1 1 1 1 0
// 1 0 0 0 0 1
// The flipped cell is at (0, 1)

let matrix = [];

for (let i = 0; i < 6; i++) {
    let row = prompt(`Enter row ${i + 1} (Enter 6 numbers separated by spaces):`).trim().split(" ").map(Number);
    
    matrix.push(row);
}

let badrow = 0;
let badcolumn = 0;

for (let i = 0; i < 6; i++) {
    let count = 0;

    for (let j = 0; j < 6; j++) {
        if (matrix[i][j] === 1) {
            count++;
        }
    }

    if (count % 2 !== 0) {
        badrow = i;
        break;
    }
}

for (let j = 0; j < 6; j++) {
    let count = 0;

    for (let i = 0; i < 6; i++) {
        if (matrix[i][j] === 1) {
            count++;
        }
    }

    if (count % 2 !== 0) {
        badcolumn = j;
        break;
    }
}

console.log(matrix);

console.log(`The flipped cell is at (${badrow}, ${badcolumn})`);