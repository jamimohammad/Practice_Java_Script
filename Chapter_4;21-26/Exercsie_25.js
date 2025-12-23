// (Financial application: monetary units) Rewrite Listing 2.10, ComputeChange.
//  java, to fix the possible loss of accuracy when converting a float value to an int
//  value. Read the input as a string such as "11.56". Your program should extract 
// the dollar amount before the decimal point and the cents after the decimal amount 
// using the indexOf andsubstring methods.

function all(){

let money = prompt("Enter an amount");

let dot = money.indexOf(".");

let dollar = Number(money.substring(0, dot));
let cent = Number(money.substring(dot + 1));

if (money.substring(dot + 1).length === 1) {
  cent *= 10;
}

let left = cent;

let q = Math.floor(left / 25);
left = left % 25;

let d = Math.floor(left / 10);
left = left % 10;

let n = Math.floor(left / 5);
left = left % 5;

let p = left;

alert(money+ ' \n' + dollar + " dollars\n" +q + " quarters\n" +d + " dimes\n" +n + " nickels\n" +p + " pennies");
}
all()