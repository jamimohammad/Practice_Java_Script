// (Conversion from miles to kilometers) Write a program that displays the follow
// ing table (note that 1 mile is 1.609 kilometers):
//  Miles       Kilometers
//  1           1.609

let count = 0;

for (let miles = 1; miles <= 199; miles++) {
    let km = miles * 1.609;
    console.log(miles + "     " + km);
    count++
}

console.log("total: " + count);
