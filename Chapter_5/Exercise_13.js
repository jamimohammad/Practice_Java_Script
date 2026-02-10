//  5.13 (Find the largestn such that n3612,000) Use a while loop to find the largest 
// integer n such that n3 is less than 12,000.

var n = 1;

while (n ** 3 <= 12000) {
    n++;
}

console.log("n = " + (n - 1) + "  n ** 3 = " + ((n - 1) ** 3));
