// (Find the character of an ASCII code) Write a program that receives an ASCII code 
// (an integer between 0 and 127) and displays its character. Here is a sample run:

function all(code) {
    if (code >= 0 && code <= 127) {
        return String.fromCharCode(code);
    } else {
        return "bad";
    }
}

var user = Number(prompt("Enter a number:"));
alert(all(user));
