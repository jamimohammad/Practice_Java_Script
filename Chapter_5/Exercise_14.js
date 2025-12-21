// (Compute the greatest common divisor) Another solution for Listing 5.9 to find 
// the greatest common divisor of two integers n1 and n2 is as follows: First find d
//  to be the minimum of n1 and n2, then check whether d,d-1,d-2, ...,2, or 1 is 
// a divisor for both n1 and n2 in this order. The first such common divisor is the 
// greatest common divisor for n1 and n2. Write a program that prompts the user to 
// enter two positive integers and displays the gcd.

var n1 = Number(prompt('Enter the n1'));
var n2 = Number(prompt('Enter the n2'));

var d = n1 < n2 ? n1 : n2;
var g = 1;

for (var i = d; i >= 1; i--) {
    if (n1 % i === 0 && n2 % i === 0) {
        g = i; 
        break;   
    }
}
alert("gcd" + n1 + " and " + n2 + " is " + g);
