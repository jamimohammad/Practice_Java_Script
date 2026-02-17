// *7.7 (Count single digits) Write a program that generates 100 random integers between 
// 0 and 9 and displays the count for each number. (Hint: Use an array of ten integers, 
// say counts, to store the counts for the number of 0s, 1s, ..., 9s.)

let counts = [];

for (let i = 0; i < 10; i++) {
    counts[i] = 0;
}

for (let i = 0; i < 100; i++) {
    let num = Math.floor(Math.random() * 10);
    counts[num]++;
}

for (let i = 0; i < 10; i++) {
    console.log(i + "  " + counts[i] + " times");
}