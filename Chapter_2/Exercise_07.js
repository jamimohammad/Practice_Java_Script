//2.7 (تبدیل دقیقه به سال و روز)
// یک برنامه‌ی جاوااسکریپت بنویسید که از کاربر تعداد دقیقه دریافت کند و آن را به تعداد سال‌ها و روزها نمایش دهد. فرض کنید هر سال 365 روز است.

var change = Number(prompt('enter a number'))
var zarb = 365 * 24 * 60
var all1 = Math.floor (change / zarb)
var all2 = change % zarb
var all3 = Math.floor(all2 / 1440)

alert(all3)



