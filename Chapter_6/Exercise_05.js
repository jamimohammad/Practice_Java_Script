// *6.5 (Sort three numbers) Write a method with the following header to display three 
// numbers in increasing order:
// public static void displaySortedNumbers(
// double num1, double num2, double num3)
// Write a test program that prompts the user to enter three numbers and invokes the 
// method to display them in increasing order.

function sortThreeNumbers(num1, num2, num3) {

    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
   
    if (num1 > num3) {
        let temp = num1;
        num1 = num3;
        num3 = temp;
    }

    if (num2 > num3) {
        let temp = num2;
        num2 = num3;
        num3 = temp;
    }

    console.log("Numbers in increasing order: " + num1 + ", " + num2 + ", " + num3);
}

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let num3 = Number(prompt("Enter the third number:"));

sortThreeNumbers(num1, num2, num3);

