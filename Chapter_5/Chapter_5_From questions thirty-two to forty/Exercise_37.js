// **5.37 (Decimal to binary) Write a program that prompts the user to enter a decimal 
// integer and displays its corresponding binary value. Don’t use Java’s Integer
// .toBinaryString(int) in this program.

let number = Number(prompt("Enter a decimal number"));

let binary = "";

if (number === 0) {
    binary = "0";
} else {
    while (number > 0) {
        let remainder = number % 2;
        binary = remainder + binary;
        number = Math.floor(number / 2);
    }
}

console.log("Binary: " + binary);