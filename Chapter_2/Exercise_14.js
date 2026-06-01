// 2.14 (محاسبه BMI)
// یک برنامه‌ی جاوااسکریپت بنویسید که وزن (پوند) و قد (اینچ) از کاربر بگیرد و شاخص توده بدنی (BMI) را محاسبه و نمایش دهد.

var weight = Number(prompt('enter a number'))
var height = Number(prompt('enter a number'))
var zarb = weight * 0.45359237
var change = height * 0.0254

var tavan = zarb / (change ** 2)

alert(tavan)