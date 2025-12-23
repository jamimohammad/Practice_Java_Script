// 4.9 (Find the Unicode of a character) Write a program that receives a character and 
// displays its Unicode. Here is a sample run:

function getCharCode(char) {
    return char.charCodeAt(0);
}

var user = prompt("Enter a character:");
console.log(getCharCode(user));