// 7.4 (Analyze scores) Write a program that reads an unspecified number of scores and 
// determines how many scores are above or equal to the average and how many 
// scores are below the average. Enter a negative number to signify the end of the 
// input. Assume that the maximum number of scores is 100.

let numbers = [];

while (true) {
    let num = Number(prompt("Enter an integer between 1 and 100 (0 to stop):"));
    if (num === 0) break;

    if (num >= 1 && num <= 100) {
        numbers.push(num);  
    }
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
let average = sum / numbers.length;

let aboveOrEqual = 0;
let below = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= average) {
        aboveOrEqual++;
    } else {
        below++;
    }
}

console.log("Average:", average);
console.log("Number of scores above or equal to average:", aboveOrEqual);
console.log("Number of scores below average:", below);