// *5.50 (Count uppercase letters) Write a program that prompts the user to enter a string 
// and displays the number of the uppercase letters in the string.

let string = prompt('Enter a string');
let uppercase = 0;

for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase());
{  
        uppercase++;
    }
}

console.log("The number of uppercase letters is " + uppercase);
