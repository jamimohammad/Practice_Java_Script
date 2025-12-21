//3.10 (بازی: جمع اعداد)
// برنامه‌ای در جاوااسکریپت بنویسید که دو عدد تصادفی کمتر از 100 تولید کند و یک سؤال جمع به کاربر نمایش دهد.

var a =  Math.floor(Math.random () * 100)
 var b = Math.floor(Math.random () * 100)

 alert('plesae guess the answer')
alert(a)
alert(b)
var answer = Number(prompt(' please write the sum'))

if (answer == a + b ){
alert('corect')
}else{
    alert('incorect')
}