//3.13 (کاربرد مالی: محاسبه مالیات)
// برنامه‌ای در جاوااسکریپت بنویسید که نرخ مالیات را برای وضعیت‌های مختلف (single, married …) محاسبه کند.

var user = Number(prompt('0 single'+'1 for married filing jointly or qualified widow(er),'+', 2 for married filing separately,'+'3 for head of household.'))
var income = Number(prompt('write your salary'))

// 0 for single

if (user == 0 && income <= 8350){
    console.log((income * 0.10))
}else if (user == 0 && income >= 8350 && income <= 33950){
    console.log((income * 0.15))
}else if (user == 0 && income >= 33951 && income <= 82250){
    console.log((income * 0.25))
}else if (user == 0 && income >= 82251 && income <= 171550){
    console.log((income * 0.28))
}else if (user == 0 && income >= 171551 && income <= 372950){
    console.log((income * 0.33))
}else if (user == 0 && income >= 372951){
    console.log((income * 0.35))
}

//1 for married filing jointly or qualified widow(er)

else if (user == 1 && income <= 16,700){
    console.log((income * 0.10))
}else if (user == 1 && income >= 16,701 && income <= 67,900){
    console.log((income * 0.15))
}else if (user == 1 && income >= 67,901  && income <= 137050){
    console.log((income * 0.25))
}else if (user == 1 && income >= 137051 && income <= 208,850){
    console.log((income * 0.28))
}else if (user == 1 && income >= 208,851 && income <= 372,950){
    console.log((income * 0.33))
}else if (user == 1 && income >= 372,951){
    console.log((income * 0.35))
}

// 2 for married filing separately,

else if (user == 2 && income <= 8350){
    console.log((income * 0.10))
}else if (user == 2 && income >= 8351 && income <= 33950){
    console.log((income * 0.15))
}else if (user == 2 && income >= 33951 && income <= 68,525){
    console.log((income * 0.25))
}else if (user == 2 && income >= 68,521 && income <= 104,425){
    console.log((income * 0.28))
}else if (user == 2 && income >= 104,426 && income <= 186,475){
    console.log((income * 0.33))
}else if (user == 2 && income >= 186,476){
    console.log((income * 0.35))
}

//'3 for head of household.'

else if (user == 3 && income <= 11,950){
    console.log((income * 0.10))
}else if (user == 3 && income >= 11,951 && income <= 45,500){
    console.log((income * 0.15))
}else if (user == 3 && income >= 45,501 && income <= 117,450){
    console.log((income * 0.25))
}else if (user == 3 && income >= 117,451 && income <= 190,200){
    console.log((income * 0.28))
}else if (user == 3 && income >= 190,201 && income <= 372,950){
    console.log((income * 0.33))
}else if (user == 3 && income >= 372,951){
    console.log((income * 0.35))
}else {
    alert('bad')
}