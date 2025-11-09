//  5.6 (Conversion from miles to kilometers) Write a program that displays the follow
// ing two tables side by side:

console.log("Miles   Kilometers  |  Kilometers   Miles");

for (let n = 1; n <= 10; n++) {
  let km = n * 1.609;   
  let miles = n * 0.621; 
  console.log(n + "   " + km + "   |   " + n + "   " + miles);
}
