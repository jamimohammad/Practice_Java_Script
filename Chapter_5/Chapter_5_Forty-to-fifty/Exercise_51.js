// *5.51 (Longest common prefix) Write a program that prompts the user to enter two 
// strings and displays the largest common prefix of the two strings. Here are some 
// sample runs:
// Enter the first string: Welcome to C++
// Enter the second string: Welcome to programming
// The common prefix is Welcome to
// Enter the first string: Atlanta
// Enter the second string: Macon
// Atlanta and Macon have no common prefix

let string1 = prompt("Enter the first string:");
let string2 = prompt("Enter the second string:");

let min = Math.min(string1.length, string2.length);

let prefix = "";

for (let i = 0; i < min; i++) {
    if (string1[i] === string2[i]) {
        prefix += string1[i];
    } else {
        break;
    }
}

if (prefix.length > 0) {
    console.log("The common prefix is " + prefix);
} else {
    console.log(string1 + " and " + string2 + " have no common prefix");
}
