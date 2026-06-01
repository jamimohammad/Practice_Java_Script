// 4.22(Check substring) Write a program that prompts the user to enter two strings and 
// reports whether the second string is a substring of the first string.

function all() {
    var user1 = prompt("enter the first ");
    var user2 = prompt("enter the second ");

    if (user1.includes(user2)) {
        alert("the second string is a substring of the first string")
    } else { 
        alert("the second string is not a substring of the first string")
    }
}

all();
