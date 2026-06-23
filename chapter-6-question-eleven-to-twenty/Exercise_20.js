// *6.20 (Count the letters in a string) Write a method that counts the number of letters in 
// a string using the following header:
// public static int countLetters(String s)
// Write a test program that prompts the user to enter a string and displays the num
// ber of letters in the string.

function countLetters(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
            count++;
        }
    }
    return count;
}

let string = prompt("Enter a string:");
console.log("The number of letters in the string is: " + countLetters(string));
