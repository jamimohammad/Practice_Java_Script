// 2.9 (فیزیک: شتاب متوسط)
// یک برنامه‌ی جاوااسکریپت بنویسید که سرعت اولیه (v0)، سرعت نهایی (v1) و بازه زمانی (t) را از کاربر بگیرد و شتاب متوسط را محاسبه کند.
// فرمول: a = (v1 – v0) / t

var initialvelocity =Number(prompt('write a number'))
var finalvelocity =Number(prompt('write a number'))
var time = Number(prompt("write a time"))
var both = (finalvelocity - initialvelocity) / time
alert(both)