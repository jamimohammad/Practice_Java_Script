// *6.13 (Sum series) Write a method to compute the following series:
// m(i) = 1
// 2 + 2
// 3 + c + i
// i + 1
// Write a test program that displays the following table:
// i
// 1
// 2
// ...
// 19
// 20
// m(i)
//  0.5000
//  1.1667
// 16.4023
// 17.3546

function printSeries(max) {  
    console.log("i\tm(i)"); 
    for (let i = 1; i <= max; i++) {
        let sum = 0;     
        for (let n = 1; n <= i; n++) {
            sum += n / (n + 1);
        }
        console.log(i + "\t" + sum.toFixed(4)); 
    }
}

printSeries(20);
