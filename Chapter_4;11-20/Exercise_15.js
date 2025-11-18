// (Random character) Write a program that displays a random uppercase letter 
// using the Math.random() method.

function all(){
var random = Math.floor(Math.random() * 26); 
var letter = random + 65; 
var random1 = String.fromCharCode(letter); 
alert(random1); 
}
all()