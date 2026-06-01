// 3.1 (Algebra: حل معادله درجه دوم)
// برنامه‌ای در جاوااسکریپت بنویسید که از کاربر سه مقدار a, b, c بگیرد و ریشه‌های معادله درجه دوم ax² + bx + c = 0 را محاسبه و نمایش دهد. اگر دترمینان مثبت باشد دو ریشه واقعی نمایش داده شود، اگر صفر باشد یک ریشه، و اگر منفی باشد پیغام بدهد "The equation has no real roots".

var usera = Number(prompt("Enter a:"));
var userb = Number(prompt("Enter b:"));
var userc = Number(prompt("Enter c:"));

var all = userb**2 - 4*usera*userc;

  var r1 = (-userb + Math.sqrt(all)) / (2*usera);
  var r2 = (-userb - Math.sqrt(all)) / (2*usera);
   var r = -userb / (2*usera);

if (all > 0) {
  console.log("the equation has two roots: " + r1 + " and " + r2);
} else if (all === 0) {
  console.log("the equation has one root: " + r);
} else {
  console.log('the equation has no root');
}

