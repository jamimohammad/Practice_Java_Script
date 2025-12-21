// 2.16 (مساحت شش‌ضلعی)
// یک برنامه‌ی جاوااسکریپت بنویسید که طول ضلع شش‌ضلعی را از کاربر بگیرد و مساحت آن را محاسبه کند.

var slide1 = Number(prompt('enter a number'))
var slide2 = Number(prompt('enter a number'))
var slide3 = Number(prompt('enter a number'))

var all1 =  (slide1 + slide2 + slide3) / 2


 var all2 = Math.sqrt(all1 * (all1 - slide1) * (all1 - slide2) * (all1 - slide3))


alert(all2)
