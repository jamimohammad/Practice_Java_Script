// 3.28 (هندسه: دو مستطیل)
// برنامه‌ای در جاوااسکریپت بنویسید که مختصات مرکز، عرض و ارتفاع دو مستطیل را بگیرد و بررسی کند آیا مستطیل دوم داخل اولی است، با آن همپوشانی دارد یا هیچ‌کدام.
var x = Number(prompt('x enter the first rectangle'))
var y = Number(prompt('y enter the first rectangle'))
var weight = Number(prompt('w enter the first rectangle'))
var height = Number(prompt('h enter the first rectangle'))

var x1 = Number(prompt('x1 enter the first rectangle'))
var y1 = Number(prompt('y1 enter the first rectangle'))
var weight1 = Number(prompt('w1 enter the first rectangle'))
var height1 = Number(prompt('h1 enter the first rectangle'))

var left = x - weight / 2
var right = x + weight / 2
var bottom = y - height / 2
var top0 = y + height / 2


var left1 = x1 - weight1 / 2
var right1 = x1 + weight1 / 2
var bottom1 = y1 - height1 / 2
var top1 = y1 + height1 / 2

