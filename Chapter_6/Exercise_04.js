// *6.4 (Display an integer reversed) Write a method with the following header to display 
// an integer in reverse order:
// public static void reverse(int number)
// For example, reverse(3456) displays 6543. Write a test program that prompts 
// the user to enter an integer and displays its reversal.

function reverse(number) {
    let reversed = 0;
    while (number > 0) {
        reversed = reversed * 10 + (number % 10);
        number = Math.floor(number / 10);
    }
    return reversed;
}
let take = Number(prompt('Enter a number'));
console.log("The reverse is " + reverse(take));

