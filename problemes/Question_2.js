//2.13 (کاربرد مالی: ارزش مرکب پس‌انداز)
// یک برنامه JavaScript بنویسید که از کاربر مبلغ پس‌انداز ماهیانه را بگیرد، سپس ارزش حساب پس از شش ماه را محاسبه و نمایش دهد.

var take = Number(prompt('enter a number'))
var five = 5 / take
var division = five / 12

var two = (division + 1) * 100

var three = (division + 1) * (two + 100)
var four = (division + 1)* (three + 100)
var five = (division + 1)* (four + 100)
var six = (division + 1)* (five + 100)
var six = (division + 1)* (six + 100)
alert(six)