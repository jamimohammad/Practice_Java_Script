// 3.22 (هندسه: نقطه در دایره؟)
// برنامه‌ای در جاوااسکریپت بنویسید که مختصات یک نقطه را بگیرد و بررسی کند آیا داخل دایره با مرکز (0,0) و شعاع 10 قرار دارد یا نه.

var x = Number(prompt('enter a number'))
var y = Number(prompt('enter a number'))

var tavan = Math.sqrt((x ** 2) + (y ** 2))

if (tavan >= 10){
    alert('نقطه بیرون از دایره است ')
}else {
    alert('نقطه داخل  دایره است ')
}
console.log(Math.floor(tavan))