// //3.2 (بازی: جمع سه عدد)
// برنامه‌ای در جاوااسکریپت بنویسید که سه عدد تک‌رقمی تصادفی تولید کند و از کاربر بخواهد حاصل جمع آن‌ها را وارد کند. سپس نتیجه را بررسی و نمایش دهد.

var a =  Math.floor(Math.random () * 10)
 var b = Math.floor(Math.random () * 10)
 var c = Math.floor(Math.random () * 10)

alert(a)
alert(b)
alert(c)

var answer = Number(prompt(' please write the sum'))
if (answer == a + b + c ){
alert('corect')
}else{
    alert('incorect')
}



