// 5.40 (Simulation: heads or tails) Write a program that simulates flipping a coin one 
// million times and displays the number of heads and tails.

alert('let`s flip a coin');

let heads = 0;
let tails = 0;

for (let i = 0 ; i <= 1000000; i++){

    let random = Math.floor(Math.random() * 2);

    if (random == 0 ){
     heads++
    }else{
        tails++
    }
}
console.log( "heads == " +heads +  "  |  "  +" tails == "+ tails);





