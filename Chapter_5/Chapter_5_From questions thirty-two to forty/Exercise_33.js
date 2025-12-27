// **5.33 (Perfect number) A positive integer is called a perfect number if it is equal to 
// the sum of all of its positive divisors, excluding itself. For example, 6 is the first 
// perfect number because 6 = 3 + 2 + 1. The next is 28 = 14 + 7 + 4 + 2 
// + 1. There are four perfect numbers less than 10,000. Write a program to find all 
// these four numbers.

let n = 10000;

for (let i = 1; i < n; i++) {
    let sum = 0;

    for (let j = 1; j <= i / 2; j++) {
        if (i % j === 0) {
            sum += j;
        }
    }

    if (sum === i) {
        console.log(i);
    }
}
