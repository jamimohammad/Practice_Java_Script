//برنامه‌ای در JavaScript بنویسید که جمعیت ایالات متحده را برای پنج سال آینده پیش‌بینی کند، با فرضیات:
//یک تولد هر 7 ثانیه
//یک مرگ هر 13 ثانیه
//یک مهاجر جدید هر 45 ثانیه
//جمعیت فعلی = 312,032,486
//هر سال = 365 روز

var year = Number(prompt('Enter a number'))
var papulation = 312032486 
var peryear = 365 * 24 * 60 * 60
var birth = peryear / 7
var death =peryear / 13
var immigrant = peryear / 45
var all = papulation + (birth - death + immigrant)* year
alert(all)