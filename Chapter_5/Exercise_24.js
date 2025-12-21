// *5.24 (Sum a series) Write a program to sum the following series:
//  1
//  3 + 3
//  5 + 5
//  7 + 7
//  9 + 9
//  11 + 11
//  13 + g+ 95
//  97 + 97
//  99

let left = 0;

for (let i = 3; i <= 99; i += 2) {
    left += 1 / i;
}

let right = 0;
for (let i = 99; i >= 3; i -= 2) {
    right += 1 / i;
}

console.log( "left" + left);
console.log("right" + right);
console.log("difference" + (left - right));
