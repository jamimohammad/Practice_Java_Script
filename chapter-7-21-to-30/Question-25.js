// 7.25 (Algebra: solve quadratic equations) Write a method for solving a quadratic 
// equation using the following header:
// public static int solveQuadratic(double[] eqn, double[] roots)
// The coefficients of a quadratic equation ax2 + bx + c = 0 are passed to the 
// array eqn and the real roots are stored in roots. The method returns the num
// ber of real roots. See Programming Exercise 3.1 on how to solve a quadratic 
// equation.
// Write a program that prompts the user to enter values for a, b, and c and displays 
// the number of real roots and all real roots.

function solveQuadratic(eqn, roots) {
  var a = eqn[0];
  var b = eqn[1];
  var c = eqn[2];

  var discriminant = b**2 - 4*a*c;

  if (discriminant > 0) {
    roots[0] = (-b + Math.sqrt(discriminant)) / (2*a);
    roots[1] = (-b - Math.sqrt(discriminant)) / (2*a);
    return 2; 
  } else if (discriminant === 0) {
    roots[0] = -b / (2*a);
    return 1; 
  } else {
    return 0; 
  }
}

var a = Number(prompt("Enter a:"));
var b = Number(prompt("Enter b:"));
var c = Number(prompt("Enter c:"));

var eqn = [a, b, c];
var roots = [];

var numRoots = solveQuadratic(eqn, roots);

if (numRoots === 2) {
  console.log("The equation has two roots: " + roots[0] + " and " + roots[1]);
} else if (numRoots === 1) {
  console.log("The equation has one root: " + roots[0]);
} else {
  console.log("The equation has no real roots");
}