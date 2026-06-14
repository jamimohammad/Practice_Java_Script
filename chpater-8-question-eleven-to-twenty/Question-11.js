// **8.11 (Game: nine heads and tails) Nine coins are placed in a 3-by-3 matrix with some
// face up and some face down. You can represent the state of the coins using a
// 3-by-3 matrix with values 0 (heads) and 1 (tails). Here are some examples:
// 0 0 0 1 0 1 1 1 0 1 0 1 1 0 0
// 0 1 0 0 0 1 1 0 0 1 1 0 1 1 1
// 0 0 0 1 0 0 0 0 1 1 0 0 1 1 0
//  Each state can also be represented using a binary number. For example, the preceding matrices correspond to the numbers
// 000010000 101001100 110100001 101110100 100111110
//  There are a total of 512 possibilities, so you can use decimal numbers 0, 1, 2, 3,
// . . . , and 511 to represent all states of the matrix. Write a program that prompts
// the user to enter a number between 0 and 511 and displays the corresponding
// matrix with the characters H and T. Here is a sample run:
// Enter a number between 0 and 511: 7
// H H H
// H H H
// T T T
//  The user entered 7, which corresponds to 000000111. Since 0 stands for H and
// 1 for T, the output is correct.

let number = Number(prompt("enter a number between 0 and 511:"));
let binary = number.toString(2).padStart(9, "0");

let matrix = [];
let index = 0;

for (let i = 0; i < 3; i++) {
    matrix[i] = [];
    for (let j = 0; j < 3; j++) {
        let bit = binary[index];

        matrix[i][j] = bit === "0" ? "H" : "T";

        index++;
    }
}

for (let i = 0; i < 3; i++) {
    console.log(matrix[i].join(" "));
}