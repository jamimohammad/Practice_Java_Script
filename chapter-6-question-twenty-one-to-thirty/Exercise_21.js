// *6.21 (Phone keypads)The international standard letter/number mapping for telephones 
// is shown in Programming Exercise 4.15. Write a method that returns a number, 
// given an uppercase letter, as follows:
// int getNumber(char uppercaseLetter)
// Write a test program that prompts the user to enter a phone number as a string. 
// The input number may contain letters. The program translates a letter (uppercase 
// or lowercase) to a digit and leaves all other characters intact. Here is a sample run 
// of the program:
// Enter a string: 1-800-Flowers
// 1-800-3569377
// Enter a string: 1800flowers
// 18003569377

function getNumber(char) {
    
    char = char.toUpperCase();

    if (char >= 'A' && char <= 'C') return 2;
    else if (char >= 'D' && char <= 'F') return 3;
    else if (char >= 'G' && char <= 'I') return 4;
    else if (char >= 'J' && char <= 'L') return 5;
    else if (char >= 'M' && char <= 'O') return 6;
    else if (char >= 'P' && char <= 'S') return 7;
    else if (char >= 'T' && char <= 'V') return 8;
    else if (char >= 'W' && char <= 'Z') return 9;
    else return char; 
}

let input = prompt("Enter a string:");

let output = "";

for (let i = 0; i < input.length; i++) {
    let ch = input[i];
  
    if (/[a-zA-Z]/.test(ch)) {
        output += getNumber(ch);
    } else {
        output += ch;
    }
}

console.log(output);
