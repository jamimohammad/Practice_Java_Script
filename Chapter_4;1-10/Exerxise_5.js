// (Random points on a circle) Write a program that generates three random points 
// on a circle centered at (0, 0) with radius 40 and display three angles in a triangle 
// formed by these three points, as shown in Figure 4.7a. (Hint: Generate a random 
// angle a in radians between 0 and 2p, as shown in Figure 4.7b and the point deter
// mined by this angle is (r*cos(a), r*sin(a)).)

function one(r) {
    var random_1 = Math.random() * 2 * Math.PI;
    var random_2 = Math.random() * 2 * Math.PI;
    var random_3 = Math.random() * 2 * Math.PI;

    var x1 = r * Math.cos(random_1);
    var y1 = r * Math.sin(random_1);

    var x2 = r * Math.cos(random_2);
    var y2 = r * Math.sin(random_2);

    var x3 = r * Math.cos(random_3);
    var y3 = r * Math.sin(random_3);

    var a = Math.sqrt((x3 - x2) ** 2 + (y3 - y2) ** 2);
    var b = Math.sqrt((x3 - x1) ** 2 + (y3 - y1) ** 2);
    var c = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

return a + ", " + b + ", " + c;

}

var result = one (40);
console.log(result);
