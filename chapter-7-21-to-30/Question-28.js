// *7.28 (Math: combinations) Write a program that prompts the user to enter 10 integers 
// and displays all combinations of picking two numbers from the 10.

let numbers = [];

for (let i = 0; i < 10; i++) {
    let num = Number(prompt(`${i + 1} Enter the Numbers `));
    numbers.push(num);
}

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        console.log("[" + numbers[i] + ", " + numbers[j] + "]");
    }
}


