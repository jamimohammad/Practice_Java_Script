// **6.3 (Palindrome integer) Write the methods with the following headers
// // Return the reversal of an integer, i.e., reverse(456) returns 654
// public static int reverse(int number)
// // Return true if number is a palindrome
// public static boolean isPalindrome(int number)
// Use the reverse method to implement isPalindrome. A number is a palin
// drome if its reversal is the same as itself. Write a test program that prompts the 
// user to enter an integer and reports whether the integer is a palindrome.
function reverse(number) {
    let reversed = 0;
    while (number > 0) {
        reversed = reversed * 10 + (number % 10);
        number = Math.floor(number / 10);
    }
    return reversed;
}

function isPalindrome(number) {
    return number === reverse(number);
}

let take = Number(prompt('Enter an integer'));
if (isPalindrome(take)) {
    console.log(take + " is a palindrome.");
} else {
    console.log(take + " is not a palindrome.");
}
