// //  *6.6 (Display patterns) Write a method to display a pattern as follows:
// //               1
// //             2 1
// //           3 2 1
// // ...
// // n n-1 ... 3 2 1
// // The method header is
// // public static void displayPattern(int n)

function displayPattern(n) {
    for (let m = 1; m <= n; m++) {
        let line2 = "";

        for (let s = 0; s < n - m; s++) {
            line2 += "  "; 
        }
        for (let a = m; a >= 1; a--) {
            line2 += a + " ";
        }
        console.log(line2); 
    }
}

var n = Number(prompt('Enter a number'));
displayPattern(n); 
