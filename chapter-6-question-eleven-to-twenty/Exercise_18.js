// **6.18 (Check password) Some websites impose certain rules for passwords. Write a 
// method that checks whether a string is a valid password. Suppose the password 
// rules are as follows:
//  ■ A password must have at least eight characters.
//  ■ A password consists of only letters and digits.
//  ■ A password must contain at least two digits.
// Write a program that prompts the user to enter a password and displays Valid
// Password if the rules are followed or Invalid Password otherwise.

let password = prompt('please enter your password');
let isValid = true;

if (password.length < 8) {
  isValid = false;
}

if (!/^[A-Za-z0-9]+$/.test(password)) {
  isValid = false;
}

let digitCount = 0;
for (let i = 0; i < password.length; i++) {
  if (password[i] >= '0' && password[i] <= '9') {
    digitCount++;
  }
}

if (digitCount < 2) {
  isValid = false;
}

if (isValid) {
  console.log("Valid Password");
} else {
  console.log("Invalid Password");
}
