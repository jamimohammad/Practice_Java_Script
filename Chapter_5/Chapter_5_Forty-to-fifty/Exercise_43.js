// *5.43 (Math: combinations) Write a program that displays all possible combinations 
// for picking two numbers from integers 1 to 7. Also display the total number of 
// all combinations.
// 1 2
// 1 3
// ...
// ...
// The total number of all combinations is 21

let count = 0;

for (let i = 1; i <= 7; i++) {
    for (let j = i + 1; j <= 7; j++) {
        console.log(i + " " + j);
        count++;
    }
}

console.log("The total number is " + count);
