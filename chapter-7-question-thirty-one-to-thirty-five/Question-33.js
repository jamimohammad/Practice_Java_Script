// *7.33 (Culture: Chinese Zodiac) Simplify Listing 3.9 using an array of strings to store 
// the animal names.

let year = Number(prompt("Enter a year:"));

let zodiac = ["monkey", "rooster", "dog", "pig","rat", "ox", "tiger", "rabbit","dragon", "snake", "horse", "sheep"];
 
let array = year % 12;

console.log(zodiac[array]);