// *4.8 (Find the character of an ASCII code) Write a program that receives an ASCII code 
// (an integer between 0 and 127) and displays its character. Here is a sample run:

var user = Number(prompt('Enter a number'))
var user1 = String.fromCharCode(user)

if (user <= 127){
    alert(user1)
}else{
    alert('bad')
}