// *5.41 (Occurrence of max numbers) Write a program that reads integers, finds the larg
// est of them, and counts its occurrences. Assume that the input ends with number 
// 0. Suppose that you entered 3 5 2 5 5 5 0; the program finds that the largest 
// is 5 and the occurrence count for 5 is 4.
// (Hint
// : Maintain two variables, max and count. max stores the current max num
// ber, and count stores its occurrences. Initially, assign the first number to max
// and 1 to count. Compare each subsequent number with max. If the number is 
// greater than max, assign it to max and reset count to 1. If the number is equal to 
// max, increment count by 1.)
// Enter numbers: 3 5 2 5 5 5 0
// The largest number is 5
// The occurrence count of the largest number is 4

let number = Number(prompt("Enter a number"));

let max = number;
let count = 0;

while (number !== 0) {

    if (number > max) {
        max = number;
        count = 1;
    } 
    else if (number === max) {
        count++;
    }

    number = Number(prompt("Enter a number"));
}

console.log("The largest number is " + max);
console.log("The occurrence count of the largest number is " + count);
