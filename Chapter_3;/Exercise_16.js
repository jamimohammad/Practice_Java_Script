// //3.16 (نقطه تصادفی)
// برنامه‌ای در جاوااسکریپت بنویسید که یک مختصات تصادفی در مستطیل با مرکز (0,0) و ابعاد 100×200 تولید و نمایش دهد.
var x1 = Number(prompt('enter a number'))
var x2 = Number(prompt('enter a number'))
var y1 = Number(prompt('enter a number'))
var y2 = Number(prompt('enter a number'))
if (x1 >= -50 && x1 <= 50 && x2 >= -50 && x2 <= 50 && y1 >= -100 && y1 <= 100 && y2 >= -100 && y2 <= 100){
  alert(x1 + x2 + y1 + y2);
} else {
  alert('bad');
}




 