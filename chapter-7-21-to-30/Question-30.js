// *7.30 (Pattern recognition: consecutive four equal numbers) Write the following 
// method that tests whether the array has four consecutive numbers with the same 
// value. 
// public static boolean isConsecutiveFour(int[] values)
// Write a test program that prompts the user to enter a series of integers and dis
// plays if the series contains four consecutive numbers with the same value. Your 
// program should first prompt the user to enter the input size—i.e., the number of 
// values in the series. Here are sample runs:
// Enter the number of values: 8
// Enter the values: 3 4 5 5 5 5 4 5
// The list has consecutive fours 
// Enter the number of values: 9
// Enter the values: 3 4 5 5 6 5 5 4 5
// The list has no consecutive fours 

function isConsecutiveFour(values) {
    for (let i = 0; i <= values.length - 4; i++) {
        if (values[i] === values[i + 1] &&
            values[i] === values[i + 2] &&
            values[i] === values[i + 3]) {
            return true;
        }
    }
    return false;
}

let size = Number(prompt("Enter the number of values:"));
let values = [];

for (let i = 0; i < size; i++) {
    let num = Number(prompt(`Enter value ${i + 1}:`));
    values.push(num);
}

if (isConsecutiveFour(values)) {
    console.log("The list has consecutive fours");
} else {
    console.log("The list has no consecutive fours");
}