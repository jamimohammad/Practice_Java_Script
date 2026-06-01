//  **5.7 (Financial application: compute future tuition) Suppose that the tuition for a uni
// versity is $10,000 this year and increases 5% every year. In one year, the tuition 
// will be $10,500. Write a program that computes the tuition in ten years and the 
// total cost of four years’ worth of tuition after the tenth year.

let now = 10000;   
let multi = 0.05; 

for (let i = 0; i < 10; i++) {
    let multipliction = now * multi;
    let all = now + multipliction;
    now = all;
    console.log("Year " + (i + 1) + ": " + now);
}

let four = 0
for (let j = 0; j < 4; j++) {
    let multipliction = now * multi;
    now = now + multipliction;
    four = four + now;
    console.log("Year " + (j + 11) + ": " + now);
}

console.log('four years'+': ' + four)
