//2.15 (محاسبه فاصله بین دو نقطه)
// یک برنامه‌ی جاوااسکریپت بنویسید که مختصات دو نقطه (x1, y1) و (x2, y2) را بگیرد و فاصله بین آن‌ها را نمایش دهد.

var x1 = Number(prompt('enter a number'))
var y1 = Number(prompt('enter a number'))
var x2 = Number(prompt('enter a number'))
var y2 = Number(prompt('enter a number'))

var distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
console.log(distance);
