//2.17 (Science: wind-chill temperature)
// Write a JavaScript program that prompts the user to enter the temperature in Fahrenheit (between -58°F and 41°F) and the wind speed (>= 2), then computes the wind-chill index using:
// twc = 35.74 + 0.6215*ta - 35.75*v^0.16 + 0.4275*ta*v^0.16
// 2.17 (محاسبه دمای بادگیر - Wind Chill)
// یک برنامه‌ی جاوااسکریپت بنویسید که دمای هوا (بین -58°F و 41°F) و سرعت باد (بزرگ‌تر یا مساوی 2) را از کاربر بگیرد و شاخص دمای بادگیر را نمایش دهد.
 
var ta = Number(prompt('Enter temperature in Fahrenheit'));
var v = Number(prompt('Enter wind speed in mph'));         

var part1 = 35.74;                   
var part2 = 0.6215 * ta;              
var part3 = -35.75 * (v ** 0.16);      
var part4 = 0.4275 * ta * (v ** 0.16);

var all = part1 + part2 + part3 + part4;

alert(all);






