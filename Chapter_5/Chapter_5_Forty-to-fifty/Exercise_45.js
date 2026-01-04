// **5.45 (Statistics: compute mean and standard deviation) In business applications, you 
// are often asked to compute the mean and standard deviation of data. The mean is 
// simply the average of the numbers. The standard deviation is a statistic that tells 
// 200 Chapter 5 Loops
// you how tightly all the various data are clustered around the mean in a set of data. 
// For example, what is the average age of the students in a class? How close are the 
// ages? If all the students are the same age, the deviation is 0.
// Write a program that prompts the user to enter ten numbers, and displays the 
// mean and standard deviations of these numbers using the following formula:
// n
// a
// n
// mean =
// i =1
// n = x1 + x2 + g+ xn
// Here is a sample run:
// Enter ten numbers: 1 2 3 4.5 5.6 6 7 8 9 10
// The mean is 5.61
// The standard deviation is 2.99794

let sum = 0;        
let Squares = 0;
let n = 10;

for (let i = 1; i <= n; i++) {
    let x = Number(prompt('enter a number'));
    
    sum += x;
    Squares += x * x;
}

let mean = sum / n;
let standarddeviation = Math.sqrt( (Squares - (sum * sum) / n) / (n - 1));
  
console.log("The mean is ", mean);
console.log("The standard deviation is ", standarddeviation);