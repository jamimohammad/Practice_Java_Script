// 3.25 (هندسه: نقطه تقاطع دو خط) برنامه‌ای در جاوااسکریپت بنویسید که مختصات چهار نقطه (دو خط) را بگیرد و نقطه تقاطع را محاسبه کند، یا مشخص کند که خطوط موازی‌اند.
var x1 = Number(prompt('enter a number'))
var y1 = Number(prompt('enter a number'))
var x2 = Number(prompt('enter a number'))
var y2 = Number(prompt('enter a number'))
var x3 = Number(prompt('enter a number'))
var y3 = Number(prompt('enter a number'))
var x4 = Number(prompt('enter a number'))
var y4 = Number(prompt('enter a number'))

var negative = (y1 - y2)           
var negative1 = - (x1 - x2)      
var all = (y1 - y2) * x1 - (x1 - x2) * y1  

var second = (y3 - y4)
var second1  = - (x3 - x4)
var all1 = (y3 - y4) * x3 - (x3 - x4) * y3

var all2 = (negative * second1) - (second * negative1)

console.log(all2)
var x = (all * second1 - all1 * negative1) / all2
var y = (negative * all1 - second * all) / all2
if (all2 == 0) {
  console.log('The two lines are parallel')
}
else {
  console.log('(' + x + ', ' + y + ')')
}

