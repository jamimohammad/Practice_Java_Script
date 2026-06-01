//2.5 (محاسبه انعام و مجموع هزینه)
// یک برنامه‌ی جاوااسکریپت بنویسید که زیرمجموع (subtotal) و درصد انعام (gratuity rate) را از کاربر بگیرد و مقدار انعام و جمع کل را محاسبه کند.

var check = Number(prompt('Enter a number'));
var test = Number(prompt('Enter a number'));

var both =  (check * test) / 100 ;

var all = check + both;

alert("Tip: " + both + " Total: " + all);



