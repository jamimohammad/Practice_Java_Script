// *5.44 (Computer architecture: bit-level operations) A short value is stored in 16 bits. 
// Write a program that prompts the user to enter a short integer and displays the 16
// bits for the integer. Here are sample runs:
// Enter an integer: 5
// The bits are 0000000000000101
// Enter an integer: -5
// The bits are 1111111111111011
// (Hint
// : You need to use the bitwise right shift operator (>>) and the bitwise AND
// operator (&), which are covered in Appendix G, Bitwise Operations.)

let number = Number(prompt('Please enter a number'));

let string = (number & 0xFFFF).toString(2);

string = string.padStart(16, '0');

console.log("The bits are " + string);
