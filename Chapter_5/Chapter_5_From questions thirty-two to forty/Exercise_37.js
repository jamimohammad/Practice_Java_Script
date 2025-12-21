// **5.37 (Decimal to binary) Write a program that prompts the user to enter a decimal 
// integer and displays its corresponding binary value. Don’t use Java’s Integer
// .toBinaryString(int) in this program.

let number = Number(prompt("Enter a decimal number"))

let binary = "";

for (;;) {
    let remainder = number % 2;
    binary = remainder + binary; 
    number = Math.floor(number / 2)  

    if (number === 0) {                 
        break;
    }
}

console.log("Binary: " + binary)
