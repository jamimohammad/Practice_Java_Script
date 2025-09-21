//2.6 (جمع ارقام یک عدد صحیح)
// یک برنامه‌ی جاوااسکریپت بنویسید که عددی بین 0 و 1000 دریافت کرده و مجموع ارقام آن را محاسبه کند.

var test = Number(prompt('Enter a number'))

var baghi = test % 10
var tahgsim = Math.floor (test / 10)
var navad = tahgsim % 10
var thag = Math.floor(tahgsim / 10)
var all1 = thag % 10
alert(all1 + navad + baghi)
          
