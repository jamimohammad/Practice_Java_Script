//5.5 (Conversion from kilograms to pounds and pounds to kilograms) Write a program
//  that displays the following two tables side by side:

let count = 0;

console.log("Kilograms  Pounds  |  Pounds  Kilograms");

for (let n = 1; n <= 199; n++) {
    let pound = n * 2.2;       
    let kilogram = n * 0.4536; 

    console.log(n + "   " + pound + "   |   " + n + "   " + kilogram);
    count++;
}

console.log("total: " + count);
