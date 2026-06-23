// (Check substring) Write a program that prompts the user to enter two strings and 
// reports whether the second string is a substring of the first string.

function checkSubstring() {
    var userinput = prompt("enter the first ");
    var userinput2 = prompt("enter the second ");

    if (userinput.includes(userinput2)) {
        alert("the second string is a substring of the first string")
    } else { 
        alert("the second string is not a substring of the first string")
    }
}

checkSubstring();