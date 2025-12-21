// 2.20 (محاسبه بهره ماهانه)
// یک برنامه‌ی جاوااسکریپت بنویسید که موجودی حساب (balance) و نرخ بهره سالانه را دریافت کند و بهره ماهانه را محاسبه کند.

var take = Number(prompt('enter a number'))
var year = Number(prompt('enter a number'))
var all1 = year / 1200
var mount = (all1 / 100) * take

alert(mount)
