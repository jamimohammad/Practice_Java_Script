//3.32 (هندسه: موقعیت نقطه نسبت به خط)
// برنامه‌ای در جاوااسکریپت بنویسید که سه نقطه (p0, p1, p2) بگیرد و مشخص کند p2 در سمت چپ خط، سمت راست یا روی خط p0→p1 قرار دارد.
var x0 = Number(prompt('Enter x0'))
var y0 = Number(prompt('Enter y0'))

var x1 = Number(prompt('Enter x1'))
var y1 = Number(prompt('Enter y1'))

var x2 = Number(prompt('Enter x2'))
var y2 = Number(prompt('Enter y2'))

var position = (x1 - x0) * (y2 - y0) - (x2 - x0) * (y1 - y0)

if (position > 0) {
  console.log('p2 is on the left ')
} else if (position < 0) {
  console.log('p2 is on the right ')
} else {
  console.log('p2 is on the same line')
}
