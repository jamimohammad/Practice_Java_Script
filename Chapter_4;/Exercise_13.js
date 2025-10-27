// 4.13 (Vowel or consonant?) Write a program that prompts the user to enter a letter and 
// check whether the letter is a vowel or consonant. Here is a sample run:

var user = String(prompt('Enter a letter'));
user = user.toUpperCase();

if (user === 'A' || user === 'E' || user === 'I' || user === 'O' || user === 'U') {
    alert(user + ': Vowel');
} else {
    alert(user + ': Consonant');
}
