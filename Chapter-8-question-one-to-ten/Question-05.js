// 8.5(Algebra: add two matrices) Write a method to add two matrices. The header of 
// the method is as follows:
// public static double[][] addMatrix(double[][] a, double[][] b) 
//   In order to be added, the two matrices must have the same dimensions and the 
// same or compatible types of elements. Let c be the resulting matrix. Each ele
// mentcij is aij +bij. For example, for two 3*3 matrices a and b,c is
// £
// a11 a12 a13
// a21 a22 a23
// a31 a32 a33
// ≥+£
// b11 b12 b13
// b21 b22 b23
// b31 b32 b33
// ≥=£
// a11+b11 a12+b12 a13+b13
// a21+b21 a22+b22 a23+b23
// a31+b31 a32+b32 a33+b33
// ≥
//   Write a test program that prompts the user to enter two 3*3 matrices and 
// displays their sum. Here is a sample run: 
// Enter matrix1: 1 2 3 4 5 6 7 8 9
// Enter matrix2: 0 2 4 1 4.5 2.2 1.1 4.3 5.2
// The matrices are added as follows 
//  1.0 2.0 3.0      0.0 2.0 4.0      1.0 4.0 7.0
//  4.0 5.0 6.0  +   1.0 4.5 2.2  =   5.0 9.5 8.2
//  7.0 8.0 9.0      1.1 4.3 5.2      8.1 12.3 14.2

function addmatrix(a, b) {
  let c = [];

  for (let i = 0; i < a.length; i++) {
    c[i] = [];
    for (let j = 0; j < a[i].length; j++) {
      c[i][j] = a[i][j] + b[i][j];
    }
  }

  return c;
}

let matrix1 = [];
let matrix2 = [];

for (let i = 0; i < 3; i++) {
  matrix1[i] = prompt(`enter row ${i + 1} (3 numbers separated by space)`).split(" ").map(Number);
}

for (let i = 0; i < 3; i++) {
  matrix2[i] = prompt(`enter row ${i + 1} (3 numbers separated by space)`).split(" ").map(Number);
    
}

let result = addmatrix(matrix1, matrix2);

console.log("The matrices are added as follows:");

for (let i = 0; i < 3; i++) {
  let row1 = matrix1[i].join(" ");
  let row2 = matrix2[i].join(" ");
  let row3 = result[i].join(" ");

  if (i === 1) {
    console.log(row1 + "  +  " + row2 + "  =  " + row3);
  } else {
    console.log(row1 + "     " + row2 + "     " + row3);
  }
}

