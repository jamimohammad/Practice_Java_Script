// **8.36 (Guess the capitals) Write a program that repeatedly prompts the user to enter
// a capital for a state. Upon receiving the user input, the program reports whether
// the answer is correct. Assume that 50 states and their capitals are stored in a twodimensional array, as shown in Figure 8.10. The program prompts the user to
// answer all states’ capitals and displays the total correct count. The user’s answer
// is not case-sensitive.
// Alabama
// Alaska
// Arizona
// ...
// ...
// Montgomery
// Juneau
// Phoenix
// ...
// ... 
// A two-dimensional array stores states and their capitals.
// Here is a sample run:
// What is the capital of Alabama? Montogomery
// The correct answer should be Montgomery
// What is the capital of Alaska? Juneau
// Your answer is correct
// What is the capital of Arizona? ...
// ...
// The correct count is 35

let statesandCapitals = [
    ["Alabama", "Montgomery"],
    ["Alaska", "Juneau"],
    ["Arizona", "Phoenix"],
    ["Arkansas", "Little Rock"],
    ["California", "Sacramento"],
    ["Colorado", "Denver"],
    ["Connecticut", "Hartford"], 
    ["Delaware", "Dover"],
    ["Florida", "Tallahassee"],
    ["Georgia", "Atlanta"]
];

let correctCount = 0;

for (let i = 0; i < statesandCapitals.length; i++) {

    let answer = prompt(`What is the capital of ${statesandCapitals[i][0]}?`);

    if (
        answer.trim().toLowerCase() === statesandCapitals[i][1].toLowerCase()) {
        console.log("Your answer is correct");
        correctCount++;
    } else {
        console.log(`The correct answer should be ${statesandCapitals[i][1]}`);
    }
}

console.log(`The correct count is ${correctCount}`);