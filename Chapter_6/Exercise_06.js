// //  *6.6 (Display patterns) Write a method to display a pattern as follows:
// //               1
// //             2 1
// //           3 2 1
// // ...
// // n n-1 ... 3 2 1
// // The method header is
// // public static void displayPattern(int n)

function displayPattern(num) {
    for (let m = 1; m <= num; m++) {
        let line2 = "";

        for (let s = 0; s < num - m; s++) {
            line2 += "  "; 
        }
        for (let a = m; a >= 1; a--) {
            line2 += a + " ";
        }
        console.log(line2); 
    }
}
var num = Number(prompt('Enter a number'));
displayPattern(num); 
