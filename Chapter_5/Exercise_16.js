// //  *5.16 (Find the factors of an integer) Write a program that reads an integer and displays 
// // all its smallest factors in increasing order. For example, if the input integer is 
// // 120, the output should be as follows: 2,2,2,3,5.

var a = Number(prompt('Enter a number'));
var i = 2;

while (a > 1) {
    if (a % i === 0) {
        console.log(i);
        a = a / i;     
    } else {
        i++;              
    }
}
