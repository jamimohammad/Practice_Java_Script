// (Display numbers in a pyramid pattern) Write a nested for loop that prints the 
// following output:
//                             1
//                         1   2   1
//                     1   2   4   2   1
//                 1   2   4   8   4   2   1
//             1   2   4   8  16   8   4   2   1
//         1   2   4   8  16  32  16   8   4   2   1
//     1   2   4   8  16  32  64  32  16   8   4   2   1
//  1   2   4   8  16  32  64 128  64  32  16   8   4   2   1

let n = Number(prompt('Enter a number from 1 to 15'));

for (let i = 1; i <= n; i++) {
    let line = "";

    for (let s = 0; s < n - i; s++) {
        line += "  ";
    }

    let num = 1;
    for (let j = 1; j <= i; j++) {
        line += num + " ";
        num *= 2;
    }

      num /= 2
    for (let j = 2; j <= i; j++) {
        num /= 2
        line += num + " ";
    }
    console.log(line);
}
