// (تعداد روزهای یک ماه را پیدا کنید) برنامه‌ای بنویسید که از کاربر بخواهد ماه و سال را وارد کند و تعداد روزهای ماه را نمایش دهد. برای مثال، اگر کاربر ماه ۲ و سال ۲۰۱۲ را وارد کرده باشد، برنامه باید نشان دهد که فوریه ۲۰۱۲، ۲۹ روز داشته است. اگر کاربر ماه ۳ و سال ۲۰۱۵ را وارد کرده باشد، برنامه باید نشان دهد که مارس ۲۰۱۵، ۳۱ روز داشته است.

var years = Number(prompt('Please Write year'))
var mounth = Number(prompt('Please Write mounth'))

if (mounth == 1){
    console.log(years + ' ' + 'January is 31 days')
}else if (mounth == 2){
    console.log(years + ' ' +'February is 28 days')
}else if (mounth == 3){
    console.log(years + ' ' +'March is 31 days')
}else if (mounth == 4){
    console.log(years + ' ' +'April is 30 days')
}else if (mounth == 5){
    console.log(years + ' ' +'May is 31 days')
}else if (mounth == 6){
    console.log(years + ' ' +'june is 30 days')
}else if (mounth == 7){
    console.log(years + ' ' +'july is 31 days')
}else if (mounth == 8){
    console.log(years + ' ' +'August is 31 days')
}else if (mounth == 9){
    console.log(years + ' ' +'September is 30 days')
}else if (mounth == 10){
    console.log(years + ' ' +'October is 31 days')
}else if (mounth == 11){
    console.log(years + ' ' +'November is 30 days')
}else if (mounth == 12){
    console.log(years + ' ' +'December is 31 days')
}else{
    alert('the number looks bad')
}