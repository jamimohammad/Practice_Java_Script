// //3.20 (دمای باد)
// برنامه‌ای در جاوااسکریپت بنویسید که دما و سرعت باد را بگیرد و دمای موثر (wind chill) را محاسبه کند، البته اگر ورودی‌ها معتبر باشند.

var Temperature = Number(prompt('please enter a number'));
var check = Number(prompt('please enter a number'));

var multiplection = Temperature * 0.6215 + 35.74;
var tavan = check ** 0.16;
var all = multiplection - 35.75 * tavan + 0.4275 * Temperature * tavan;

alert(all);

