// /3.34 (هندسه: نقطه روی قطعه‌خط؟)
// برنامه‌ای در جاوااسکریپت بنویسید که سه نقطه بگیرد و بررسی کند آیا نقطه سوم روی قطعه‌خط بین دو نقطه اول قرار دارد یا نه.

var x0 = Number(prompt('Enter x0'));
var y0 = Number(prompt('Enter y0'));

var x1 = Number(prompt('Enter x1'));
var y1 = Number(prompt('Enter y1'));

var x2 = Number(prompt('Enter x2'));
var y2 = Number(prompt('Enter y2'));

var position = (x1 - x0) * (y2 - y0) - (x2 - x0) * (y1 - y0);

if (
  position === 0 && 
  x2 >= Math.min(x0, x1) && x2 <= Math.max(x0, x1) &&
  y2 >= Math.min(y0, y1) && y2 <= Math.max(y0, y1)
) {
  console.log("on the line segment");
} else {
  console.log("not on the line segment");
}
