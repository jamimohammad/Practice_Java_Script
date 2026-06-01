// **8.6 (Algebra: multiply two matrices) Write a method to multiply two matrices. The 
// header of the method is:
// publicstatic double[][]
//     multiplyMatrix(double[][] a, double[][] b)
//   To multiply matrix a by matrix b, the number of columns in a must be the same as 
// the number of rows in b, and the two matrices must have elements of the same or 
// compatible types. Let c be the result of the multiplication. Assume the column size 
// of matrix a is n. Each element cij is ai1*b1j +ai2*b2j +c+ain*bnj.
// For example, for two 3*3 matrices a and b,c is
// £
// a11 a12 a13
// a21 a22 a23
// a31 a32 a33
// ≥*£
// b11 b12 b13
// b21 b22 b23
// b31 b32 b33
// ≥=£
// c11 c12 c13
// c21 c22 c23
// c31 c32 c33
// ≥
// wherecij =ai1*b1j +ai2*b2j +ai3*b3j.
//   Write a test program that prompts the user to enter two 3*3 matrices and dis
// plays their product. Here is a sample run:
// Enter matrix1: 1 2 3 4 5 6 7 8 9
// Enter matrix2: 0 2 4 1 4.5 2.2 1.1 4.3 5.2
// The multiplication of the matrices is 
//  1 2 3      0 2.0 4.0      5.3 23.9 24
//  4 5 6   *  1 4.5 2.2  =   11.6 56.3 58.2
//  7 8 9      1.1 4.3 5.2    17.9 88.7 92.4

function multiplytwomatrices(a, b) {
  let c = [];

  for (let i = 0; i < a.length; i++) {
    c[i] = [];
    for (let j = 0; j < b[0].length; j++) {

      let sum = 0; 

      for (let k = 0; k < a[0].length; k++) {
        sum += a[i][k] * b[k][j];
      }

      c[i][j] = sum;
    }
  }

  return c;
}

let matrix1 = [];
let matrix2 = [];

for (let i = 0; i < 3; i++) {
  matrix1[i] = prompt(`enter row ${i + 1} (3 numbers separated by space):`).split(" ").map(Number);
    
}

for (let i = 0; i < 3; i++) {
  matrix2[i] = prompt(`enter row ${i + 1} (3 numbers separated by space):`).split(" ").map(Number);
   
}

let result = multiplytwomatrices(matrix1, matrix2);

console.log("The multiplication of the matrices is:");

for (let i = 0; i < 3; i++) {
  let row1 = matrix1[i].join(" ");
  let row2 = matrix2[i].join(" ");
  let row3 = result[i].join(" ");

  if (i === 1) {
    console.log(row1 + "  *  " + row2 + "  =  " + row3);
  } else {
    console.log(row1 + "     " + row2 + "     " + row3);
  }
}