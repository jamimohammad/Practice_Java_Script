// *5.46 (Reverse a string) Write a program that prompts the user to enter a string and 
// displays the string in reverse order.
// Enter a string: ABCD
// The reversed string is DCBA

let string = prompt('Please enter a word'); 
let add = ''; 

for (let i = string.length - 1; i >= 0; i--) {
    add += string[i].toUpperCase(); 
}

console.log('The reversed string is: ' + add);
