// // 3.21 (روز هفته – الگوریتم Zeller)
// // برنامه‌ای در جاوااسکریپت بنویسید که سال، ماه و روز را از کاربر بگیرد و نام روز هفته را محاسبه و نمایش دهد.

var year = Number(prompt('Enter year'));
var month = Number(prompt('Enter month '));
var q = Number(prompt('Enter day of month'));

var k = year % 100;            
var j = Math.floor(year / 100);  

var h = (q + Math.floor((26 * (month + 1)) / 10) + k + Math.floor(k / 4) + Math.floor(j / 4) + 5 * j) % 7;

var day = "";
if (h == 0) day = "Saturday";
else if (h == 1) day = "Sunday";
else if (h == 2) day = "Monday";
else if (h == 3) day = "Tuesday";
else if (h == 4) day = "Wednesday";
else if (h == 5) day = "Thursday";
else if (h == 6) day = "Friday";

console.log("Day of the week is " + day);



