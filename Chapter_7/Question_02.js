// 7.2 (Reverse the numbers entered) Write a program that reads ten integers and dis
// plays them in the reverse of the order in which they were read.

let numbers = [];

for (let i = 0; i < 10; i++) {
    let num = Number(prompt("Enter an integer:"));
    numbers.push(num);
}
numbers.reverse();

console.log("Numbers in reverse order:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
