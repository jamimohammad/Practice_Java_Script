//3.27 (هندسه: نقطه در مثلث راست‌گوشه؟) برنامه‌ای در جاوااسکریپت بنویسید که مختصات یک نقطه را بگیرد و بررسی کند آیا در مثلثی که رأس‌هایش (0,0)، (200,0) و (0,100) هستند قرار دارد یا نه
var x = Number(prompt('enter a number'))
var y = Number(prompt('enter a number'))

if (x >= 0 && y >= 0 && y <= (-0.5 * x + 100)) {
    console.log("The point is in the triangle");
} else {
    console.log("The point is not in the triangle");
}
