// *7.11 (Statistics: compute deviation) Programming Exercise 5.45 computes the stand
// ard deviation of numbers. This exercise uses a different but equivalent formula to
// compute the standard deviation of n numbers.
// a
// n
// mean =
// i =1
// xi
// n = x1 + x2 + g+ xn
// n
// a
// n
// i =1
// deviation = H
// (xi- mean)2
// n- 1
// To compute the standard deviation with this formula, you have to store the indi
// vidual numbers using an array, so that they can be used after the mean is obtained.
// Your program should contain the following methods:
// /** Compute the deviation of double values */
// public static double deviation(double[] x) 
// /** Compute the mean of an array of double values */
// public static double mean(double[] x) 
// Write a test program that prompts the user to enter ten numbers and displays the 
// mean and standard deviation, as shown in the following sample run:
// Enter ten numbers: 1.9 2.5 3.7 2 1 6 3 4 5 2
// The mean is 3.11
// The standard deviation is 1.55738 

function mean(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum / x.length;
}

function deviation(num) {
    let m = mean(num);
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Math.pow(num[i] - m, 2);
    }

    return Math.sqrt(sum / (num.length - 1));
}

let numbers = [];

for (let i = 0; i < 10; i++) {
    numbers.push(Number(prompt("Enter a number:")));
}

let avg = mean(numbers);
let dev = deviation(numbers);

console.log("The mean is", avg.toFixed(2));
console.log("The standard deviation is", dev.toFixed(5));
