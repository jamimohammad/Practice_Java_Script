// // // *6.19 (The MyTriangle class) Create a class named MyTriangle that contains the 
// // // following two methods:
// // // /** Return true if the sum of any two sides is 
// // //  *  greater than the third side. */
// // // public static boolean isValid(
// // // double side1, double side2, double side3)
// // // Programming Exercises  239
// // // /** Return the area of the triangle. */ 
// // // public static double area(
// // // double side1, double side2, double side3)
// // // Write a test program that reads three sides for a triangle and computes the area if 
// // // the input is valid. Otherwise, it displays that the input is invalid. The formula for 
// // // computing the area of a triangle is given in Programming Exercise 2.19.

function isValid(side1, side2, side3) {
  return (
    side1 + side2 > side3 &&
    side1 + side3 > side2 &&
    side2 + side3 > side1
  );
}

function area(side1, side2, side3) {
  var s = (side1 + side2 + side3) / 2;
  return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
}

var side1 = Number(prompt('enter side 1'));
var side2 = Number(prompt('enter side 2'));
var side3 = Number(prompt('enter side 3'));

if (isValid(side1, side2, side3)) {
  console.log("Area:", area(side1, side2, side3));
} else {
  console.log("Invalid input");
}
