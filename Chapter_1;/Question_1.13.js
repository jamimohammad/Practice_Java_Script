// //1.13 (جبر: حل معادله‌های 2 در 2)
// می‌توان از قانون کرامر (Cramer’s Rule) برای حل دستگاه معادلات خطی 2 در 2 استفاده کرد:
// ax + by = e
// cx + dy = f
// فرمول‌ها:
// x = (ed - bf) / (ad - bc)
// y = (af - ec) / (ad - bc)
// یک برنامه جاوااسکریپت بنویسید که دستگاه زیر را حل کند و مقدار x و y را نمایش دهد:
// 3.4x + 50.2y = 44.5
// 2.1x + 0.55y = 5.9

var a = Number(prompt('Enter a:'))
var b = Number(prompt('Enter b:'))
var c = Number(prompt('Enter c:'))
var d = Number(prompt('Enter d:'))
var e = Number(prompt('Enter e:'))
var f = Number(prompt('Enter f:'))

var denominator = (a * d) - (b * c)

if (denominator === 0) {
    alert("The equation has no solution.")
} else {
    var x = (e * d - b * f) / denominator
    var y = (a * f - e * c) / denominator

    alert("x = " + x + ", y = " + y)
}
