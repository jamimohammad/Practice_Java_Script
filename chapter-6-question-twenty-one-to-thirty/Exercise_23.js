// *6.23 (Occurrences of a specified character) Write a method that finds the number of 
// occurrences of a specified character in a string using the following header:
// public static int count(String str, char a)
// For example, count("Welcome", 'e') returns 2. Write a test program that 
// prompts the user to enter a string followed by a character and displays the number 
// of occurrences of the character in the string.

function occurrencesofaspecifiedcharacter(string, letter){
    let count = 0
    for(let i = 0; i < string.length; i++){
        if(string[i] === letter)
            count++
    }
    return count  
}
let string = prompt('enter a string')
string = string.toUpperCase()
let letter = prompt('enter a letter')
letter = letter.toUpperCase()

console.log('Occurrences of a specified character are:  '+occurrencesofaspecifiedcharacter(string, letter))
