// 3.3 (Algebra: حل دستگاه معادلات خطی 2×2)
// برنامه‌ای در جاوااسکریپت بنویسید که مقادیر a, b, c, d, e, f را از کاربر بگیرد و دستگاه معادلات خطی 2×2 را با قانون کرامر حل کند. اگر ad - bc = 0 بود پیام بدهد که "The equation has no solution".
var usera = Number(prompt('enter a number'))
var userb = Number(prompt('enter a number'))
var userc = Number(prompt('enter a number'))
var userd = Number(prompt('enter a number'))
var usere = Number(prompt('enter a number'))
var userf = Number(prompt('enter a number'))

var plus = (usera * userd) - (userb * userc)

if (plus === 0){
    alert('the equation has no solution')
}else  {
    var x = (usere * userd - userb * userf) / plus;
    var y = (usera * userf - usere * userc) / plus;
    alert('x is ' + x + ' and y is ' + y);
}

