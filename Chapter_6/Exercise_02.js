// *6.2 (Sum the digits in an integer) Write a method that computes the sum of the digits 
// in an integer. Use the following method header:
// public static int sumDigits(long n)
// For example, sumDigits(234) returns 9 (2 + 3 + 4). (
// Hint: Use the % opera
// tor to extract digits, and the / operator to remove the extracted digit. For instance, 
// to extract 4 from 234, use 234 % 10 (= 4). To remove 4 from 234, use 234 / 10
// (= 23). Use a loop to repeatedly extract and remove the digit until all the digits 
// are extracted. Write a test program that prompts the user to enter an integer and 
// displays the sum of all its digits.

function sumdigits(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;       
        n = Math.floor(n / 10);
    }
    return sum;              
}

let take = Number(prompt('Enter a number'));
console.log("Sum of digits is " + sumdigits(take));

