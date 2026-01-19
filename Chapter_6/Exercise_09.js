// 6.9 (Conversions between feet and meters) Write a class that contains the following 
// two methods:
// /** Convert from feet to meters */
// public static double footToMeter(double foot)
// /** Convert from meters to feet */
// public static double meterToFoot(double meter)
// The formula for the conversion is:
// meter = 0.305 * foot
// foot = 3.279 * meter
// Write a test program that invokes these methods to display the following tables:
// Feet Meters | Meters Feet
//  1.0 0.305 | 20.0 65.574
//  2.0 0.610 | 25.0 81.967
//  9.0 2.745 | 60.0 196.721
// 10.0 3.050 | 65.0 213.115

function foottometer(foot) {
    return 0.305 * foot
}

function metertofoot(meters) {
    return 3.279 * meters
}
console.log("Feet      Meters|   Meters      Feet");

for (let c = 1, fValue = 20; c <= 10 && fValue <= 65; c++, fValue += 5){

    let f = foottometer(c);
    let cFromF = metertofoot(fValue);

    console.log( c.toFixed(1).padStart(3),f.toFixed(3).padStart(11),"|",fValue.toFixed(1).padStart(7),cFromF.toFixed(3).padStart(11));
}