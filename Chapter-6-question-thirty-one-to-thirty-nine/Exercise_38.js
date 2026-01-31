// *6.38 (Generate random characters) Use the methods in RandomCharacter in Listing 
// 6.10 to print 100 uppercase letters and then 100 single digits, printing ten per line.

function randomUppercaseLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomdigit() {
    return Math.floor(Math.random() * 10);
}

let lettersline = "";
for (let i = 1; i <= 100; i++) {
    lettersline += randomUppercaseLetter() + " ";
    if (i % 10 === 0) lettersline += "\n";
}
console.log("100 Uppercase Letters \n" + lettersline);

let digitsline = "";
for (let i = 1; i <= 100; i++) {
    digitsline += randomdigit() + " ";
    if (i % 10 === 0) digitsline += "\n";
}
console.log("=== 100 Single Digits ==\n" + digitsline);
