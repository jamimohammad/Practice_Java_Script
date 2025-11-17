//  (Decimal to hex) Write a program that prompts the user to enter an integer between 
// 0 and 15 and displays its corresponding hex number. Here are some sample runs:
//  Enter a decimal value (0 to 15): 11
//  The hex value is B

function change(num) {
    if (num >= 0 && num <= 9) {
        return num;
    } else if (num === 10) {
        return "A";
    } else if (num === 11) {
        return "B";
    } else if (num === 12) {
        return "C";
    } else if (num === 13) {
        return "D";
    } else if (num === 14) {
        return "E";
    } else if (num === 15) {
        return "F";
    } else {
        return "bad";
    }
}

var user = Number(prompt("Enter a number between 0 and 15:"));
alert(change(user));
