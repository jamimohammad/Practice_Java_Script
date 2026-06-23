// **5.32 (Game: lottery)Revise Listing 3.8, Lottery.java, to generate a lottery of a two
// digit number. The two digits in the number are distinct. (Hint: Generate the first 
// digit. Use a loop to continuously generate the second digit until it is different 
// from the first digit.)

let computerinput = Math.floor(Math.random() * 10)
let n2 = 0;

for(let i = 0; i < 100; i++) {  
    n2 = Math.floor(Math.random() * 10)
    if(n2 !== computerinput)
         break;  
}

console.log(computerinput + "" + n2)