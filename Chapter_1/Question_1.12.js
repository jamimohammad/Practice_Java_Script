//فرض کنید یک دونده 24 مایل را در 1 ساعت، 40 دقیقه و 35 ثانیه می‌دود. برنامه‌ای در JavaScript بنویسید که سرعت متوسط را به کیلومتر در ساعت محاسبه و نمایش دهد.
//نکته: 1 مایل = 1.6 کیلومتر
var miles = 24
var kilometers = 1.6
var both1 = miles * kilometers
var hour = 1
var minutes = 40
var second = 35
var both3 = minutes / 60 
var both2 = second / 3600 + both3 + 1
var all = 38.4 / both2
alert(all)


