// *5.48 (Process string) Write a program that prompts the user to enter a string and dis
// plays the characters at odd positions. Here is a sample run:
// Enter a string: Beijing Chicago
// BiigCiao

let string = prompt('Enter a string');
let add = '';

for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {  
        add += string[i];
    }
}

console.log(add); 
