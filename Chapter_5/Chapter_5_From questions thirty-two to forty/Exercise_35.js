// *5.35 (Summation) Write a program to compute the following summation.
// 1
// 1+22
// + 1
// 22+23
// + 1
// 23+24
// +c+ 1
// 2624+2625

let sum = 0;

for (let n = 1; n <= 624; n++) {
    sum += 1 / (Math.sqrt(n) + Math.sqrt(n + 1));
}

console.log("Sum =", sum);
