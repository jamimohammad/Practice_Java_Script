// 7.8 (Average an array) Write two overloaded methods that return the average of an 
// array with the following headers:
// public static int average(int[] array)
// public static double average(double[] array)
// Write a test program that prompts the user to enter ten double values, invokes this 
// method, and displays the average value.

function average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

let numbers = [];
for (let i = 0; i < 10; i++) {
    let num = Number(prompt("Enter number " + (i + 1)));
    numbers.push(num);
}

let avg = average(numbers);

console.log("Average:", avg);

