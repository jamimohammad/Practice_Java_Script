// 2.11 (پیش‌بینی جمعیت)
// یک برنامه‌ی جاوااسکریپت بنویسید که از کاربر تعداد سال‌ها را بگیرد و جمعیت بعد از آن سال‌ها را محاسبه و نمایش دهد.

var year = Number(prompt('Enter a number'))
var papulation = 312032486 
var peryear = 365 * 24 * 60 * 60
var birth = peryear / 7
var death =peryear / 13
var immigrant = peryear / 45
var all = papulation + (birth - death + immigrant)* year
alert(all)