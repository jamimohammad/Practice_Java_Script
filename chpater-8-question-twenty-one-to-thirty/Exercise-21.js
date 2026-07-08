// *8.21 (Even number of 1s) Write a program that generates a 6-by-6 two-dimensional
// matrix filled with 0s and 1s, displays the matrix, and checks if every row and
// every column have an even number of 1s.

let size = 6;
let matrix = [];

for (let i = 0; i < size; i++) {
    matrix[i] = [];

    for (let j = 0; j < size; j++) {
        matrix[i][j] = Math.floor(Math.random() * 2);
    }
}

for (let i = 0; i < size; i++) {
    console.log(matrix[i].join(" "));
}
console.log("\nChecking rows:");

for (let i = 0; i < size; i++) {
    let count = 0;

    for (let j = 0; j < size; j++) {
        if (matrix[i][j] === 1) {
            count++;
        }
    }

    if (count % 2 === 0) {
        console.log(`Row ${i + 1}: Even (${count} ones)`);
    } else {
        console.log(`Row ${i + 1}: Odd (${count} ones)`);
    }
}

console.log("\nChecking columns:");

for (let j = 0; j < size; j++) {
    let count = 0;

    for (let i = 0; i < size; i++) {
        if (matrix[i][j] === 1) {
            count++;
        }
    }

    if (count % 2 === 0) {
        console.log(`Column ${j + 1}: Even (${count} ones)`);
    } else {
        console.log(`Column ${j + 1}: Odd (${count} ones)`);
    }
}