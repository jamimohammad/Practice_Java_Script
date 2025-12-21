// (Generate vehicle plate numbers) Assume a vehicle plate number consists of three 
// uppercase letters followed by four digits. Write a program to generate a plate 
// number.

function all() {
  
let letter1 = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
let letter2 = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
let letter3 = String.fromCharCode(Math.floor(Math.random() * 26) + 65)

let number = Math.floor(Math.random() * 10)
let number1 = Math.floor(Math.random() * 10)
let number2 = Math.floor(Math.random() * 10)
let number3 = Math.floor(Math.random() * 10)

let all1 = letter1 + letter2 + letter3 + number + number1 + number2 + number3

alert(all1)
console.log(all1)
}
all()
