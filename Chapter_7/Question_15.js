// 7.15 (Eliminate duplicates) Write a method that returns a new array by eliminating the 
// duplicate values in the array using the following method header:
// public static int[] eliminateDuplicates(int[] list)
// Write a test program that reads in ten integers, invokes the method, and displays 
// the result. Here is the sample run of the program:
// Enter ten numbers: 1 2 3 2 1 6 3 4 5 2
// The distinct numbers are: 1 2 3 6 4 5

function eliminateDuplicates(list) {
    let distinctNumbers = [];

    for (let i = 0; i < list.length; i++) {
        if (!distinctNumbers.includes(list[i])) {
            distinctNumbers.push(list[i]);
        }
    }

    return distinctNumbers;
}

let numbers = [];

for (let i = 0; i < 10; i++) {
    let num = Number(prompt("Enter number:"));
    numbers.push(num);
}

let result = eliminateDuplicates(numbers);

console.log("The number of distinct numbers is:", result.length);
console.log("The distinct numbers are:", result.join(" "));



