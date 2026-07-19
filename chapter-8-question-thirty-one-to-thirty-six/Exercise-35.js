// **8.35 (Latin square) A Latin square is an n-by-n array filled with n different Latin letters, each occurring exactly once in each row and once in each column. Write a
// Programming Exercises 319
// program that prompts the user to enter the number n and the array of characters,
// as shown in the sample output, and checks if the input array is a Latin square.
// The characters are the first n characters starting from A.

// Enter number n: 4
// Enter 4 rows of letters separated by spaces:
// A B C D
// B A D C
// C D B A
// D C A B
// The input array is a Latin square

// Enter number n: 3
// Enter 3 rows of letters separated by spaces:
// A F D
// Wrong input: the letters must be from A to C

let n = Number(prompt("Enter number n:"));

let matrix = [];

for (let i = 0; i < n; i++) {
    matrix[i] = prompt(`Enter row ${i + 1}:`).toUpperCase().split(" ");
       
}

let valid = true;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        let letter = matrix[i][j];

        if (letter.charCodeAt(0) < 65 || letter.charCodeAt(0) > 64 + n){
            console.log(`Wrong input: the letters must be from A to ${String.fromCharCode(64 + n)}`);
            valid = false;
            break;
        }
    }

    if (!valid) {
        break;
    }
}

if (valid) {
    let latin = true;

    for (let i = 0; i < n && latin; i++) {
        for (let j = 0; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (matrix[i][j] === matrix[i][k]) {
                    latin = false;
                }
            }
        }
    }

    for (let j = 0; j < n && latin; j++) {
        for (let i = 0; i < n - 1; i++) {
            for (let k = i + 1; k < n; k++) {
                if (matrix[i][j] === matrix[k][j]) {
                    latin = false;
                }
            }
        }
    }

    if (latin) {
        console.log("The array is a Latin square");
    } else {
        console.log("The array is not a Latin square");
    }
}