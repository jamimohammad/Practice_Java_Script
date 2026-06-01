// *5.49 (Count vowels and consonants) Assume letters A, E, I, O, and U as the vowels. 
// Write a program that prompts the user to enter a string and displays the number 
// of vowels and consonants in the string.
// Enter a string: Programming is fun
// The number of vowels is 5
// The number of consonants is 11

let string = prompt('Enter a string');
let vowles = 0;
let consonants = 0;

for (let i = 0; i < string.length; i++) {
  if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u')
 {
        vowles++;
    } else {
    consonants++;
}

}

console.log("The number of vowels is " + vowles);
console.log("The number of consonants is " + consonants);