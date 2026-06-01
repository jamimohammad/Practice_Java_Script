// 5.12 (Find the smallestn such that n2712,000) Use a while loop to find the smallest 
// integer n such that n2 is greater than 12,000.

var n = 1;

while (n * n <= 12000) {
    n++;
}
console.log("n " + n +    " n * n = " + (n * n));

