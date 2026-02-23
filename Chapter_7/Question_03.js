// // **7.3 (Count occurrence of numbers) Write a program that reads the integers between 1 
// // and 100 and counts the occurrences of each. Assume the input ends with 0. Here 
// // is a sample run of the program:
// // Enter the integers between 1 and 100: 2 5 6 5 4 3 23 43 2 0
// // 2 occurs 2 times
// // 3 occurs 1 time
// // 4 occurs 1 time
// // 5 occurs 2 times
// // 6 occurs 1 time
// // 23 occurs 1 time
// // 43 occurs 1 time
// // Note that if a number occurs more than one time, the plural word “times” is used 
// // in the output.


let numbers = [];

while (true) {
    let num = Number(prompt("Enter an integer between 1 and 100 (0 to stop):"));
    if (num === 0) break;

    if (num >= 1 && num <= 100) {
        numbers.push(num);  
    }
}

let counts = [];
for (let i = 0; i <= 100; i++) {
    counts[i] = 0;  
}

for (let i = 0; i < numbers.length; i++) {
    let n = numbers[i];
    counts[n]++;  
}

for (let i = 1; i <= 100; i++) {
    if (counts[i] > 0) {
        if (counts[i] === 1) {
            console.log(i + " occurs 1 time");
        } else {
            console.log(i + " occurs " + counts[i] + " times");
        }
    }
}
