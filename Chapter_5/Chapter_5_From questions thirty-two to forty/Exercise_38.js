// **5.38 (Decimal to octal) Write a program that prompts the user to enter a decimal 
// integer and displays its corresponding octal value. Don’t use Java’s Integer
// .toOctalString(int) in this program.

let number = Number(prompt("Enter a decimal number"))

let octal = "";

for (;;) {
    let remainder = number % 8;
    octal = remainder + octal; 
    number = Math.floor(number / 8)  

    if (number === 0) {                 
        break;
    }
}

console.log("octal: " + octal)