// **5.36 (Business application: checking ISBN) Use loops to simplify Programming 
// Exercise 3.9.

let userinput = prompt("Enter the first 9 digits of an ISBN:");

let sum = 0;
for (let i = 0; i < 9; i++) {
    sum += Number(userinput.charAt(i)) * (i + 1);
}

let all = sum % 11 === 10 ? "X" : sum % 11;

console.log("The ISBN-10 number is " + userinput + d10);
