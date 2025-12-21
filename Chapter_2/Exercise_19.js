// 2.19 (محاسبه مساحت مثلث با مختصات)
// یک برنامه‌ی جاوااسکریپت بنویسید که مختصات سه نقطه از مثلث را از کاربر بگیرد و مساحت آن را محاسبه کند.

var x1 = Number(prompt('enter a number'))
var y1 = Number(prompt('enter a number'))
var x2 = Number(prompt('enter a number'))
var y2 = Number(prompt('enter a number'))
var x3 = Number(prompt('enter a number'))
var y3 = Number(prompt('enter a number'))
 
var side1 =Math.sqrt(((x1 - x2)**2) + ((y1 - y2) ** 2))

var side2 =Math.sqrt(((x2 - x3)**2) + ((y2 - y3)**2))

var side3 =Math.sqrt(((x1 - x3)**2) + ((y1 - y3)** 2))

var all = ((side1 + side2 + side3) / 2)

var all1 =Math.sqrt(all * (all - side1) * (all - side2) * (all - side3))

console.log(all1)

