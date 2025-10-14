//3.29 (هندسه: دو دایره)
// برنامه‌ای در جاوااسکریپت بنویسید که مرکز و شعاع دو دایره را بگیرد و بررسی کند آیا دایره دوم داخل اولی است، با آن همپوشانی دارد یا جداست.


var x1 = Number(prompt("Enter circle1 x"));
var y1 = Number(prompt("Enter circle1 y"));
var r1 = Number(prompt("Enter radius1 "));


var x2 = Number(prompt("Enter circle2 x"));
var y2 = Number(prompt("Enter circle2 y"));
var r2 = Number(prompt("Enter radius2 "));

var d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

console.log("Distance between centers: " + d);

if (d <= Math.abs(r1 - r2)) {
    console.log("circle2 is inside circle1");
} else if (d <= r1 + r2) {
    console.log("circle2 overlaps circle1");
} else {
    console.log("circle2 does not overlap circle1");
}
