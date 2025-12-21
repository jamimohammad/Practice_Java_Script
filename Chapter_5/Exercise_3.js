// (Conversion from miles to kilometers) Write a program that displays the follow
// ing table (note that 1 mile is 1.609 kilometers):
//  Miles       Kilometers
//  1           1.609

let count = 0;

for (let kg = 1; kg <= 199; kg++) {
    let pound = kg * 2.2;
    console.log(kg + "     " + pound);
    count++
}

console.log("total: " + count);
