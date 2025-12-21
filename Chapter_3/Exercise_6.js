// 3.6 (برنامه سلامت: BMI)
// برنامه‌ای در جاوااسکریپت بنویسید که وزن (پوند) و قد (فوت و اینچ) کاربر را بگیرد، BMI او را محاسبه و نتیجه (کم‌وزن، نرمال، اضافه‌وزن...) را نمایش دهد.

var weightPounds = Number(prompt('enter a number'))
var feet = Number(prompt('enter a number'))
var change = weightPounds * 0.45359237
var change1 = feet * 12 
var change2 = change1 * 0.0254
var tavan = change / (change2 ** 2)
alert(tavan)




