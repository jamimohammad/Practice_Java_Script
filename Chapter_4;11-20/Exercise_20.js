// (Check SSN) Write a program that prompts the user to enter a Social Security 
// number in the format DDD-DD-DDDD, where D is a digit. Your program should 
// check whether the input is valid. Here are sample runs:

function ssn() {
    let user = prompt("Enter number ddd-dd-dddd");

if (user.length === 11 && user.charAt(3) === '-' && user.charAt(6) === '-' &&!isNaN(Number(user.charAt(0))) &&
!isNaN(Number(user.charAt(1))) && !isNaN(Number(user.charAt(2))) && !isNaN(Number(user.charAt(4))) &&
!isNaN(Number(user.charAt(5))) && !isNaN(Number(user.charAt(5))) && !isNaN(Number(user.charAt(8))) &&
!isNaN(Number(user.charAt(9))) && !isNaN(Number(user.charAt(10)))) 

{alert("good");
} else {
    alert("bad");
}
}
ssn(); 
