//*8.1(Sum elements column by column) Write a method that returns the sum of all the 
// elements in a specified column in a matrix using the following header:
// public static double sumColumn(double[][] m, int columnIndex)
// Write a test program that reads a 3-by-4 matrix and displays the sum of each 
// column. Here is a sample run:
// Enter a 3-by-4 matrix row by row: 
// 1.5 2 3 4
// 5.5 6 7 8
// 9.5 1 3 1
// Sum of the elements at column 0 is 16.5
// Sum of the elements at column 1 is 9.0
// Sum of the elements at column 2 is 13.0
// Sum of the elements at column 3 is 13.0

let matrix = [
  [1.5, 2, 3, 4],
  [5.5, 6, 7, 8],
  [9.5, 1, 3, 1]
];

let sum0 = 0;
for (let i = 0; i < 3; i++) {
  sum0 += matrix[i][0];
}
console.log("Sum of column 0 is " + sum0);

let sum1 = 0;
for (let i = 0; i < 3; i++) {
  sum1 += matrix[i][1];
}
console.log("Sum of column 1 is " + sum1);

let sum2 = 0;
for (let i = 0; i < 3; i++) {
  sum2 += matrix[i][2];
}
console.log("Sum of column 2 is " + sum2);

let sum3 = 0;
for (let i = 0; i < 3; i++) {
  sum3 += matrix[i][3];
}
console.log("Sum of column 3 is " + sum3);
