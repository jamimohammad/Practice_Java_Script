// 3.23 (هندسه: نقطه در مستطیل؟)
// برنامه‌ای در جاوااسکریپت بنویسید که مختصات یک نقطه را بگیرد و بررسی کند آیا داخل مستطیل با مرکز (0,0)، عرض 10 و ارتفاع 5 قرار دارد یا نه.
var x = Number(prompt('enter a number'))
var y = Number(prompt('enter a number'))
var width = 10
var height = 5
var division = width / 2

var division1 = height / 2

if (x <= division && y <= division1){
    console.log('داخل است')
}else{
    console.log ('بیرون است')
}
// if (Math.abs(x) <= division && Math.abs(y) <= division1){
//     console.log('داخل است')
// }else{
//     console.log('بیرون است')
// }
