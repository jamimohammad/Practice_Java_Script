// *6.5 (Sort three numbers) Write a method with the following header to display three 
// numbers in increasing order:
// public static void displaySortedNumbers(
// double num1, double num2, double num3)
// Write a test program that prompts the user to enter three numbers and invokes the 
// method to display them in increasing order.


function sortthreenumbers(num1, num2, num3) {
    let smallest = 0;
    let middle = 0;
    let largest = 0;


    if (num1 <= num2 && num1 <= num3 && num2 <= num3) {
        smallest = num1;
        middle = num2;
        largest = num3;

    } else if (num1 <= num2 && num1 <= num3 && num3 <= num2) {
        smallest = num1;
        middle = num3;
        largest = num2;
        
    } else if (num2 <= num1 && num2 <= num3 && num1 <= num3) {
        smallest = num2;
        middle = num1;
        largest = num3;

    } else if (num2 <= num1 && num2 <= num3 && num3 <= num1) {
        smallest = num2;
        middle = num3;
        largest = num1;
    } else if (num3 <= num1 && num3 <= num2 && num1 <= num2) {
        smallest = num3;
        middle = num1;
        largest = num2;
        
    } else { 
        smallest = num3;
        middle = num2;
        largest = num1;
    }

    console.log("Numbers in increasing order: " + smallest + ", " + middle + ", " + largest);
}

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let num3 = Number(prompt("Enter the third number:"));

 sortthreenumbers(num1, num2, num3);
