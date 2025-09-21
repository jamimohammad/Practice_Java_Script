//برنامه باید از کاربر درخواست کند سرعت شروع (v0) به متر بر ثانیه، سرعت پایان (v1) به متر بر ثانیه و مدت زمان (t) به ثانیه را وارد کند.
//سپس شتاب متوسط را نمایش دهد.
var initialvelocity = prompt('write a number')
var finalvelocity = prompt('write a number')
var time = prompt("write a time")
var both = (finalvelocity - initialvelocity) / time
alert(both)
