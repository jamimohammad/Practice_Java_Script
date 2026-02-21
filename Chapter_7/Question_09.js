// 7.9 (Find the smallest element) Write a method that finds the smallest element in an 
// array of double values using the following header:
// public static double min(double[] array)
// Write a test program that prompts the user to enter ten numbers, invokes this 
// method to return the minimum value, and displays the minimum value. Here is a 
// sample run of the program:
// Enter ten numbers: 1.9 2.5 3.7 2 1.5 6 3 4 5 2
// The minimum number is: 1.5

let numbers = [];

for (let i = 0; i < 10; i++) {
    let userInput = Number(prompt("Enter number " + (i + 1)));
    numbers.push(userInput);
}

let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log("The minimum number is: " + min);

















