// 2.10 (علم: محاسبه انرژی گرمایی آب)
// یک برنامه‌ی جاوااسکریپت بنویسید که وزن آب (کیلوگرم)، دمای اولیه و نهایی را دریافت کند و انرژی لازم برای گرم کردن آب را محاسبه کند.
// فرمول: Q = M * (finalTemperature – initialTemperature) * 4184

var water = Number(prompt('Enter a Number'))
var initial =Number(prompt('enter temperture'))
var final =Number(prompt('enter temperture'))

var energy = water * (final - initial) * 4184;
alert(energy)