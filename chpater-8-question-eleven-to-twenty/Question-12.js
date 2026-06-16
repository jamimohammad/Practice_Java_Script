// **8.12 (Financial application: compute tax) Rewrite Listing 3.5, ComputeTax.java,
// using arrays. For each filing status, there are six tax rates. Each rate is applied
// to a certain amount of taxable income. For example, from the taxable income of
// $400,000 for a single filer, $8,350 is taxed at 10%, (33,950 - 8,350) at 15%,
// 310 Chapter 8 Multidimensional Arrays
// (82,250 - 33,950) at 25%, (171,550 - 82,550) at 28%, (372,550 - 82,250) at
// 33%, and (400,000 - 372,950) at 36%. The six rates are the same for all filing
// statuses, which can be represented in the following array:
// double[] rates = {0.10, 0.15, 0.25, 0.28, 0.33, 0.35};
//  The brackets for each rate for all the filing statuses can be represented in a twodimensional array as follows:
// Enter the number of rows and columns of the array: 3 4
// Enter the array:
// 23.5 35 2 10
// 4.5 3 45 3.5
// 35 44 5.5 9.6
// The location of the largest element is at (1, 2)
// **8.14 (Explore matrix) Write a program that prompts the user to enter the length of a
// square matrix, randomly fills in 0s and 1s into the matrix, prints the matrix, and
// finds the rows, columns, and diagonals with all 0s or 1s. Here is a sample run of
// the program:
// int[][] brackets = {
//  {8350, 33950, 82250, 171550, 372950}, // Single filer
//  {16700, 67900, 137050, 20885, 372950}, // Married jointly
// // -or qualifying widow(er)
//  {8350, 33950, 68525, 104425, 186475}, // Married separately
//  {11950, 45500, 117450, 190200, 372950} // Head of household
// };
//  Suppose the taxable income is $400,000 for single filers. The tax can be computed as follows:
// tax = brackets[0][0] * rates[0] +
//  (brackets[0][1] – brackets[0][0]) * rates[1] +
//  (brackets[0][2] – brackets[0][1]) * rates[2] +
//  (brackets[0][3] – brackets[0][2]) * rates[3] +
//  (brackets[0][4] – brackets[0][3]) * rates[4] +
//  (400000 – brackets[0][4]) * rates[5]

let rates = [0.10, 0.15, 0.25, 0.28, 0.33, 0.35];

let brackets = [
  [8350, 33950, 82250, 171550, 372950], // Single 
  [16700, 67900, 137050, 208850, 372950], // Married jointly
  [8350, 33950, 68525, 104425, 186475], // Married separately
  [11950, 45500, 117450, 190200, 372950] // Head of household
];

let filingStatus = 0; 
let taxableIncome = 400000;

let tax = 0;

if (filingStatus < 0 || filingStatus > 3)
  
 {
  console.log("Invalid filing status");
} else {
    
  let bracket = brackets[filingStatus];

  if (taxableIncome <= bracket[0]) {
    tax = taxableIncome * rates[0];
  } else if (taxableIncome <= bracket[1]) {
    tax =
      bracket[0] * rates[0] +
      (taxableIncome - bracket[0]) * rates[1];
  } else if (taxableIncome <= bracket[2]) {
    tax =
      bracket[0] * rates[0] +
      (bracket[1] - bracket[0]) * rates[1] +
      (taxableIncome - bracket[1]) * rates[2];
  } else if (taxableIncome <= bracket[3]) {
    tax =
      bracket[0] * rates[0] +
      (bracket[1] - bracket[0]) * rates[1] +
      (bracket[2] - bracket[1]) * rates[2] +
      (taxableIncome - bracket[2]) * rates[3];
  } else if (taxableIncome <= bracket[4]) {
    tax =
      bracket[0] * rates[0] +
      (bracket[1] - bracket[0]) * rates[1] +
      (bracket[2] - bracket[1]) * rates[2] +
      (bracket[3] - bracket[2]) * rates[3] +
      (taxableIncome - bracket[3]) * rates[4];
  } else {
    tax =
      bracket[0] * rates[0] +
      (bracket[1] - bracket[0]) * rates[1] +
      (bracket[2] - bracket[1]) * rates[2] +
      (bracket[3] - bracket[2]) * rates[3] +
      (bracket[4] - bracket[3]) * rates[4] +
      (taxableIncome - bracket[4]) * rates[5];
  }

  console.log(`Tax is $${tax.toFixed(2)}`);
}
