//4.12  (Hex to binary) Write a program that prompts the user to enter a hex digit and 
// displays its corresponding binary number. Here is a sample run:

let user = prompt("enter a number or a little")
user = user.toUpperCase();  

let all = parseInt(user, 16);

if (isNaN(all)) {
  alert(user + " bad");
} else {
  let binary = all.toString(2);
  alert("the binary is " + binary);
}
